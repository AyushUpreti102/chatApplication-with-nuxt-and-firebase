<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      width="300"
    >
      <UserInfo />
      <OtherUsers />
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Chat Application</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import OtherUsers from "../components/OtherUsers.vue";
import UserInfo from "../components/UserInfo.vue";
export default {
  name: "DefaultLayout",
  components: { UserInfo, OtherUsers },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
    };
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  mounted() {
    this.$vuetify.theme.dark = this.getTheme;
  },
};
</script>
