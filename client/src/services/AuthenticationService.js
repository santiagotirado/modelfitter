import Api from '@/services/APi'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email:'santiago.tirado@hotmail.com',
//   password: '123456'
// })
