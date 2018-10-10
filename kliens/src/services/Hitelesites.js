import Api from '@/services/Api'

export default{
  register (hitelesitoAdat) {
    return Api().post('register', hitelesitoAdat)
  },
  login (hitelesitoAdat) {
    return Api().post('login', hitelesitoAdat)
  }
}
