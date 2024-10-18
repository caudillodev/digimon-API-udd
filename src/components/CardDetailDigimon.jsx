

export const CardDetailDigimon = ( { digimon }) => {
    
    return (
        <>
            <div className="card">
                <div className="card__header">
                    <img src={digimon.images[0]?.href} alt={`Foto de ${digimon.name}`}></img>
                    <h2>{digimon.name}</h2>
                    <p>{digimon.id}</p>
                </div>

                <div className="card__body">
                    <p>{digimon.level}</p>
                    {
                        digimon.attributes.map(attribute =>(
                            <p key={attribute.id}>{attribute.attribute}</p>
                        ))
                    }
                    <p>Año de Lanzamiento : {digimon.releaseDate}</p>

                </div>
            </div>
        </>
    )

}