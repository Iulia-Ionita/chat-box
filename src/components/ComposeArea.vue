<script lang="ts">
import { defineComponent } from "vue";
import { useApiStore } from "@/stores/apiStore";
import { ref, watch } from 'vue';

export default defineComponent({
  data() {
    return {
      userNewMessage: "",
    }
  },

  methods: {
    sendMessage() {
      const apiStore = useApiStore();
      const currentUser = JSON.parse(apiStore.storeCurrentUser);
      const totalMessages = JSON.parse(apiStore.storeConversation).length;

      const newMessageObject = {
        id: totalMessages + 1,
        from: {
          id: currentUser.id,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          thumbnail: currentUser.thumbnail
        },
        message: this.userNewMessage,
        date: new Date(),
      }

      apiStore.createNewMessage(newMessageObject);
      this.userNewMessage = "";
    },
  },

})
</script>

<template>
  <div class="message-input">
    <textarea v-model="userNewMessage" ref="textarea" class="message-input-textarea" rows="1"
      placeholder="Type your message here..."
      oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
    <button class="message-input-button" @click="sendMessage">Send</button>
  </div>
</template>


<style lang="scss" scoped>
.message-input {
  display: flex;
  justify-content: space-between;
  width: auto;
  margin-top: 12px;

  &-textarea {
    flex-grow: 1;
    max-height: 50px;
    overflow-y: hidden;

  }

  &-button {
    width: 60px;
    margin-left: 12px;
  }
}
</style>
