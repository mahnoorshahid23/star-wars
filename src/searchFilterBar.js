export default function SearchFilterBar({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  filterValue,
  setFilterValue,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between ml-6">
        <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 w-full md:w-1/3"
        />

        <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-white border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
            <option value="select" >Select</option>
            <option value="species">Species</option>
            <option value="homeworld">Homeworld</option>
        </select>

        <input
            type="text"
            placeholder={
                filterType === "species"? "Enter species...": filterType === "homeworld"? "Enter homeworld...": "Select type"
            }
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            disabled={filterType === "select"}
            readOnly={filterType === "select"}
            className={`mr-6 border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 w-full md:w-1/3 
                ${!filterType ? "bg-white cursor-not-allowed mr-6" : "bg-white"}`
            }
        />
    </div>
  );
}
