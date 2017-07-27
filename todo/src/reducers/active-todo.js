export default (stateProp = null, action) => {
  if (!stateProp) {
    return (<h4>Please add an item to the Todo List...</h4>);
  }
  switch (action.type) {
    case 'TODO_SELECTED':
      return action.payload;
    default:
      return stateProp;
  }
};
