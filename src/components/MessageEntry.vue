<script lang="ts">
import { defineComponent } from "vue";
import { useApiStore } from "@/stores/apiStore";

export default defineComponent({
  props: {
    message: {
      type: Object
    },
    active: {
      type: Boolean
    }
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
  <div class="chat-box-message">
    <div :class="active ? 'chat-box-message-right' : 'chat-box-message-left'">
      <img v-if="!active" class="image-icon" :src="message?.from.thumbnail" alt="" srcset="">
      <div :class="active ? 'chat-box-message-right-content' : 'chat-box-message-left-content'"> {{ message?.message }}
      </div>
      <img v-if="active" class="image-icon" :src="message?.from.thumbnail" alt="" srcset="">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.chat-box-message {
  display: flex;

  &:has(&-right) {
    align-self: flex-end;
    justify-content: flex-end;
  }

  &:has(&-left) {
    align-self: flex-start;
    justify-content: flex-start;
  }

  &-left,
  &-right {
    &-content {
      padding: 8px;
      border-radius: 8px;
      white-space: break-spaces;
      text-align: left;
    }

    max-width: 60%;
    width:fit-content;
    margin: 8px 0;
    display: flex;
    align-items: flex-end;
  }

  &-right {
    &-content {
      background-color: blue;
      margin-right: 8px;
    }
  }

  &-left {
    &-content {
      background-color: white;
      margin-left: 12px;
    }
  }
}

.image-icon {
  border-radius: 50%;
  width: 48px;
  height: 48px;
}
</style>
