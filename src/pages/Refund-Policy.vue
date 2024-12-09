<template>
  <v-container class="refund-policy-page">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="refund-policy-title text-left">Refund Policy</h1>

        <v-expansion-panels variant="popout">
          <v-expansion-panel
            v-for="(section, index) in refundPolicy"
            :key="index"
            :title="section.title"
            :text="section.content"
            class="refund-panel"
          >
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RefundPolicyPage',
  data() {
    return {
      refundPolicy: [
        {
          title: 'Refund Eligibility',
          content:
            'Due to the personalized nature of custom-made items, we are unable to accept returns or provide refunds unless the item arrives damaged or defective. Returns are accepted for non-custom items within 14 days of receiving your order, provided the item is unused, unworn, and in its original condition and returned in the original packaging (if applicable).'
        },
        {
          title: 'Requesting a Refund',
          content:
            "To initiate a refund, please contact us with your order number, a description of the issue, and photos (if applicable). We'll review your request and provide further instructions."
        },
        {
          title: 'Refund Process',
          content:
            'Approved refunds will be issued to your original payment method within 7-10 business days of receiving the returned item.  If the refund is for a damaged or defective item, we may cover return shipping costs.'
        },
        {
          title: 'Non-Refundable Items',
          content:
            'Gift cards, Items marked as final sale or clearance, and Custom/personalized items (unless defective) are non-refundable.'
        },
        {
          title: 'Damaged or Defective Items',
          content:
            "If your item arrives damaged or defective, please contact us within 7 days of delivery. We'll work with you to provide a replacement or issue a refund if necessary."
        }
      ]
    }
  }
})
</script>

<style scoped>
.refund-policy-page {
  padding-top: 50px;
  padding-bottom: 50px;
}

.refund-policy-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  border-bottom: 1px solid #a0522d; /* Earthy sienna border */
  color: #8f9779; /* Match theme */
}

.refund-panel {
  margin-bottom: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f5f5f5; /* Light background for panels */
}

.refund-header {
  font-weight: 600;
  font-size: 1.25rem;
  color: #8f9779; /* Match theme */
}

.refund-content {
  font-size: 1rem;
  color: #555555;
}

.refund-content p,
.refund-content ul {
  margin: 0;
}
</style>
