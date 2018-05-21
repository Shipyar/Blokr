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
    <app-blokr-create

    >
    </app-blokr-create>
  </div>
</template>

<script>
import NewBlok from '@/components/Blokr/BlokrCreate.vue'
// BlokrBoard content imports
import BlokrItems from '@/components/Blokr/BlokrItems.vue'
import BlokrNav from '@/components/Blokr/BlokrNavigation.vue'

export default {
  data() {
    return {
      NewBlok: false,
    }
  },
  components: {
    'app-blokr-create': NewBlok,
    'app-blokr-nav': BlokrNav,
    'app-blokr-items': BlokrItems,
  }
}
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
</style>

