import {Link} from "react-router-dom";
import './Nodes.scss';

export default function Form({currentNode}) {
  return (
    <section className="nodes-section">
      <div className="nodes-section__wrapper">
        <ul className="nodes-section__list">
          {currentNode.nodes &&
            currentNode.nodes.map( (node, index) => (
              <li className="nodes-section__item" key={index}><Link className="nodes-section__link" to={node.route}>{node.title}</Link></li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}