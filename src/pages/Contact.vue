<template>
  <v-container>
    <v-card-title>Let's get in touch!</v-card-title>

    <v-divider class="my-4"></v-divider>

    <p>
      Feel free to reach out via email at
      <a :href="mailtoLink">{{ emailAddress }}</a>
      — I'm always happy to connect!
    </p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const emailAddress = 'hello@mylittlemousecreative.com' // Replace with your email address
    const mailtoLink = `mailto:${emailAddress}?subject=Hello from mylittlemousecreative.com!`

    return {
      emailAddress,
      mailtoLink
    }
  }
})
</script>
