export default function reducer(state, action) {
  switch (action.type) {
    // Auth
    case "test":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}
