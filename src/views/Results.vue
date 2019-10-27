<template>
  <ion-content>
    <ion-header>
    <ion-toolbar color="primary">
    <ion-title>
      Annual CO2 Saved (Tonnes)
    </ion-title>
    </ion-toolbar>
    </ion-header>
    <div class="ion-padding">
      <BarPledges :chart-data="datacollection">
      </BarPledges>
      <ion-button expand="block" color="secondary" @click="share">
        Share 
    </ion-button>
   </div>
  </ion-content>
</template>
<script>
import BarPledges from '@/components/BarPledges.vue'
import { Plugins } from '@capacitor/core';
import firebase from 'firebase';

const { Share } = Plugins;
export const db = firebase.firestore()

export const user = firebase.auth().currentUser

export default {
  name: 'Results',
   data() {
    return {
      datacollection: null
    }
  },
  components: {
    BarPledges
  },
  mounted() {
    this.createChartData();
  },
  beforeDestroy() {

    // Also clear down db? 
    this.datacollection = null
    this.chartData = null
  },
  methods: {
    async createChartData() {

    // userPledges collection
    const userPledgesCol = await db.collection(`users`).doc(firebase.auth().currentUser.uid).collection('userPledges').get();
    // pledges collection
    const pledgesCol = await db.collection(`pledges`).get();

    // Get the userPledges
    const [userPledges] = userPledgesCol.docs.map(plg => {
      return plg.data();
    })

    // Get the pledges
    const pledges = pledgesCol.docs.map(plg => {
      return plg.data();
    })
    
    // Lookup the userPledges against pledges and collapse into single array
    this.chartData = userPledges.pledgeIds.map((plg) => {
      return pledges.filter(fil => plg === fil.pledgeId);
    }).flat(); // .map() & .filter() returns an array of arrays so we use .flat()
  

    this.datacollection = {
          label: 'Test',
          datasets: []
        }

    // Build chart
    this.chartData.forEach(data => {
      this.datacollection.datasets.push(
        {
        "label": data.pledgeName, 
        "data": [data.annualCO2Saved],
        "backgroundColor": [data.pledgeColour]
        })
    });
    },
    async share() {
      await Share.share({
        title: "I've just made a pledge at #PledgeBall",
        text: "I've just made a pledge at #PledgeBall.  Make yours at ",
        url: 'htps://www.pledgeball.org/',
        dialogTitle: 'Pledge For the Planet'
      });
    }
  }

}
</script>
