<template>
<ion-content>
  <ion-header>
    <ion-toolbar color="primary">
    <ion-title>
      Select your pledges
    </ion-title>
    <ion-buttons slot="primary">
      <ion-button>
        <ion-icon slot="icon-only" name="person"></ion-icon>
      </ion-button>
    </ion-buttons>
    </ion-toolbar>
  </ion-header>
  
  <ion-list class="ion-padding-top ion-padding-bottom">    
    <ion-card v-for="pledge in this.pledges" v-bind:key="pledge.Number">
    <ion-card-header>
       <ion-ripple-effect></ion-ripple-effect>
      <ion-item lines="none">
      <ion-card-title>{{pledge.Description}}</ion-card-title>
     
        <ion-checkbox slot="start" v-on:ionChange="togglePledge(pledge, $event)"> </ion-checkbox>
      </ion-item>
    </ion-card-header>
    <ion-card-content>
      <ion-button v-if="pledge.UsefulURL" expand="block" color="secondary" @click="viewUrls(pledge.UsefulURL)">
      <ion-ripple-effect></ion-ripple-effect>
        More Info
      </ion-button>
    </ion-card-content>
  </ion-card>
   
  </ion-list>
   <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button :disabled="this.selectedPledges.length === 0">
        <ion-icon name="arrow-forward" @click="goToResults"></ion-icon>     
      </ion-fab-button>
      
    </ion-fab>
</ion-content>
  
</template>

<script>
import { db } from '../db'
import { Plugins } from '@capacitor/core';
import Storage from '../services/storage';
import axios from 'axios';

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

  async mounted() {
    axios.get('https://pledgeball.org/wp-json/pledgeapi/v1/pledgelist')
    .then(res => {
      this.pledges = res.data;     
    });
  },
  async created() {

   // clear storage
    await storage.remove('selectedPledges');

  },
  methods: {

    togglePledge(pledge, ev) {
     
      if (ev.detail.checked) {
        this.selectedPledges.push(pledge)
      }

      if (!ev.detail.checked) {
        this.selectedPledges.pop(pledge)
      }

    
    },

    goToResults() {
      storage.set('selectedPledges', this.selectedPledges);
      this.$router.push('/confirmpledges');

    },
    async viewUrls(urls) {
      await Browser.open({ url: urls });
    }

  },
  // firestore: {
  //   pledges: db.collection('pledges'),

  // },
  props: {

  }
  
}
</script>
<style>

</style>