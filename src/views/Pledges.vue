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
    <ion-item v-for="pledge in this.pledges">
      <ion-label>{{pledge.pledgeName}}</ion-label>
      <ion-checkbox slot="start" ></ion-checkbox>
    </ion-item>   
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

export default {
  name: 'Pledges',
  data() {
    return {
      pledges: [],
    }
  },
  methods: {

    goToResults() {
      this.$router.push('/results');

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