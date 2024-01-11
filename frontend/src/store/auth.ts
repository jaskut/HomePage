// Utilities
import { defineStore } from 'pinia'
import { tokenAuth, onDone } from '@/apollo/mutations'

export const useAuthStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user") || '{}'),
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    loggedIn: (state) => state.token?.trim() !== '' && state.user?.trim() !== '',
  },
  actions: {
    login(user: string, password: string) {
      tokenAuth({ username: user, password: password })
      onDone(result => {
        console.log(result.data.tokenAuth.token)
        this.user = user
        this.token = result.data.tokenAuth.token

        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", this.token || '')
      })
    },
    logout() {
      this.user = null
      this.token = null
      
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    }
  }
})
