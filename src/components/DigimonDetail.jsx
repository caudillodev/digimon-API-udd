import { useFetchOneDigimon } from "../hooks/useFetchOneDigimon"
import { CardDetailDigimon } from "./CardDetailDigimon"

export const DigimonDetail = ({digimonSearched}) => {
   const { digimon, loading, error } = useFetchOneDigimon(digimonSearched);

   if (loading) {
     return <p>Cargando detalles del Digimon...</p>;
   }

   if (error) {
     return <p>Error al cargar el Digimon: {error.message}</p>;
   }

   return <CardDetailDigimon digimon={digimon} />;
}