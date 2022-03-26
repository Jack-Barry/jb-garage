<template>
  <v-app-bar app flat>
    <v-row>
      <v-spacer />
      <btn-dark-mode-toggle />
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import BtnDarkModeToggle from '@/components/BtnDarkModeToggle.vue'

export default Vue.extend({
  components: { BtnDarkModeToggle }
})
</script>
