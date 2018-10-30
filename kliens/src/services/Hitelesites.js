import Api from '@/services/Api'

export default{
  register (hitelesitoAdat) {
    return Api().post('register', hitelesitoAdat)
  },
  login (hitelesitoAdat) {
    return Api().post('login', hitelesitoAdat)
  },
  index () {
    return Api().get('browse')
  },
  // show (reservationId) {
  //   return Api().get(`reservation/${reservationId}`)
  // },
  post (reservation) {
    console.log(reservation)
    return Api().post('reservation', reservation)
  }
}
