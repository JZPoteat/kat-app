<template>
  <v-container>
    <v-card-title>Let's get in touch! </v-card-title>
    <v-form v-model="valid" @submit.prevent="submitForm">
      <v-text-field
        v-model="form.email"
        label="Email Address"
        :rules="[rules.required, rules.email]"
        required
      ></v-text-field>

      <v-textarea
        v-model="form.message"
        label="Message"
        :rules="[rules.required]"
        required
      ></v-textarea>

      <v-btn type="submit" :disabled="!valid">Submit</v-btn>
    </v-form>

    <v-divider class="my-4"></v-divider>

    <p>
      You can also email
      <a :href="mailtoLink">{{ emailAddress }}</a>
      to contact me directly!
    </p>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const form = ref({
      email: '',
      message: ''
    })

    const valid = ref(false)

    const emailAddress = 'contact@example.com' // Replace with your email address
    const mailtoLink = `mailto:${emailAddress}?subject=Hello from mywebsite.com!`

    const rules = {
      required: (value: string) => !!value || 'Required.',
      email: (value: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(value) || 'Invalid email.'
      }
    }

    const submitForm = () => {
      // Handle form submission logic here
      console.log(form.value)
    }

    return {
      form,
      valid,
      emailAddress,
      mailtoLink,
      rules,
      submitForm
    }
  }
})
</script>
