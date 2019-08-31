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
      <BarPledges>
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

const { Share } = Plugins;

export default {
  name: 'Results',
  components: {
    BarPledges
  },
  methods: {
    async share() {
      const shareRet = await Share.share({
        title: "I've just made a pledge at #PledgeBall",
        text: "I've just made a pledge at #PledgeBall.  Make yours at ",
        url: 'htps://www.pledgeball.org/',
        dialogTitle: 'Pledge For the Planet'
      });
    }
  }

}
</script>