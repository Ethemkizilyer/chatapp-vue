<template>
  <div class="container">
    <Navbar />
    <NewChatFormVue/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";
import NewChatFormVue from '@/components/NewChatForm.vue';

export default {
  components: { Navbar,NewChatFormVue },
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
