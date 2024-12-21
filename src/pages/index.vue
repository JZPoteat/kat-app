<template>
  <v-container>
    <v-row class="mb-5">
      <v-col cols="12">
        <h2>Welcome to My Little Mouse Creative</h2>
        <p class="mt-5">
          Thank you for stopping by. Please look around and hopefully you find something that
          resonates with you!
        </p>
      </v-col>
    </v-row>
    <!-- Image Carousel Section -->
    <v-row class="mb-5">
      <v-col cols="12">
        <v-carousel cycle :interval="4000">
          <v-carousel-item
            v-for="(image, index) in carouselImages"
            :key="index"
            :src="image"
            :alt="'Image ' + (index + 1)"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    // Sample images for the carousel
    const carouselImages = [
      'src/stores/photos/about/pfp.png',
      'src/stores/photos/artwork/purp_flower.jpg',
      'src/stores/photos/jewelry/red_flower_black_back.jpg'
    ]

    const mailtoLink = `mailto:hello@mylittlemousecreative.com`

    return {
      carouselImages,
      mailtoLink
    }
  }
})
</script>

<style scoped>
/* Custom styling (if needed) */
v-card {
  padding: 20px;
}
blockquote {
  font-style: italic;
  color: gray;
}

h2 {
  color: #8f9779; /* Earthy brown tone */
  border-bottom: 1px solid #a0522d; /* Earthy sienna border */
  padding-bottom: 10px; /* Space between text and border */
  font-family: 'Georgia', serif;
  font-weight: bold;
  margin-left: 15px;
  margin-right: auto;
  font-size: 42px;
}
</style>
