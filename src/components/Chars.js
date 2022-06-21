export default function Chars(props) {
    const {chars, setChars} = props;
    const resetChars = ()=>{
        setChars(null)
    }
    
    return (
        <div className="characters">
            <h1>Personajes</h1>
        <span className="back-home" onClick={resetChars}>Volver a casa</span>
        <div className="container-characters">
            {chars.map((char, index)=> (
                <div className="character-container" key={index}>
                    <div>
                        <img src={char.image} alt={char.name} />
                    </div>
                    <div>
                        <h3>{char.name}</h3>
                        <h6>{char.status==='Alive' ?(
                            <>
                            <span className="alive"/>
                            Alive
                            </>
                        ) : (
                            <>
                            <span className="dead" />
                            Dead
                            </>
                        )}</h6>
                        <p>
                            <span className="text-gray">Episodios: </span>
                            <span>{char.episode.length}</span>

                        </p>
                        <p>
                            <span className="taxt-gray">Especie: </span>
                            <span>{char.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetChars}>Volver a casa</span>
        </div>
    )
}
