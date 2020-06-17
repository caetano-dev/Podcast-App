import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as firebase from "firebase";

//
// Initial State...
//

const initialState = {
  episodeCatalog: {},
};

//
// Reducer...
//

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setPersonData":
      return { ...state, episodeCatalog: action.value };

    default:
      return state;
  }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators
//

const setPersonData = (episodeCatalog) => {
  return {
    type: "setPersonData",
    value: episodeCatalog,
  };
};

const watchPersonData = () => {
  return function (dispatch) {
    firebase
      .database()
      .ref("person")
      .on(
        "value",
        function (snapshot) {
          var episodeCatalog = snapshot.val();
          var actionSetPersonData = setPersonData(episodeCatalog);
          dispatch(actionSetPersonData);
        },
        function (error) {
          console.log(error);
        }
      );
  };
};

export { setPersonData, watchPersonData };
