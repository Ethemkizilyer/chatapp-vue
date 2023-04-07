import { firebase } from "@firebase/app";
import "@firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const deleteMessage = async (uid, messageId) => {
  const db = firebase.firestore();
  const messageRef = db.collection("messages").doc(messageId);
  const messageDoc = await messageRef.get();
  const userId = firebase.auth().currentUser.uid;
  if (messageDoc.exists && userId === uid) {
    await messageRef.delete();
    Toastify({
      text: "Message successfully deleted!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    console.log("Message successfully deleted!");
  } else {
    Toastify({
      text: "Message does not exist or does not belong to the user",
      className: "info",
      style: {
        background: "red",
      },
    }).showToast();
  }

};

export default deleteMessage;
