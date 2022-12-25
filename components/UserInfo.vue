<template>
  <v-card>
    <v-row v-if="getUser" justify="center" align="center">
      <v-col class="mt-3" lg="3" md="3" sm="3">
        <v-avatar size="50" color="primary" class="ml-2">
          <v-img
            v-if="getUser?.userProfile"
            :src="getUser?.userProfile"
          ></v-img>
          <span v-else style="color: white">{{
            getUser?.userName.charAt(0).toUpperCase()
          }}</span>
        </v-avatar>
      </v-col>
      <v-col>
        {{ 'Logged in as ' + getUser?.userName.toUpperCase() }}
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="mt-3 ml-3">Sign in to continue</v-col>
    </v-row>
    <v-row>
      <AppSettings />
    </v-row>
  </v-card>
</template>

<script>
import AppSettings from "./AppSettings.vue";
import SignIn from "./SignIn.vue";

export default {
  name: "UserInfo",
  components: { SignIn, AppSettings },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style></style>
