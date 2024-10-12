import { CardDigimon } from "./CardDigimon"
import { useFetchDigimon } from "../hooks/useFetchDigimon"


export const DigimonList = () => {
    const { digimons, loading } = useFetchDigimon()

    return (
      <>
        {
            loading ? (
                <p>Loading...</p>
            ) : (
                digimons.map((digimon) => (
                  <div key={digimon.id}>
                    <CardDigimon digimon={digimon} />
                  </div>
                ))
            )
        }
      </>
    );
}