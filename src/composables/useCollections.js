import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";
import getUser from "./getUser";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const useCollection=(collection)=>{
    const error=ref(null)
        const { user } = getUser();
    const addDoc = async (doc) =>{
        error.value=null
        try {
            await projectFirestore.collection(collection).add(doc)
            Toastify({
      text: "Message successfully send!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
        } catch (err) {
            Toastify({
              text: `${err.message}`,
              className: "info",
              style: {
                background: "red",
              },
            }).showToast();
            error.value="Could not send the message"
        }
    }

    return { error, addDoc };
}

export default useCollection