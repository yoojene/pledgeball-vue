<template>
  <ion-content>
    <ion-header>
    <ion-toolbar color="primary">
    <ion-title>
      Pledges
    </ion-title>
    </ion-toolbar>
    </ion-header>
    <div class="ion-padding">
      <BarPledges :pledges.sync="chartData">
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
      chartData: []
    }
  },
  components: {
    BarPledges
  },
  async created() {
   
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





    // Look up co2 saved from pledges collection

 
    // For each userPledge Id total up co2 saved
    // Plot on graph
    
    },
    methods: {
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