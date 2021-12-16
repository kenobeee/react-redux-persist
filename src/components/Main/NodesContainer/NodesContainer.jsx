import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Nodes from '../Nodes/Nodes';

export default function FormContainer() {

  const myTree = useSelector(state => state.treeState.nodes);

  const currentLocation = useLocation().pathname;

  const currentNode = myTree.filter(node => (
    node.route === currentLocation
  ))[0] ?? myTree[0]

  return (
    <Nodes
      currentNode={currentNode}
    />
  )
}