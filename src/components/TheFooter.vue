<template>
  <v-footer class="custom-footer">
    <v-container class="footer-content">
      <!-- Logo Section -->
      <div class="footer-logo">
        <img
          src="@/assets/logo.jpg"
          alt="Company Logo"
          class="footer-logo-img"
          style="border-radius: 100px"
        />
      </div>

      <!-- Links Section -->
      <div class="footer-links">
        <h4 class="footer-section-title">Stay Connected!</h4>
        <v-list>
          <v-list-item v-for="(link, index) in moreLinks" :key="index">
            <a
              v-if="link.isExternal"
              :href="link.url"
              target="_blank"
              style="color: white; text-decoration: none"
              >{{ link.title }}</a
            >
            <RouterLink v-else :to="link.url" class="footer-link">{{ link.title }}</RouterLink>
          </v-list-item>
        </v-list>
      </div>

      <!-- Contact Section -->
      <div class="footer-contact">
        <h4 class="footer-section-title">Contact</h4>
        <p>For all inquiries, please contact:</p>
        <a href="mailto:support@example.com" class="footer-email">support@example.com</a>
      </div>

      <!-- Policies Section -->
      <div class="footer-policies">
        <h4 class="footer-section-title">Policies & Terms</h4>
        <v-list>
          <v-list-item v-for="(policy, index) in policies" :key="index">
            <RouterLink :to="policy.url" class="footer-link">{{ policy.title }}</RouterLink>
          </v-list-item>
        </v-list>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
const moreLinks = [
  { title: 'TikTok', url: 'https://www.tiktok.com/', isExternal: true },
  { title: 'Instagram', url: 'https://www.instagram.com/mylittlemousecreative/', isExternal: true },
  { title: 'Newsletter Signup', url: '/newslettersignup', isExternal: false }
]

const policies = [
  { title: 'FAQ', url: '/faq', isExternal: false },
  { title: 'Refund Policy', url: '/refund-policy' }
]
</script>

<style scoped>
/* General Footer Styling */
.custom-footer {
  background-color: #77876b;
  color: #4d4d4d;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  box-shadow:
    0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}

.footer-content {
  display: flex;
  flex-wrap: wrap; /* Adjust for responsiveness */
  gap: 30px;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
}

/* Logo Section */
.footer-logo {
  flex: 1;
  text-align: center;
  min-width: 200px;
}

.footer-logo-img {
  max-width: 100px;
}

.v-list {
  padding: 0px;
}

/* Links & Policies Section */
.footer-links,
.footer-policies {
  flex: 1;
  min-width: 200px;
}

.footer-section-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.v-list-item {
  background-color: #77876b;
}

.footer-link {
  color: white;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

/* Contact Section */
.footer-contact {
  flex: 1;
  min-width: 200px;
}

.footer-email {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.footer-email:hover {
  text-decoration: underline;
}

/* Responsiveness */
/* @media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-logo,
  .footer-links,
  .footer-contact,
  .footer-policies {
    margin-bottom: 20px;
  }

  .custom-footer {
    height: 300px;
    margin-top: 15px;
  }
} */
</style>
