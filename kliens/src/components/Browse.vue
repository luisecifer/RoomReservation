<template>
  <v-layout>
    <v-flex xs10 offset-xs1>
      <div class="white elevation-2 mt-5">
        <v-toolbar flat dense class="purple darken-1" dark>
          <v-toolbar-title>Foglalások</v-toolbar-title>
        </v-toolbar>
        <div
          class="pl-4 pr-4 pt-2 pb-2"
          v-for="reservation in reservations"
          :key="reservation.id">
          {{reservation.name}} -
          {{reservation.phonenumber}} -
          {{reservation.room}}

        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Hitelesites from '@/services/Hitelesites'
export default {
  data () {
    return {
      reservations: null
    }
  },
  async mounted () {
    this.reservations = (await Hitelesites.index()).data
  }
}
</script>

<style scoped>

/* .logo {
  cursor: pointer;
}

.logo:hover {
  color: black;
} */

</style>
