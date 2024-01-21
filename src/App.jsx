
import Header from "./components/Header";
import CoreConceptList from "./components/CoreConceptList";
import TabButton from "./components/TabButton";

import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  console.log('App' + 'Reloading')

  const [selectedExample, setSelectedExample] = useState()


  const onExamplesButtonClickHandler = (item) => {
    setSelectedExample(item);
  }
  

  console.log(selectedExample)

  return (
    <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>
      </main>
        <CoreConceptList></CoreConceptList>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onExamplesButtonClickHandler('components')} buttonIsActive={(selectedExample === 'components')}>Components</TabButton>
            <TabButton onSelect={() => onExamplesButtonClickHandler('jsx')} buttonIsActive={(selectedExample === 'jsx')}>JSX</TabButton>
            <TabButton onSelect={() => onExamplesButtonClickHandler('props')} buttonIsActive={(selectedExample === 'props')}>Props</TabButton>
            <TabButton onSelect={() => onExamplesButtonClickHandler('state')} buttonIsActive={(selectedExample === 'state')}>State</TabButton>
          </menu>
          {selectedExample ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedExample].title}</h3>
            <p>{EXAMPLES[selectedExample].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedExample].code}
              </code>
            </pre>
          </div>
          ): <p>Please select a topic.</p>}
        </section>
    </div>
  );
}

export default App;