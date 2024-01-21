
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data"

import "./CoreConceptList.css"

const CoreConceptList = (props) => {
    return (
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>))}
        </ul>
      </section>
    );
  }

  export default CoreConceptList;