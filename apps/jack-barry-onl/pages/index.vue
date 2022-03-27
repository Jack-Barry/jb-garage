<template>
  <v-container>
    <card-under-construction />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { CardUnderConstruction } from '../../../libs/vuetify-components'

export default Vue.extend({
  components: { CardUnderConstruction }
})
</script>
