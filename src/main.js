import "bootstrap/dist/css/bootstrap.css"
import "./assets/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping, faMagnifyingGlass, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faUser, faCartShopping,faMagnifyingGlass)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
import "bootstrap/dist/js/bootstrap.js"


