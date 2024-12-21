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
export default {
  name: 'EtsyStoreLink'
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
