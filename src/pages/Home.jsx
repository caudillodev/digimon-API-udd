import { Header } from "../components/Header"
import { ErrorBoundary } from "react-error-boundary";
import { DigimonList } from "../components/DigimonList";
import { ErrorFallback } from "../components/ErrorFallback";

export const Home = () => {
    return (
      <>
        <Header title="DigimonApp" subtitle="Encuentra tu compañero Digimon" />

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
}