// photos.js
import { createApp } from 'vue'
import Photos from './Photos.vue'
import Nav from './components/Nav.vue'

createApp(Photos).mount('#app');
createApp(Nav).mount('nav ul')
