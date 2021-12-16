import {useSelector} from "react-redux";
import {Link, useLocation} from 'react-router-dom';

import './Header.scss';

export default function Header() {

  const myTree = useSelector(state => state.treeState.nodes);

  const currentLocation = useLocation();

  const currentNode = myTree.filter(node => (
    node.route === currentLocation.pathname
  ))[0] ?? myTree[0]

  return (
    <header data-theme={currentNode.nodes.length > 0 ? 'whatsapp-theme' : 'facebook-theme'}>
      <div className="top-header container">
        <h1 className="top-header__title">{currentNode.title}</h1>
        <Link className="top-header__parent-node" to={currentNode.parentNode.route ?? '/'} >To parent node</Link>
      </div>
    </header>
  );
}