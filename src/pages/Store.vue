<template>
  <v-container class="text-center">
    <v-card class="mx-auto" max-width="400" outlined>
      <v-card-title class="text-h5">Visit My Etsy Store</v-card-title>
      <v-card-subtitle>
        <p>Click the button below to check out my Etsy Store!</p>
      </v-card-subtitle>
      <v-card-actions class="justify-center">
        <v-btn
          color="#a0522d"
          elevation="2"
          target="_blank"
          href="https://www.etsy.com/shop/mylittlemousecreativ"
          class="text-uppercase"
        >
          Visit Store
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'EtsyStoreLink',
  mounted() {
    this.logApiResponse()
  },
  methods: {
    async logApiResponse() {
      try {
        const response = await axios.get('http://localhost:8000/api/jsonplaceholder')
        console.log('API Response:', response.data)
      } catch (error) {
        console.error('Error fetching data from API:', error)
      }
    }
  }
}
</script>

<style scoped>
.v-btn {
  text-transform: none;
  font-weight: bold;
}
.v-card {
  border-radius: 15px;
}
</style>
