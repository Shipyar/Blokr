<template>
  <div>
    <app-blokr-nav/>
    <section>
      <v-breadcrumbs>
        <v-icon slot="divider">chevron_right</v-icon>
        <v-breadcrumbs-item>Board1</v-breadcrumbs-item>
        <v-breadcrumbs-item>Board2</v-breadcrumbs-item>
      </v-breadcrumbs>
    </section>
    <section>
      <app-blokr-items/>
    </section>
    <app-alert
      v-if="error"
      @dismissed="onDismissed"
      :text="error.message"
      :snack="true"
    />
  </div>
</template>

<script>
// BlokrBoard content imports
import BlokrItems from '@/components/Blokr/BlokrItems.vue';
import BlokrNav from '@/components/Blokr/BlokrNavigation.vue';

export default {
  data() {
    return {
      showDialog: false,
    };
  },
  components: {
    'app-blokr-nav': BlokrNav,
    'app-blokr-items': BlokrItems,
  },
  methods: {
    onDismissed() {
      this.$store.dispatch('clearError');
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
</style>

