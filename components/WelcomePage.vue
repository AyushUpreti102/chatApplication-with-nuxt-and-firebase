<template>
  <v-card
  >
  <v-card-title>
    <h1 class="mb-10">
      Welcome to the chat application
    </h1>
    <v-img :src="require('../static/Online-Video-Chat-Application.webp')" height="400px"></v-img>
  </v-card-title>
  
  <v-card-text class="mt-8">
    <v-row>
      <v-col lg="6" md="6" align-self="center">
        <h1>
          Chat with your friends
        </h1>
      </v-col>
      <v-col lg="6" md="6">
        <v-img :src="require('../static/chatting-friends.jpg')" height="300px"></v-img>
      </v-col>
    </v-row>
  </v-card-text>

  <v-card-text>
    <v-row>
      <v-col lg="6" md="6">
        <v-img
        :src="require('../static/chatting-with-friends.jpg')"
        height="300px"
        ></v-img>
      </v-col>
      <v-col lg="6" md="6" align-self="center">
        <h1>
          Create groups
        </h1>
      </v-col>
    </v-row>
  </v-card-text>

  </v-card>
</template>

<script>
export default {
    name: 'WelcomePage'
}
</script>

<style>

</style>