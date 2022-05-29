import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from "vue-axios";

import {IonicVue} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.scss';

/* Firebase for auth */
import * as firebase from "firebase/app";


import i18n from './i18n'
import { createPinia } from 'pinia'

const firebaseConfig = {
    apiKey: "AIzaSyC3k43EsDp4ZmHrVXe51I6fdv3oDkuDvOY",
    authDomain: "accounta-buddy-app-vue.firebaseapp.com",
    projectId: "accounta-buddy-app-vue",
    storageBucket: "accounta-buddy-app-vue.appspot.com",
    messagingSenderId: "922982835572",
    appId: "1:922982835572:web:e7f19231dc5519133cb821",
    measurementId: "G-CF20KQ25BY"
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App)
    .use(createPinia())
    .use(i18n)
    .use(IonicVue)
    .use(router)
    .use(router)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    .use(VueAxios, axios);

router.isReady().then(() => {
    app.mount('#app');
});
