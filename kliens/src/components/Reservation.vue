<template>
  <div>
    <v-layout v-if="$store.state.loggedIn">
      <v-flex xs10 offset-xs1>
        <div class="white elevation-2 mt-5">
          <v-toolbar flat dense class="purple darken-1" dark>
            <v-toolbar-title>
              Szobafoglalás
            </v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="Név"
              v-model="reservation.name">
            </v-text-field>
            <v-text-field
              mask="(##) ###-##-##"
              label="Mobil"
              v-model="reservation.phonenumber">
            </v-text-field>
            <v-select
              v-model="form.szobak"
              :items="szobaValaszt"
              color="pink"
              label="Szobatípusok"
              required>
            </v-select>
            <!-- <v-select
              v-model="reservation.roomId"
              :items="items"
              label="Standard">
            </v-select> -->
            <!-- <v-text-field
              label= {{ foglSzoba }}
              v-model="reservation.phonenumber">
            </v-text-field> -->
            <!-- <div>
              {{ foglSzoba }}
            </div> -->

            <!-- <v-btn
              color="light-green darken-1"
              light>
              egyágyas szoba
              <v-icon medium right>local_hotel</v-icon>
            </v-btn>
            <v-btn
              color="light-green darken-1"
              light>
              kétágyas szoba
              <v-icon medium right>local_hotel</v-icon>
            </v-btn>
            <v-btn
              color="light-green darken-1"
              light>
              családi szoba
              <v-icon medium right>local_hotel</v-icon>
            </v-btn>
            <v-btn
              color="light-green darken-1"
              light>
              deluxe szoba
              <v-icon medium right>local_hotel</v-icon>
            </v-btn>
            <v-btn
              color="light-green darken-1"
              light>
              lakosztály
              <v-icon medium right>local_hotel</v-icon>
            </v-btn> -->

            <div>
              <h1>
                Szobatípusok
              </h1>
            </div>
            <div class="pl-4 pr-4 pt-2 pb-2">

              <v-layout row wrap>
                <v-flex>
                  <br>
                  <br>
                  <h1>
                    Kérem válasszon dátumot
                  </h1>
                  <br>
                  <v-date-picker
                    class="purple" dark
                    v-model="reservation.date"
                    :min="new Date().toISOString().slice(0,10)"
                    ref="picker"
                    full-width>
                  </v-date-picker>
                  <p>
                    {{ reservation.date }}
                  </p>
                </v-flex>
                <br>
                <br>
              </v-layout>
              <br>
              <div class="text-xs-center">
                <v-btn
                  @click="foglal"
                  round color="primary"
                  dark>
                  Mentés
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Hitelesites from '@/services/Hitelesites'
export default {
  // props: {
  //   foglSzoba: {
  //     type: String
  //   }
  // },
  data () {
    const szobaForm = Valaszto.sz ({
      szobak: ''
    })
    return {
      form: Object.assign({}, szobaForm),
        szobaValaszt: ['Egyágyas szoba', 'Kétágyas szoba', 'Családi szoba', 'Deluxe szoba', 'Lakosztály']
      },
      reservation: {
        name: '',
        phonenumber: '',
        roomId: '',
        date: new Date().toISOString().slice(0, 10)
      }
    }
  },
  // data: () => ({
  //   items: ['Egyágyas szoba', 'Kétágyas szoba', 'Családi szoba', 'Deluxe szoba', 'Lakosztály']
  // }),
  methods: {
    // egyagy () {
    //   this.foglSzoba = 'Egyágyas szoba'
    // },
    // ketagy () {
    //   this.foglSzoba = 'Kétágyas szoba'
    // },
    // csalad () {
    //   this.foglSzoba = 'Családi szoba'
    // },
    // deluxe () {
    //   this.foglSzoba = 'Deluxe szoba'
    // },
    // lakoszt () {
    //   this.foglSzoba = 'Lakosztály'
    // },
    async foglal () {
      try {
        await Hitelesites.post(this.reservation)
      } catch (err) {
        console.log()
      }
    }
  },
  computed: {
    dateTime () {
      const date = new Date(this.date)
      return date
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis:300');
h1 {
  font-family: 'Dosis', sans-serif;
}
</style>
