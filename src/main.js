import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { createPinia } from 'pinia';
import router from './router'; // Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import specific icons (solid for app icons, brands for social media icons)
import { faInstagram, faEtsy, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// Import the FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Import the core CSS (optional but recommended)
import '@fortawesome/fontawesome-svg-core/styles.css';
// Add the imported icons to the library
library.add(faInstagram, faEtsy, faTiktok, faYoutube, faEnvelope);
import '@mdi/font/css/materialdesignicons.css';
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(vuetify);
app.use(createPinia());
app.use(router);
app.mount('#app');
