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
const storage = new Storage();

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

    goToResults() {
      this.$router.push('/results');
    },
   
    returnToPledges() {
      this.$router.go(-1);

    },
   
  }

}
</script>
<style>
</style>