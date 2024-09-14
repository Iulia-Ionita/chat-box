<script lang="ts">
import { defineComponent } from "vue";
import { useApiStore } from "@/stores/apiStore";
import ComposeArea from "@/components/ComposeArea.vue";
import MessageEntry from "@/components/MessageEntry.vue";

export default defineComponent({
  components: {
    ComposeArea,
    MessageEntry
  },
  setup() {
    const apiStore = useApiStore();
    const currentUser = JSON.parse(apiStore.storeCurrentUser);
    const conversation = JSON.parse(apiStore.storeConversation);

    return { currentUser, conversation };
  },
});
</script>

<template>
  <div class="container-box">
    <div class="chat-box">
      <div v-for="message in conversation">
        <MessageEntry :message="message" :active="message.from.id === currentUser.id" />
      </div>
    </div>
    <ComposeArea />
  </div>
</template>


<style lang="scss" scoped>
.container-box {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
}

.chat-box {
  display: flex;
  width: auto;
  height: 90%;
  padding: 24px;
  border-radius: 8px;
  flex-direction: column;
  overflow: auto;
  background-color: lightgray;
}
</style>
