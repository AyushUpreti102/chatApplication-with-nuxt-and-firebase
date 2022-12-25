<template>
  <v-card height="91vh" width="100vw">
    <v-card height="90%">
        <v-card-subtitle>
            <v-row class="mb-4">
                <v-chip>Test Chip</v-chip>
            </v-row>
            <v-row class="mb-4">
                <v-chip>Test Chip</v-chip>
            </v-row>
            <v-row class="mb-4">
                <v-chip>Test Chip</v-chip>
            </v-row>
            <v-row class="mb-4">
                <v-chip>Test Chip</v-chip>
            </v-row>
            <v-row class="mb-4">
                <v-chip>Test Chip</v-chip>
            </v-row>
        </v-card-subtitle>
    </v-card>
    <v-text-field
      color="white"
      label="enter the message"
      outlined
      append-icon="mdi-send-circle"
    ></v-text-field>
  </v-card>
</template>

<script>
export default {
  name: "ChattingPage",
};
</script>

<style>
.v-input__icon.v-input__icon--append i {
  font-size: 40px;
  margin-right: 20px;
}
</style>
