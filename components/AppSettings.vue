<template>
  <v-container>
    <v-row @click="showSettings = !showSettings">
      <v-col class="ml-2">Settings</v-col>
      <v-col cols="2" class="mr-2">
        <v-icon>mdi-cog</v-icon>
      </v-col>
    </v-row>
    <v-row no-gutters v-if="showSettings">
      <v-col>
        <v-card elevation="0">
          <v-card-title v-if="!getUser">
            <SignIn/>
          </v-card-title>
          <v-card-title @click.stop="changeTheme">
            Switch to {{$vuetify.theme.dark ? 'light mode' : 'dark mode'}}
          </v-card-title>
          <v-card-title v-if="getUser">
            Edit Profile
          </v-card-title>
          <v-card-title v-if="getUser">
            All Friends
          </v-card-title>
          <v-card-title v-if="getUser" @click.stop="logout">
            Logout
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignIn from "./SignIn.vue";

export default {
  name: "AppSettings",
  components: { SignIn },
  data(){
    return{
      showSettings: false
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$store.dispatch("changeTheme", this.$vuetify.theme.dark);
    },
    logout() {
      this.$store.dispatch("logout");
    },
  }
};
</script>

<style scoped></style>
