<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Artwork</h1>
        <p>Welcome to the artwork gallery. Click a pic for a fullscreen view!</p>
      </v-col>
      <v-row style="justify-content: center">
        <div class="collage">
          <div
            v-for="(image, index) in artwork"
            :key="index"
            class="collage-item"
            @click="openModal(image)"
          >
            <img :src="image" alt="Artwork" />
          </div>
        </div>
      </v-row>
    </v-row>

    <!-- Modal to display the clicked image -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="modalImage ?? ''" alt="Fullscreen Artwork" />
        <button class="close-btn" @click="closeModal">Close</button>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const artwork = ref<string[]>([]) // Array of image URLs
    const showModal = ref(false)
    const modalImage = ref<string | null>(null)

    // Manually load images from the `public` folder
    const loadImages = () => {
      // Manually specify image paths
      artwork.value = ['/images/artwork/purp_flower.jpg', '/images/artwork/red_flower.jpg']
    }

    // Run the function immediately to populate the gallery
    loadImages()

    const openModal = (image: string) => {
      modalImage.value = image
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
      modalImage.value = null
    }

    return { artwork, showModal, modalImage, openModal, closeModal }
  }
})
</script>

<style scoped>
.collage {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(250px, auto);
  margin-top: 20px;
  justify-content: center;
  align-items: center;
}

.collage-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
}

.collage-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.collage-item:hover img {
  transform: scale(1.05);
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 40px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px;
}

.modal-content img {
  width: 100%;
  max-height: 80vh; /* Ensures the image is not too large on desktop */
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Ensure the modal behaves well on desktop */
@media (min-width: 1024px) {
  .modal-content {
    max-width: 80%; /* Reduce the max width for larger screens */
  }

  .modal-content img {
    max-height: 70vh; /* Limit image size for desktop */
  }
}
</style>
