export default function Musician( { name, listenersNum, ...albumsNames } ) {
    return (
        <>
            <h1>{name}</h1>
            <h2><u>к-сть слухачів:</u> {listenersNum}</h2>
            <h2><u>альбоми: </u></h2>
            { 
                Object.keys(albumsNames).map(key => (
                    <h3><em>{albumsNames[key]}</em></h3>
                ))
            }
        </>
    )
}