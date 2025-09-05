import { Card } from "./card"
export function CardGrid({c,onClick}){
    return(<div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto h-auto p-4 bg-rose-950">
      {c.map((char) => (
        <Card c={char} onClick={onClick}></Card>
      ))}
    </div>);
}