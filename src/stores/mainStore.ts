import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      message: 'Hello from Pinia!'
    }
  },
  actions: {
    setMessage(newMessage: string) {
      this.message = newMessage
    }
  }
})
