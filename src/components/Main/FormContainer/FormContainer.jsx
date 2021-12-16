import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Form from '../Form/Form';

export default function FormContainer() {

  const newNode = useSelector(state => state.NewNodeState);
  const myTree = useSelector(state => state.treeState.nodes);

  const dispatch = useDispatch();
  const currentLocation = useLocation().pathname;

  const currentNode = myTree.filter(node => (
    node.route === currentLocation
  ))[0] ?? myTree[0]

  return (
    <Form
      newNode={newNode}
      currentNode={currentNode}
      dispatch={dispatch}
      currentLocation={currentLocation}
    />
  )
}