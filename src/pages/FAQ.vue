<template>
  <v-container class="faq-page">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="faq-title text-left">FAQ</h1>

        <v-expansion-panels>
          <v-expansion-panel v-for="(faq, index) in faqs" :key="index" class="faq-panel text-left">
            <v-expansion-panel-header class="faq-header mb-10">
              <v-icon left>mdi-help-circle</v-icon>
              {{ faq.question }}
            </v-expansion-panel-header>
            <br />
            <v-expansion-panel-content class="faq-content">
              {{ faq.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FaqPage',
  data() {
    return {
      faqs: [
        {
          question: 'What types of products do you make?',
          answer:
            'I specialize in creating a wide variety of handmade crafts, including custom art, personalized vinyl designs, embroidery, jewelry, and T-shirts. All products are made with clean, high-quality ingredients or materials, ensuring a unique and personal touch to every order.'
        },
        {
          question: 'Are all your products handmade?',
          answer: 'Yes!'
        },
        {
          question: 'Can I request custom designs or personalized items?',
          answer:
            'Absolutely! Just contact me with your idea, and we can work together to make something special!'
        },
        {
          question: 'What is the processing time for custom orders?',
          answer:
            "Custom orders typically take between 1-2 weeks, depending on the complexity of the design and my current order queue. I'll always keep you updated along the way."
        },
        {
          question: 'Do you offer refunds or exchanges?',
          answer:
            "Due to the personalized nature of my products, I don't offer refunds or exchanges on custom items. However, if there's an issue with your order, please reach out within 7 days, and I'll do my best to make it right!"
        },
        {
          question: 'How do I care for my handmade items?',
          answer:
            "For vinyl products, hand washing is best to preserve the design. Embroidered and sewn items should be gently washed in cold water and air-dried to maintain their quality. If you're ever unsure, feel free to contact me for care instructions specific to your item."
        },
        {
          question: 'Do you ship internationally?',
          answer:
            "At the moment, I only ship within the United States, but I'm exploring options for international shipping in the future!"
        },
        {
          question: 'Can I return a non-custom item?',
          answer:
            'Yes, for non-custom items, returns are accepted within 14 days of receiving your order, as long as the item is unused and in its original condition. The buyer is responsible for return shipping costs.'
        }
      ]
    }
  }
})
</script>

<style scoped>
.faq-page {
  padding-top: 50px;
  padding-bottom: 50px;
}

.faq-title {
  font-size: 2.5rem;
  font-weight: bold;
  width: 75px;
  margin-bottom: 40px;
  border-bottom: 1px solid #a0522d; /* Earthy sienna border */
  color: #8f9779; /* Change color to match your theme */
}

.faq-panel {
  margin-bottom: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f5f5f5; /* Light background for panels */
}

.faq-header {
  font-weight: 600;
  font-size: 1.25rem;
  color: #8f9779; /* Color to match your theme */
}

.faq-content {
  font-size: 1rem;
  color: #555555;
}

.faq-content p {
  margin: 0;
}
</style>
