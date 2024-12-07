<template>
  <v-container class="limited-time-container" fluid>
    <h1 class="title">Limited Time Offers</h1>

    <!-- Default Message -->
    <div v-if="limitedTimeItems.length === 0" class="no-offers">
      <p>There are no limited-time offers available at the moment. Check back soon!</p>
    </div>

    <!-- Offers List -->
    <v-row v-else>
      <v-col
        v-for="(item, index) in limitedTimeItems"
        :key="index"
        cols="12"
        md="4"
        class="offer-card"
      >
        <v-card class="offer">
          <v-img :src="item.image" class="offer-image" height="200px"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
          <v-btn :href="item.link" color="green" outlined class="mt-2">Learn More</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // Replace this with your dynamic data fetching logic
    limitedTimeItems: [] // Example: [{ title: "Holiday Gift Set", description: "Limited stock available!", image: "link_to_image", link: "/store/holiday" }]
  })
}
</script>

<style scoped>
.limited-time-container {
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4b4b4b;
}

.no-offers {
  font-size: 1.2rem;
  color: #7a7a7a;
  margin-top: 20px;
}

.offer-card {
  margin-bottom: 20px;
}

.offer {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: left;
}

.offer-image {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.offer .v-card-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.offer .v-btn {
  color: #4caf50;
  border-color: #4caf50;
}
</style>
