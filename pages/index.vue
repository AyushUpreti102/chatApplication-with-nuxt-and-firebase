<template>
  <div>
    <WelcomePage v-if="!getUser"/>
    <ChattingPage v-else/>
  </div>
</template>

<script>
import ChattingPage from '../components/ChattingPage.vue';
import WelcomePage from '../components/WelcomePage.vue';

export default {
    name: "IndexPage",
    components: { WelcomePage, ChattingPage },
    computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
}
</script>
