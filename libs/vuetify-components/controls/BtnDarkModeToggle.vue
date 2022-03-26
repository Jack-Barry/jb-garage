<template>
  <v-btn fab x-small class="ma-2" @click="toggleTheme">
    <v-icon v-text="themeToggleIcon" />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    themeToggleIcon() {
      return this.$vuetify.theme.dark ? 'fa-sun' : 'fa-moon'
    }
  },

  mounted() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.$vuetify.theme.dark = e.matches
      })
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
})
</script>
