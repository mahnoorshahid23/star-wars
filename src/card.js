export function Card({c,onClick}){
    return(
        <div key={c.id} onClick={() => onClick(c)} className="shadow p-3 bg-stone-50 rounded-lg">
          <img src={c.image} alt={c.name} className="h-32 w-full object-cover rounded border-2 border-black" />
          <h2 className="mt-2 font-semibold text-black">{c.name}</h2>
          <p className="text-sm text-black ">Species: {c.species}</p>
          <p className="text-sm text-black ">Homeworld: {c.homeworld}</p>
        </div>
    );
}