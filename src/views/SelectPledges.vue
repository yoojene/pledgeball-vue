<template>
<ion-content>
  <ion-header>
    <ion-toolbar color="primary">
    <ion-title>
      Select your pledges
    </ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-list class="ion-padding-top ion-padding-bottom">
    <!-- <div v-for="pledge in this.pledges"> -->
    <!-- <ion-item-group>
      <ion-item  v-for="pledge in this.pledges">
        <ion-label class="ion-text-wrap">{{pledge.pledgeName}}</ion-label>
        <ion-checkbox slot="start"></ion-checkbox>
      </ion-item>
      <ion-item v-for="pledge in this.pledges" v-bind:href="pledge.pledgeUrls">
        <ion-label class="ion-text-wrap">{{pledge.pledgeName}}</ion-label>
      </ion-item> 
    </ion-item-group> -->
    
    <ion-card v-for="pledge in this.pledges">
    <ion-card-header>
       <ion-ripple-effect></ion-ripple-effect>
      <ion-item lines="none">
      <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->
      <ion-card-title>{{pledge.pledgeName}}</ion-card-title>
     
        <ion-checkbox slot="start" v-on:ionChange="togglePledge(pledge, $event)"> </ion-checkbox>
      </ion-item>
    </ion-card-header>

      
    <ion-card-content>
      <!-- <ion-item v-if="pledge.pledgeUrls" lines="none" @click="viewUrls(pledge.pledgeUrls)">
          {{pledge.pledgeUrls}}
      </ion-item> -->
      <ion-button v-if="pledge.pledgeUrls" expand="block" color="secondary" @click="viewUrls(pledge.pledgeUrls)">
          <ion-ripple-effect></ion-ripple-effect>
        More Info</ion-button>
    </ion-card-content>
  </ion-card>
   
  </ion-list>
   <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="arrow-forward" @click="goToResults"></ion-icon>     
      </ion-fab-button>
      
    </ion-fab>
</ion-content>
  
</template>

<script>
import { db } from '../db'
import { Plugins } from '@capacitor/core';
import Storage from '../services/storage';

const { Browser } = Plugins;
const storage = new Storage();


export default {
  name: 'SelectPledges',
  data() {
    return {
      pledges: [],
      selectedPledges: []
    }
  },

  methods: {

    togglePledge(pledge, ev) {
      console.log(pledge);
      console.log(ev.detail.checked);
      console.log(pledge.pledgeId);
      console.log(pledge.pledgeName);

      if (ev.detail.checked) {
        this.selectedPledges.push(pledge)
      }

      if (!ev.detail.checked) {
        this.selectedPledges.pop(pledge)
      }

      console.log(this.selectedPledges)


      // storage.set()
    
    },

    goToResults() {
      storage.set('selectedPledges', this.selectedPledges);
      this.$router.push('/confirmpledges');

    },
    async viewUrls(urls) {
      await Browser.open({ url: urls });
    }

  },
  firestore: {
    pledges: db.collection('pledges'),

  },
  props: {

  }
  
}
</script>
<style>

</style>