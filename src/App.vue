<template>
  <v-app>
    <TheNavBar />
    <v-main>
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <RouterView />
      </div>
    </v-main>
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
import HelloWorld from './components/HelloWorld.vue'
import TheNavBar from './components/TheNavBar.vue'
</script>
