
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";

const Examples = () => {

  const [selectedExample, setSelectedExample] = useState()

  const onExamplesButtonClickHandler = (item) => {
    setSelectedExample(item);
  }


  return (
    <Section 
      title="Examples"
      id="examples"
    >
      <menu>
        <TabButton onClick={() => onExamplesButtonClickHandler('components')} buttonIsActive={(selectedExample === 'components')}>Components</TabButton>
        <TabButton onClick={() => onExamplesButtonClickHandler('jsx')} buttonIsActive={(selectedExample === 'jsx')}>JSX</TabButton>
        <TabButton onClick={() => onExamplesButtonClickHandler('props')} buttonIsActive={(selectedExample === 'props')}>Props</TabButton>
        <TabButton onClick={() => onExamplesButtonClickHandler('state')} buttonIsActive={(selectedExample === 'state')}>State</TabButton>
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
      ) : <p>Please select a topic.</p>}
    </Section>);
}

export default Examples;