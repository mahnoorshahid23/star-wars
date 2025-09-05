export async function fetchAllChars(){
    //axios npm 
    //await axios.get("")
    let response = await fetch("https://akabab.github.io/starwars-api/api/all.json");
    if(!response.ok){
        throw new Error("Error fetching character data");
    }
    const data=await response.json();
    return data;
}