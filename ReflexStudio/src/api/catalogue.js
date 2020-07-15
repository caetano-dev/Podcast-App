import firebase from "../../firebase";
import "@firebase/firestore";

//state
//firebase
const db = firebase.firestore();
const nid = {
  reflex: "sToBbV6lqw2H62vS9UyU",
};
const networkRef = db.collection("network").doc(nid.reflex);

export const getCatalogue = async () => {
  const catalog = await networkRef.get().then((doc) => {
    if (doc.exists) {
      const res = doc.data();
      return res;
    } else {
      console.log("Error getting doc @ getCatalogue()");
    }
  });
  return catalog;
};
