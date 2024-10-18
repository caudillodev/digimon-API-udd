import { Header } from "../components/Header";
import { ErrorBoundary } from "react-error-boundary";
import { DigimonList } from "../components/DigimonList";
import { ErrorFallback } from "../components/ErrorFallback";
import { InputDigimon } from "../components/InputDigimon";
import { useState } from "react";
import { DigimonDetail } from "../components/DigimonDetail";

export const Home = () => {
  const [searchDigimon, setSearchDigimon] = useState("");
  const [digimonSearched, setDigimonSearched] = useState("");

  const handleSearchChange = (event) => {
    setSearchDigimon(event.target.value);
  };

  const handleOnKey = (event) => {
    if (event.key === "Enter") {
      setDigimonSearched(searchDigimon); // Aquí actualizamos digimonSearched
      setSearchDigimon(""); // Limpiar el campo de búsqueda si lo deseas
    }
  };

  return (
    <>
      <Header title="DigimonApp" subtitle="Encuentra tu compañero Digimon" />

      <section>
        <h3>¿Qué Digimon buscas?</h3>
        <InputDigimon
          value={searchDigimon}
          handleOnChange={handleSearchChange}
          handleKeyDown={handleOnKey}
        />
        <div>
          {digimonSearched.length > 0 ? ( // Utilizamos digimonSearched aquí
            <DigimonDetail digimonSearched={digimonSearched} />
          ) : null}
        </div>
      </section>
      <section>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
          <DigimonList />
        </ErrorBoundary>
      </section>
    </>
  );
};
