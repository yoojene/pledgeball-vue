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
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies'
      });
    }
  }

}
</script>