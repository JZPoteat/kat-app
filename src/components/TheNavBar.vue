<template>
  <v-app-bar app color="white" dark>
    <v-toolbar-title>
      <img alt="Vue logo" class="logo" src="@/assets/logo.jpg" width="50" height="50" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" class="navlink">Home</v-btn>
    <v-btn to="/about" class="navlink">About</v-btn>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" to="/creations" class="navlink"> Creations </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in creations" :key="index">
          <v-list-item-title
            ><v-btn :to="item.to" class="navlink" style="width: 100%">{{
              item.title
            }}</v-btn></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn to="/store" class="navlink">Store</v-btn>
    <v-btn to="/contact" class="navlink">Contact</v-btn>
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
  color: #77876b;
  font-weight: 600;
}

header {
  background-color: white;
}
</style>
