<template>
  <v-card v-if="getotherUsers.length && getUser">
    <v-card-title class="mt-3">Friends</v-card-title>
    <v-list>
      <v-list-item
        v-for="(user, i) in getotherUsers"
        :key="i"
      >
        <v-list-item-action>
          <v-avatar size="40" color="primary">
            <v-img v-if="user?.userProfile" :src="user?.userProfile"></v-img>
            <span v-else style="color: white">{{
              user?.userName.charAt(0).toUpperCase()
            }}</span>
          </v-avatar>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ user?.userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
  <v-card v-else elevation="0">
    <v-col class="mt-2" v-if="getUser">
      <v-btn depressed>Add Friends to Chat</v-btn>
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: "OtherUsers",
  computed: {
    getotherUsers() {
      return this.$store.getters.getotherUsers;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style></style>
