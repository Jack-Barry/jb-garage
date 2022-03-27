<template>
  <v-app>
    <app-header />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '../../../libs/vuetify-components/layout/AppHeader.vue'

export default Vue.extend({
  components: { AppHeader }
})
</script>
