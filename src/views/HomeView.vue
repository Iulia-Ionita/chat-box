<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatBox from "@/components/ChatBox.vue"; // @ is an alias to /src

@Options({
  components: {
    ChatBox,
  },
})
export default class HomeView extends Vue { }
</script>

<template>
  <div class="container">
    <ChatBox />
  </div>
</template>


<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>
