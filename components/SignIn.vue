<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="60%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on"> Sign In </v-btn>
      </template>

      <v-card>
        <v-card-title> Sign In to continue </v-card-title>

        <v-card-subtitle>
          <v-form ref="form" v-model="valid" lazy-validation class="my-10">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :counter="10"
              :rules="passwordRules"
              :type="type"
              label="Password"
              :append-icon="icon"
              required
              @click:append="showPassword"
            ></v-text-field>

            <v-row justify="center" class="mt-5">
              <v-btn
                :disabled="!valid"
                color="success"
                width="80%"
                large
                @click="validate"
              >
                Sign In
              </v-btn>
            </v-row>
          </v-form>
        </v-card-subtitle>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      dialog: false,
      valid: true,
      password: "",
      passwordRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      showPasswrd: false,
      icon: "mdi-eye",
      type: "password",
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    showPassword() {
      this.showPasswrd = !this.showPasswrd;
      if (this.showPasswrd) {
        this.icon = "mdi-eye-off";
        this.type = "name";
      } else {
        this.icon = "mdi-eye";
        this.type = "password";
      }
    },
  },
};
</script>

<style></style>
