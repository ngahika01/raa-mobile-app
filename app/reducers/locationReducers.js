export const saveLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_LOCATION:
      return action.location;
    default:
      return state;
  }
};
