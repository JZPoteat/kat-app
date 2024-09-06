<template>
  <v-app>
    <TheNavBar />
    <v-main>
      <div class="wrapper">
        <RouterView />
      </div>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<style scoped>
.logo {
  display: inline-block;
}

.wrapper {
  padding: 20px;
  text-align: center;
}
</style>
<script setup lang="ts">
import TheNavBar from './components/TheNavBar.vue'
import TheFooter from './components/TheFooter.vue'
</script>
