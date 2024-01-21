
import Header from "./components/Header";
import CoreConceptList from "./components/CoreConceptList";
import Examples from "./components/Examples";
import Section from "./components/Section";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConceptList></CoreConceptList>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;