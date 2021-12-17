import {Link} from 'react-router-dom';

import './Header.scss';

export default function Header({currentNode}) {
  return (
    <header data-theme={currentNode.nodes.length > 0 ? 'whatsapp-theme' : 'facebook-theme'}>
      <div className="top-header container">
        <h1 className="top-header__title theme-indicator">{currentNode.title}</h1>
        <Link className="top-header__parent-node theme-indicator" to={currentNode.parentNode.route ?? '/'} >To parent node</Link>
      </div>
    </header>
  );
}