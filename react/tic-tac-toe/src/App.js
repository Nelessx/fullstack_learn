function Square({value}){
    return <button className="bg-orange-400 w-11 h-11 border-black border-2 ">{value}</button>
}

export default function Board(){
    return (
        <>
        <div className="board-row">
            <Square value="X" />
            <Square value="X" />
            <Square value="X" />
        </div>
        <div className="board-row">
            <Square value="X" />
            <Square value="X" />
            <Square value="X" />
        </div>
        <div className="board-row">
            <Square value="X" />
            <Square value="X" />
            <Square value="X" />
        </div>
        </>
    );
}