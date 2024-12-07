<template>
  <v-app-bar app color="white" dark>
    <v-toolbar-title>
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.jpg" width="50" height="50" />
      </RouterLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="desktop-nav">
      <v-btn to="/" class="navlink">Home</v-btn>
      <v-btn to="/about" class="navlink">About</v-btn>
      <v-menu open-on-click>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="navlink">Creations</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in creations" :key="index">
            <v-list-item-title>
              <v-btn :to="item.to" class="navlink" style="width: 100%">{{ item.title }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn to="/store" class="navlink">Store</v-btn>
      <v-btn to="/contact" class="navlink">Contact</v-btn>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
      <v-menu bottom right>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" aria-label="Menu">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="mobile-list" style="background-color: #77876b">
          <v-list-item>
            <RouterLink to="/" class="mobile-navlink">Home</RouterLink>
          </v-list-item>
          <v-list-item>
            <RouterLink to="/about" class="mobile-navlink">About</RouterLink>
          </v-list-item>
          <v-list-item v-for="(item, index) in creations" :key="index">
            <RouterLink :to="item.to" class="mobile-navlink">{{ item.title }}</RouterLink>
          </v-list-item>
          <v-list-item>
            <RouterLink to="/store" class="mobile-navlink">Store</RouterLink>
          </v-list-item>
          <v-list-item>
            <RouterLink to="/contact" class="mobile-navlink">Contact</RouterLink>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    creations: [
      { title: 'Artwork', to: '/creations/artwork' },
      { title: 'Homemade Goods', to: '/creations/homemade' },
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

.desktop-nav {
  display: flex;
  align-items: center;
}

.mobile-nav {
  display: none;
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }

  .v-list {
    background-color: #77876b;
  }
  .mobile-list {
    background-color: #77876b;
  }

  .mobile-navlink {
    color: white;
    text-decoration: none;
  }

  .mobile-subheader {
    font-size: large;
    color: white;
    font-weight: 600;
  }
}

header {
  background-color: white;
}
</style>
