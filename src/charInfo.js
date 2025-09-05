export function CharInfo({ selectedChar, onClick }) {
  return (
    <div className="h-screen w-screen bg-rose-950 flex items-center justify-center">
        <div className="bg-white h-[90vh] w-[90vw] rounded-xl shadow-lg flex flex-col p-6">
            <h2 className="text-3xl font-bold mb-4 text-center">{selectedChar.name}</h2>
            <div className="flex flex-1 gap-6 overflow-hidden">
                <div className="w-1/3 h-full flex justify-center items-start">
                    <img
                        src={selectedChar.image}
                        alt={selectedChar.name}
                        className="h-full w-full rounded-lg shadow-md object-contain"
                    />
                </div>
                <div className="w-2/3 overflow-y-auto pr-3 space-y-3 text-gray-700">
                    {Object.entries(selectedChar).map(([key, value]) => {
                        if (["id", "name", "image", "wiki"].includes(key)) return null;

                        if (Array.isArray(value) && value.length > 0) {
                            return (
                                <div key={key}>
                                    <b className="capitalize">{key}:</b>
                                    <ul className="list-disc list-inside ml-4">
                                        {value.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }

                        if (typeof value === "object" || value === null) return null;

                        return (
                            <p key={key}>
                                <b className="capitalize">{key}:</b> {value}
                            </p>
                        );
                    })}
                </div>
            </div>

            <div className="mt-4">
            <button
                onClick={() => onClick(null)}
                className="w-full py-2 bg-rose-950 text-white rounded-lg hover:bg-gray-800 transition"
            >
                Close
            </button>
            </div>
        </div>
    </div>
  );
}
