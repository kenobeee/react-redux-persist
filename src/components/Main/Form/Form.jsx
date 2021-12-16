import {useState} from "react";
import {updateTree} from '../../../reducers/treeReducer'
import {updateNewNodeState} from "../../../reducers/newNodeReducer";
import './Form.scss';

export default function Form({newNode, currentNode, dispatch, currentLocation}) {

  const [formState, setFormState] = useState({
    title: '',
    route: '',
  });
  const [isValidState, setValidState] = useState({
    title: true,
    route: true,
    button: false,
  });

  const handleInput = event => {
    let pattern;
    const inputName = event.target.name;
    const inputValue = event.target.value;

    inputName === 'title' ?
      pattern = inputValue.replace(/[^A-Za-zА-Яа-я]/g,'') :
      pattern = inputValue.replace(/[^a-z]/g,'');

    pattern === inputValue ?
      setValidState({...isValidState, [inputName]: true, button: false}) :
      setValidState({...isValidState, [inputName]: false, button: true});

    dispatch(updateNewNodeState([event.target.name, event.target.value], currentNode, currentLocation));
    setFormState({...formState, [event.target.name]: event.target.value});
  }

  const handleSubmit = () => {
    dispatch(updateTree(newNode));
    currentNode.nodes.push(newNode);
    setFormState({
      title: '',
      route: ''
    });
  }

  return (
    <section className="form-section" data-theme={currentNode.nodes.length > 0 ? 'whatsapp-theme' : 'facebook-theme'}>
      <div className="form-section__wrapper form">

        <h2 className="form__title theme-indicator">New node</h2>

        <div className="form__layer">
          <label className="form__label theme-indicator" htmlFor="titleInput">Title</label>
          <input
            className={`form__input valid-${isValidState.title}`}
            type="text" id="titleInput"
            value={formState.title}
            name="title"
            onChange={handleInput}
            placeholder="letters only (any case)"
          />
        </div>

        <div className="form__layer">
          <label className="form__label theme-indicator" htmlFor="routeInput">Route</label>
          <input
            className={`form__input valid-${isValidState.route}`}
            type="text"
            id="routeInput"
            value={formState.route}
            name="route"
            onChange={handleInput}
            placeholder="latin letters only (lowercase)"
          />
        </div>

        <button
          className="form__submit theme-indicator"
          disabled={isValidState.button}
          onClick={handleSubmit}
        >
          Add node
        </button>

      </div>
    </section>
  )
}