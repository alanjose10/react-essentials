
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data"
import Section from "./Section";
import "./CoreConceptList.css"

const CoreConceptList = (props) => {
  return (
    <Section 
      id="core-concepts"
      title="Core Concepts"
      >
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>))}
      </ul>
    </Section>
  );
}

export default CoreConceptList;