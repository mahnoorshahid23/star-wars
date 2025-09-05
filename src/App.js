import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import {fetchAllChars} from './fetchChars';
import { CardGrid } from './cardGrid';
import { CharInfo } from './charInfo';
import SearchFilterBar from './searchFilterBar';
function App() {
  const [characters,setcharacters]=useState([]);
  const [error,seterror]=useState(null);
  const [loading,setloading]=useState(true);
  const [selectedChar,setSelectedChar]=useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  
  useEffect(()=>{
      async function loadData(){
        try{
          const data = await fetchAllChars();
          setcharacters(data);
        }catch(err){
          seterror(err.message);
        }finally{
          setloading(false); 
        }
      }
      loadData();
  },[]);

  const filteredCharacters = characters
  .filter((c) =>
    c.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((c) => {
    if (filterType === "species" && filterValue)
      return String(c.species || "").toLowerCase().includes(filterValue.toLowerCase());
    if (filterType === "homeworld" && filterValue)
      return String(c.homeworld || "").toLowerCase().includes(filterValue.toLowerCase());
    return true;
  });

  return (
    <div className="bg-rose-950 min-h-screen">
      
      {!selectedChar && (
        <>
          <div className=" bg-rose-950 p-4">
            <h1 className="text-4xl text-stone-50 font-bold font-serif text-center ">
              Star Wars Character Explorer
            </h1>
          </div>
          <SearchFilterBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterType={filterType}
            setFilterType={setFilterType}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </>
      )}
  
     {loading && (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-solid"></div>
          <span className="ml-4 text-yellow-300 text-xl font-semibold">Loading Characters...</span>
        </div>
      )}
      {error && (
        <div className="flex flex-col justify-center items-center min-h-[50vh] text-center">
          <p className="text-red-400 text-xl font-bold">⚠️ Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg"
          >
            Retry
          </button>
        </div>
      )}
      {!loading && !error  && !selectedChar && (
        <CardGrid c={filteredCharacters} onClick={setSelectedChar}></CardGrid>
      )}
      {selectedChar && (
        <CharInfo selectedChar={selectedChar} onClick={setSelectedChar}></CharInfo>
      )}
    </div>
    
  );
}

export default App;
