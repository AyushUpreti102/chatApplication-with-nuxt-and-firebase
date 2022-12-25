<template>
  <div>
    <v-dialog v-model="dialog" width="60%">
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">Signin</div>
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
              :counter="8"
              :rules="passwordRules"
              :type="showPassword ? 'name' : 'password'"
              label="Password"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              required
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-card-text
              ><v-row justify="center"
                ><div style="cursor: pointer" @click="changeForm = !changeForm">
                  {{
                    changeForm
                      ? "Already a user? sign in"
                      : "Not Signed up yet? Sign up to become a member of chat application"
                  }}
                </div></v-row
              ></v-card-text
            >

            <v-row justify="center" class="mt-5">
              <v-btn
                :disabled="!valid"
                color="success"
                width="80%"
                large
                :loading="isLoading"
                @click.stop="validateLoginOrSignUp"
              >
                {{ changeForm ? "Signup" : "Signin" }}
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
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      showPassword: false,
      changeForm: false,
      isLoading: false,
    };
  },
  methods: {
    async validateLoginOrSignUp() {
      this.$refs.form.validate();
      if (this.changeForm) {
        this.isLoading = true;
        await this.$store.dispatch("Signup", {
          email: this.email,
          password: this.password,
        });
        this.isLoading = false;
        this.dialog = false;
      } else {
        this.isLoading = true;
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.isLoading = false;
        this.dialog = false;
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<style></style>
