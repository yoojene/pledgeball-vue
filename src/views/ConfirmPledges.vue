<template>
<ion-content>
  <ion-header>
    <ion-toolbar color="primary">
    <ion-title>
      Review your pledges
    </ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-list class="ion-padding-top ion-padding-bottom">
    <ion-item v-for="pledge in this.pledges">
      <ion-label class="ion-text-wrap">{{pledge.pledgeName}}</ion-label>
    </ion-item>
  </ion-list>
   <ion-fab vertical="bottom" horizontal="start" slot="fixed">
      <ion-fab-button>
        <ion-icon name="arrow-back" @click="returnToPledges"></ion-icon>     
      </ion-fab-button>
    </ion-fab>
   <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="arrow-forward" @click="goToResults"></ion-icon>     
      </ion-fab-button>
    </ion-fab>
</ion-content>
  
</template>

<script>
// import { db } from '../db'
import Storage from '../services/storage';
import firebase from 'firebase';

const storage = new Storage();
export const db = firebase.firestore()
export const user = firebase.auth().currentUser

export default {
  name: 'SelectPledges',
  data() {
    return {
      pledges: [],
    }
  },
  async created() {
    
    this.pledges = await storage.get('selectedPledges');    
  },
  methods: {

    async goToResults() {

    const uid = user.uid;

    const userPledges = this.pledges.map((plg, idx) => {
      let key = `pledgeId_${idx+1}`;
      let obj = {};

      obj[key] =  plg.pledgeId
    
      return obj
    })

    const dbPledges = Object.assign(...userPledges);

    try {
      await db.collection(`users`).doc(uid).collection('userPledges').add(dbPledges);
      this.$router.push('/results');

      } catch(err) {
        console.error(err);
      }

    },
   
    returnToPledges() {
      this.$router.go(-1);

    },
   
  }

}
</script>
<style>
</style>