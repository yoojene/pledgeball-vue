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
  methods: {
    async createChartData() {

      // Get userPledges IDs
    const userPledgesCol = await db.collection(`users`).doc(firebase.auth().currentUser.uid).collection('userPledges').get();
    const pledgesCol = await db.collection(`pledges`).get();

    const [userPledges] = userPledgesCol.docs.map(plg => {
      return plg.data();
    })

    console.log(userPledges);

    // console.log(pledgesCol);

    const pledges = pledgesCol.docs.map(plg => {
      return plg.data();
    })

    console.log(pledges);

    this.chartData = pledges.filter((fil, idx) => {
      return fil.pledgeId = userPledges[`pledgeId_${idx+1}`]
    })

    console.log(this.chartData);

// Single data object
    // this.datacollection = {
    //       labels: [],
    //       datasets: [{
    //         label: '',
    //         data: [],
    //         backgroundColor: ['rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //             'rgba(255, 206, 86, 0.2)',
    //             'rgba(75, 192, 192, 0.2)',]

    //       }]
    //     }

    // console.log(this.datacollection);

    // this.chartData.forEach(data => {
    //   this.datacollection.labels.push(data.pledgeName);
    //   this.datacollection.datasets[0].data.push(data.annualCO2Saved);
    // });

// Multiple datasets

    this.datacollection = {
          label: 'Test',
          datasets: []
        }

    this.chartData.forEach(data => {
      this.datacollection.datasets.push(
        {
        "label": data.pledgeName, 
        "data": [data.annualCO2Saved],
        "backgroundColor": [data.pledgeColour]
        })
    });

    console.log(this.datacollection);


    // Look up co2 saved from pledges collection

 
    // For each userPledge Id total up co2 saved
    // Plot on graph

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
