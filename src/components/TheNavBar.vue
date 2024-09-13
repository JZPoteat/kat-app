<template>
  <v-app-bar app color="green" dark>
    <v-toolbar-title>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/">Home</v-btn>
    <v-btn to="/about">About</v-btn>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" to="/creations"> Creations </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in creations" :key="index">
          <v-list-item-title
            ><v-btn :to="item.to" class="navlink">{{ item.title }}</v-btn></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn to="/store">Store</v-btn>
    <v-btn to="/contact">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    creations: [
      { title: 'Artwork', to: '/creations/artwork' },
      { title: 'Homemade Goods', to: 'homemade' },
      { title: 'Clothing', to: '/creations/clothing' },
      { title: 'Limited Time', to: '/creations/limited-time' },
      { title: 'Jewelry', to: '/creations/jewelry' }
    ]
  })
}
</script>

<style scoped>
.navlink {
  width: 100%;
}
</style>
