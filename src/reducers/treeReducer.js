const ADD_NODE_TO_TREE = 'ADD_NODE_TO_TREE';

const treeState = {
  nodes: [
    {
      title: 'Main',
      route: '/main',
      nodes: [],
      parentNode: '/',
    }
  ],
}

export const updateTree  = newNode => ({
  type: ADD_NODE_TO_TREE,
  newNode
})

export const treeReducer = (state = treeState, action) => {
  switch (action.type) {
    case ADD_NODE_TO_TREE:
      return {
        ...state,
        nodes: [...state.nodes, action.newNode]
      }
    default:
      return state;
  }
}