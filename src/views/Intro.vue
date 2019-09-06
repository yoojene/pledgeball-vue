<template>
 <!-- <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
      <ion-title>Hello Ionic And VueJS </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card @click="goToAbout">
        <ion-card-header>
          <ion-card-subtitle><h1>PledgeBall</h1></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content> -->
          <!-- <p>Get #pledgeball</p> -->
          <!-- <img src="../assets/PPP4_small.webp">
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-app> -->

  <ion-app>
    <ion-content>
    <ion-slides class="intro-slides" pager="true" :options="slideOpts">
      <ion-slide>
        <div>
        <div>
        <img src="../assets/pledgeball_title.jpg">
        </div>
       <h1 class="underline">Welcome to PledgeBall</h1>
      </div> 
      </ion-slide>
      <ion-slide>
      <div class="ion-padding-top ion-padding-start ion-padding-end">
        <div>
        <img src="../assets/footballpitch.jpg">
        <h1>pledge / play / protect</h1>
        <p>
          Pledgeball is a way to encourage millions of people in the football and sporting communities to make a small, easy change to their lifestyle and so, collectively, have a big impact on our planet.
        </p>      
        </div>
      </div>
      </ion-slide>
      <ion-slide>
      <div class="ion-padding-top ion-padding-start ion-padding-end">
        <img src="../assets/checklist.jpg"> <!--Designed by roserodionova / Freepik -->
      
        <h1>Use this app to make your Pledges</h1>
        <p>
          And see the difference you are making, one step at a time
        </p>
        <h4>
           Ready to get started?  
        </h4>
        <div>
        <ion-button expand="block" @click="goToLogin">Let's go!</ion-button>
      </div>
      </div>
      </ion-slide>
  </ion-slides>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: 'intro',  
  methods: {
    goToLogin() {
      console.log('helllooooo')
      this.$router.push('/login');
    }
  }, 
  props: {
      slideOpts: {
      initialSlide: 2,
      speed: 400
    }
  }

}
</script>
<style>
 .pledgeball__one { height: 100%; }
 .underline { text-decoration: underline; }
 .swiper-pagination{ position: relative; }
 .intro-slides {top: 20%;}
 .swiper-container-horizontal>.swiper-pagination-bullets{bottom: 0px;}
</style>
