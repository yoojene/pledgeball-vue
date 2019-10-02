import Vue from 'vue'
import App from './App.vue'
import router from './router'

import IonicVue from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase';
// import { config } from '@ionic/core';

import { addIcons } from "ionicons";
import { home, logoGoogle, logoFacebook, mail, person } from "ionicons/icons";

addIcons({
  "logo-google": logoGoogle,
  "logo-facebook": logoFacebook,
  "ios-home": home.ios,
  "md-home": home.md,
  "ios-mail": mail.ios,
  "md-mail": mail.md,
  "ios-person": person.ios,
  "md-person": person.md,
});

export const firebaseConfig = {
  apiKey: "AIzaSyAjXxGN2ipPe7dOUBhoB-38SUpLWPncv0M",
  authDomain: "AUTH_DOMAIN_HERE",
  databaseURL: "https://pledgeball-org.firebaseio.com/",
  projectId: "pledgeball-org",
  storageBucket: "STORAGE_BUCKET_HERE",
  messagingSenderId: "MESSAGING_ID_HERE"
}

firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
// export const db = firebase.firestore()



// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }


Vue.config.productionTip = false
Vue.use(IonicVue);
Vue.use(firestorePlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
