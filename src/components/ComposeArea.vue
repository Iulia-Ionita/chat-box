<script lang="ts">
import { defineComponent } from "vue";
import { useApiStore } from "@/stores/apiStore";

export default defineComponent({

});
</script>

<template>
  <div class="message-input">
    <textarea class="message-input-textarea" rows="1" max-rows="3"
      oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
    <button class="message-input-button">Send</button>
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
