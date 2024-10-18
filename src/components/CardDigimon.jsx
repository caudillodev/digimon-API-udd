export const CardDigimon = ({ digimon }) => {
    return (
        <div className="card">
            <div className="card__header">
                <img src={digimon.image} alt={`foto de ${digimon.name}`} />
            </div>
            <div className="card__body">
                <h2 className="card__title">{digimon.name}</h2>
                <p>ID: {digimon.id}</p>
            </div>
        </div>
    )
}