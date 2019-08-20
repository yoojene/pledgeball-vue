<template>
  <ion-content>
    <ion-header>
    <ion-toolbar color="primary">
    <ion-title>
      Pledges
    </ion-title>
    </ion-toolbar>
    </ion-header>
    <div>
      <BarPledges>
      </BarPledges>
    </div>
  </ion-content>
</template>
<script>
import BarPledges from '@/components/BarPledges.vue'
 
export default {
  name: 'Results',
  components: {
    BarPledges
  }

}
</script>