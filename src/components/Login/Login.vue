<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <v-layout row>
              <v-flex xs12>
                <h3 class="headline text-xs-center">Login</h3>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <v-container>
              <form>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="email"
                                  label="Email Address"
                                  id="email"
                                  v-model="user.email"
                                  required
                                  type="email">
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="password"
                                  label="Password"
                                  id="password"
                                  v-model="user.password"
                                  required
                                  type="password">
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6>
                    <v-btn type="submit"
                    @click.prevent="login"
                    color="secondary"
                    :loading="loading"
                    :disabled="loading">
                    Submit
                    </v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn to="/sign-up">Create Account</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Firebase Import for login systems
import 'vuetify/dist/vuetify.min.css'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      }
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  watch: {
    currentUser(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/hello')
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('signInUser', { email: this.user.email, password: this.user.password})
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
