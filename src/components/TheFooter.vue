<template>
  <v-footer color="green" id="footer-container">
    <v-container class="footer-content">
      <!-- Email Subscription Section -->
      <div class="newsletter">
        <h4>Subscribe to our Newsletter</h4>
        <v-form @submit.prevent="subscribe">
          <v-text-field
            v-model="email"
            label="Enter your email"
            outlined
            dense
            id="email-address-sub-signup"
          ></v-text-field>
          <v-btn type="submit" color="green" class="mt-2">Subscribe</v-btn>
        </v-form>
      </div>

      <!-- Social Media Section -->
      <div class="social-icons">
        <h4>Follow us on Social Media</h4>
        <v-btn
          icon
          @click="goToLink('https://www.instagram.com/mylittlemousecreative/')"
          alt="Instagram"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </v-btn>
        <v-btn icon @click="goToLink('https://www.etsy.com/shop/MyLittleMouseCreativ')" alt="Etsy">
          <font-awesome-icon :icon="['fab', 'etsy']" />
        </v-btn>
        <v-btn icon @click="goToLink('https://tiktok.com')" alt="TikTok">
          <font-awesome-icon :icon="['fab', 'tiktok']" />
        </v-btn>
        <v-btn icon @click="goToLink('https://youtube.com')" alt="YouTube">
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </v-btn>
      </div>

      <!-- Links to Pages -->
      <div>
        <v-list class="footer-links">
          <v-list-item v-for="(link, index) in footerLinks" :key="index">
            <RouterLink :to="link.to">{{ link.title }}</RouterLink>
          </v-list-item>
        </v-list>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const footerLinks = ref([
  { title: 'Contact', to: '/contact' },
  { title: 'FAQ', to: '/faq' },
  { title: 'Refund Policy', to: '/refund-policy' }
])

const subscribe = () => {
  if (email.value) {
    alert(`Subscribed with ${email.value}`)
    email.value = ''
  } else {
    alert('Please enter a valid email address.')
  }
}

const goToLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.footer-content {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px;
  color: white;
}

.newsletter {
  flex: 1;
  margin-right: 20px;
}

.social-icons {
  flex: 1;
  text-align: center;
}

.footer-links {
  flex: 1;
  display: flex;

  background-color: inherit;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

#footer-container {
  max-height: 250px;
}

#email-address-sub-signup {
  max-width: 250px;
}
</style>
