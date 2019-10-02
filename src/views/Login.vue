<template>
<ion-content>
  <ion-header>
    <ion-toolbar color="primary">
    <ion-title>
      Login
    </ion-title>
    </ion-toolbar>
  </ion-header>
  
  <!-- <ion-list class="ion-padding-top ion-padding-bottom">
    <ion-item v-for="pledge in this.pledges">
      <ion-label>{{pledge.pledgeName}}</ion-label>
      <ion-checkbox slot="start" ></ion-checkbox>
    </ion-item>   
  </ion-list>
   <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="arrow-forward" @click="goToResults"></ion-icon>     
      </ion-fab-button> 
    </ion-fab> -->

<ion-list class="ion-padding">
  <ion-item>
    <ion-label position="floating">Email Address</ion-label>
    <ion-input required type="email" :value="email" @ionInput="email = $event.target.value"> </ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Password</ion-label>
    <ion-input required type="password" :value="password" @ionInput="password = $event.target.value"></ion-input>
  </ion-item>
  <div class="ion-padding-top">
  <ion-button expand="block" @click="doLogin">Login</ion-button>
  </div>
  <div class="ion-padding-top ion-padding-bottom ion-text-center">
    <ion-label>Don't have an account? Sign Up</ion-label>
  </div>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
  <ion-button expand="large" @click="doRegisterEmail">
    <ion-icon name="mail"></ion-icon>
  </ion-button>
  <ion-button expand="large" @click="doRegisterFacebook" color="facebook">
    <ion-icon name="logo-facebook"></ion-icon>
    <!-- Facebook -->
  </ion-button>
  <ion-button expand="large" @click="doRegisterGoogle" color="google">
    <ion-icon name="logo-google"></ion-icon>
    <!-- Google -->
  </ion-button>
    </ion-row>
  </ion-grid>
  <div class="ion-padding-top ion-padding-bottom ion-text-center">
    <ion-label>Or continue as a guest</ion-label>
  </div>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
    <ion-button @click="doSkip">
    Skip
  </ion-button>
    </ion-row>
  </ion-grid>
  
</ion-list>
    
</ion-content>
  
</template>
<script>
import firebase from 'firebase';
import Register from './Register';
// import { User } from 'firebase/app'
import { cfaSignIn } from 'capacitor-firebase-auth';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;



export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      platform: ''
    }
  },
  async created() {
    
      const info = await Device.getInfo();

      this.platform = info.platform;
  },

  methods: {
    async doLogin() {
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(user);
        this.$router.push('/selectpledges');
      } catch (err) {
        console.log(this.password)
        console.log(this.email)
        alert(err.message)
      }
    },
    async doRegisterEmail() {
      const modal = await this.$ionic.modalController.create({
        component: Register,
        
      });
      await modal.present();
      let { data: { success, loading}} = await modal.onDidDismiss()
       if (success) {
        loading.dismiss()
        this.$router.push('/selectpledges');
       }
      
    },
    doRegisterGoogle() {
      if (this.platform !== 'web') {
       cfaSignIn('google.com').subscribe(
        (user) => {
          console.log(user.displayName)
          }
      )
      } else {
        console.log('web')
      }     
    },
    doRegisterFacebook() {
      if (this.platform !== 'web') {
       cfaSignIn('facebook.com').subscribe(
        (user) => {
          console.log(user.displayName)
          }
      )
      } else {
        console.log('web')
      }     
    },
    doSkip() {
      // TODO Create anon user

      this.$router.push('/selectpledges');

    }
  },
  props: {

  }
  
}
</script>
<style>

</style>