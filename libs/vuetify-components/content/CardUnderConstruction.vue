<template>
  <v-card>
    <v-card-title class="justify-center">
      <v-icon
        class="mx-2"
        color="warning"
        x-large
        v-text="'fa-helmet-safety'"
      />
    </v-card-title>
    <v-card-text class="text-center text-">
      Site is currently under construction, please come back soon!
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.v-card__text {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
