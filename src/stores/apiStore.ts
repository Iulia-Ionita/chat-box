import { defineStore } from "pinia";
import { ref } from "vue";
import { currentUser, conversation } from "@/mockApi";

// Api store where we load all the information about the currentUser and conversation

export const useApiStore = defineStore("apiStore", () => {
  const storeCurrentUser = ref(currentUser);
  const storeConversation = ref(conversation);

  return { storeCurrentUser, storeConversation };
});
