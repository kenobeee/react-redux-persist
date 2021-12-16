const UPDATE_NEW_NODE = 'UPDATE_NEW_NODE';

const NewNodeState = {
  title: '',
  route: '',
  nodes: [],
  parentNode: ''
}

export const updateNewNodeState = ([name, value], currentNode, currentUrl) => ({
  type: UPDATE_NEW_NODE,
  [name]: value,
  currentNode,
  currentUrl
});

export const newNodeReducer = (state = NewNodeState, action) => {
  switch (action.type) {
    case UPDATE_NEW_NODE:
      return {
        ...state,
        title: action.title || state.title,
        route: action.route && `${action.currentUrl}/${action.route}` || state.route,
        parentNode: action.currentNode,
      };
    default:
      return state;
  }
}