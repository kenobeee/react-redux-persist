import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Form from '../Form/Form';

export default function FormContainer({currentNode}) {

  const newNode = useSelector(state => state.NewNodeState);
  const dispatch = useDispatch();
  const currentLocation = useLocation().pathname;

  return (
    <Form
      newNode={newNode}
      currentNode={currentNode}
      dispatch={dispatch}
      currentLocation={currentLocation}
    />
  )
}