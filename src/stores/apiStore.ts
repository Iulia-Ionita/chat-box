import { defineStore } from "pinia";
import { ref } from "vue";
import { currentUser, conversation } from "@/mockApi";

// Api store where we load all the information about the currentUser and conversation


interface Message {
  id: number;
  from: {
    id: number;
    firstName: string;
    lastName: string;
    thumbnail: string;
  };
  message: string;
  date: Date;
}

export const useApiStore = defineStore("apiStore", () => {
  const storeCurrentUser = ref(currentUser);
  const storeConversation = ref(conversation);
  const storeMessages = ref<Message[]>([]);

  return {
    storeMessages,
    storeCurrentUser,
    storeConversation,
    createNewMessage(message: Message) {
      storeMessages.value.push(message);
    }
  };
});
