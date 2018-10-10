const HitelesitoKezelo = require('./controllers/HitelesitoKezelo')
const HitelesitoKezeloIranyelv = require('./policies/HitelesitoKezeloIranyelv')

module.exports = (app) => {
  app.post('/register',
    HitelesitoKezeloIranyelv.register,
    HitelesitoKezelo.register)

    app.post('/login',
      HitelesitoKezelo.login)
}
