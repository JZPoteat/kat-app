<template>
  <v-container>
    <h1>Store</h1>
    <v-row>
      <v-col>
        <p>To see a full list of products please view my Etsy shop here!</p>
        <p>I also do custom orders!</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
        <v-card>
          <v-img :src="product.image" alt="product image" height="200px"></v-img>
          <v-card-text>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Store',
  setup() {
    const products = ref([
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a great product.',
        image: 'https://via.placeholder.com/200' // Replace with your image URL
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Another awesome product.',
        image: 'https://via.placeholder.com/200' // Replace with your image URL
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'A must-have item.',
        image: 'https://via.placeholder.com/200' // Replace with your image URL
      }
      // Add more products as needed
    ])

    return {
      products
    }
  }
})
</script>
