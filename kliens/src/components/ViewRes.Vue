<template>
  <v-layout>
    <v-flex xs10 offset-xs1>
      <div class="white elevation-2 mt-5">
        <v-toolbar flat dense class="purple darken-1" dark>
          <v-toolbar-title>Foglalásaim</v-toolbar-title>
            <v-spacer></v-spacer>
              <v-btn class="blue darken-2"
                @click="newRes"
                light
                small>
              <v-icon>add</v-icon>
              </v-btn>
              <!-- <v-btn class="green darken-1"
                @click="modify"
                light
                small>
              <v-icon>create</v-icon>
              </v-btn>
              <v-btn class="red accent-4"
                @click="del"
                light
                small>
              <v-icon>delete</v-icon>
              </v-btn> -->
          </v-toolbar>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Keresés"
              single-line
              hide-details>
            </v-text-field>
          </v-card-title>
          <!-- <ul>
            <li>
              <h2>
                Név
              </h2>
            </li>
            <li>
              <h2>
                Telefonszám
              </h2>
            </li>
            <li>
              <h2>
                Szobatípus
              </h2>
            </li>
            <li>
              <h2>
                Bejelentkezés
              </h2>
            </li>
            <li>
              <h2>
                Kijelentkezés
              </h2>
            </li>
          </ul>
          <div
            class="pl-4 pr-4 pt-2 pb-2"
            v-for="reservation in reservations"
            :key="reservation.id">
            {{ reservation.name }} -
            {{ reservation.phonenumber }} -
            {{ reservation.roomId }} -
            {{ reservation.checkIn }} -
            {{ reservation.checkOut }}
          </div> -->
          <div
            class="pl-4 pr-4 pt-2 pb-2">
            <v-data-table
            v-model="selected"
            :headers="fejLec"
            :items="reservations"
            :search="search"
            :pagination.sync="pagination"
            select-all
            item-key="name"
            class="elevation-1">
          <template slot="headers" slot-scope="props">
            <tr>
              <th
                v-for="fejLec in props.headers"
                :key="fejLec.text"
                :class="['column sortable', pagination.descending ? 'desc' : 'asc', fejLec.value === pagination.sortBy ? 'active' : '']"
                @click="changeSort(fejLec.value)">
              <v-icon small>arrow_upward</v-icon>
                {{ fejLec.text }}
              </th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.phonenumber }}</td>
              <td class="text-xs-center">{{ props.item.roomId }}</td>
              <td class="text-xs-center">{{ props.item.checkIn }}</td>
              <td class="text-xs-center">{{ props.item.checkOut }}</td>
              <td>
                <v-btn class="green darken-1"
                  @click="modify"
                  light
                  small>
                  <v-icon>create</v-icon>
                </v-btn>
                <v-btn class="red accent-4"
                  @click="del"
                  light
                  small>
                <v-icon>delete</v-icon>
                </v-btn>
              </td>
          </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
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
      search: '',
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      fejLec: [
        { text: 'Név', value: 'name', align: 'center', sortable: false },
        { text: 'Telefonszám', value: 'tel', align: 'center', sortable: false },
        { text: 'Szobatípus', value: 'room', align: 'center', sortable: false },
        { text: 'Bejelentkezés', value: 'checkin', align: 'center' },
        { text: 'Kijelentkezés', value: 'checkout', align: 'center' }
      ],
      reservations: []
    }
  },
  methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.reservations.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    newRes () {
      this.$router.push({
        name: 'reservation'
      })
    },
    modify () {
      this.$router.push({
        name: 'viewres'
      })
    },
    del () {

    }
  },
  async mounted () {
    this.reservations = (await Hitelesites.index()).data
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis:300');
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 5px 10px;
    padding: 10px;
  }
  h2 {
    font-family: 'Dosis', sans-serif;
  }
</style>
