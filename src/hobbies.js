// photos.js
import { createApp } from 'vue'
import Hobbies from './Hobbies.vue'
import Nav from './components/Nav.vue'

createApp(Hobbies).mount('#app');
createApp(Nav).mount('nav ul')
