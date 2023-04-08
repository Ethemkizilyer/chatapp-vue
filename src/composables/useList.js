import axios from "axios";

import { ref, onMounted } from "vue";

const list = ref([]);

export function useList() {
  async function getUse() {
    const response = await axios.get("/user.json");
// console.log(response)
    const responseList = Object.keys(response.data).map((key) => {
      return {
        id: key,
        ...response.data[key],
      };
    });

    list.value = [...responseList];
  }

  onMounted(async () => {
    await getUse();
  });
  return { getUse, list };
}
