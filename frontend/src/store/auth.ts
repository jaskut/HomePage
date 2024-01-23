// Utilities
import { defineStore } from 'pinia'
import { tokenAuth, onDone } from '@/apollo/mutations'

export const useAuthStore = defineStore('user', {
  state: () => ({
    user: null as string | null,
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token),
  },
  actions: {
    login(user: string, password: string) {
      tokenAuth({ username: user, password: password })
      onDone(result => {
        this.user = user
        this.token = result.data.tokenAuth.token

        localStorage.setItem("token", this.token || '')
      })
    },
    logout() {
      this.user = null
      this.token = null
      
      localStorage.removeItem("token")
    }
  }
})
