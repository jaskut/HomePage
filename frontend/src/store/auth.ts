// Utilities
import { defineStore } from 'pinia'
import { tokenAuth, onDone } from '@/apollo/mutations'

export const useAuthStore = defineStore('user', {
  state: () => ({
    user: localStorage.getItem("user") || null,
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token && state.user),
  },
  actions: {
    login(user: string, password: string) {
      tokenAuth({ username: user, password: password })
      onDone(result => {
        this.user = user
        this.token = result.data.tokenAuth.token

        localStorage.setItem("user", this.user)
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
