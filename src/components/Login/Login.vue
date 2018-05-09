<template>
  <v-content>
    <app-header/>
    <v-container fluid fill-height class="background">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-6">
            <v-toolbar-title>
              <app-alert v-if="error"
                         @dismissed="onDismissed" 
                         :text="error.message">
                         </app-alert>
            </v-toolbar-title>
            <v-card-text>
              <v-form>
                <v-text-field name="email"
                              label="Email Address"
                              id="email"
                              v-model="user.email"
                              required
                              type="email"
                              prepend-icon="person">
                </v-text-field>
                <v-text-field name="password"
                              label="Password"
                              id="password"
                              v-model="user.password"
                              required
                              type="password"
                              prepend-icon="lock">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit"
                    @click.prevent="login"
                    color="primary"
                    :loading="loading"
                    :disabled="loading">
                    Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// Firebase Import for login systems
import Header from '@/components/Shared/Header.vue'

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
  components: {
    'app-header': Header
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
.background{
  background-color: #2AD19A;
}
</style>
