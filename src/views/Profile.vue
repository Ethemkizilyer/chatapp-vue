<template>
  <div class="container">
    <Navbar />
    <FormSection />
    <ItemList />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";

import { useRouter } from "vue-router";
import { watch } from "vue";
import NewChatFormVue from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import FormSection from "@/components/FormSection.vue";
import ItemList from "@/components/ItemList.vue";

export default {
  components: { Navbar, NewChatFormVue, ChatWindow ,FormSection,ItemList},
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });
  },
};
</script>

<style></style>
