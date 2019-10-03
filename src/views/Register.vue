<template>
<ion-content>
  <ion-header>
   
    <ion-toolbar color="primary">
       <ion-buttons slot="end">
        <ion-button @click=doDismiss>
        <ion-icon slot="start" name="close"></ion-icon>
      </ion-button>    
    </ion-buttons>
    <ion-title>
        {{ title }}
    </ion-title>
    </ion-toolbar>
  </ion-header>


<ion-list class="ion-padding">
    <ion-item>
    <ion-label position="floating">Name</ion-label>
    <ion-input type="text" :value="regInfo.name" @ionInput="name = $event.target.value"> </ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Email Address</ion-label>
    <ion-input type="email" :value="regInfo.email" @ionInput="email = $event.target.value"> </ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Password</ion-label>
    <ion-input type="password" :value="regInfo.password" @ionInput="password = $event.target.value"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Confirm Password</ion-label>
    <ion-input type="password" :value="regInfo.confpassword" @ionInput="confpassword = $event.target.value"></ion-input>
  </ion-item>

  
   <ion-grid>
    <ion-row class="ion-justify-content-center">
    <ion-button expand="large" @click="doRegister">Register</ion-button>
    </ion-row>
  </ion-grid> 

  <div class="error" v-if={error}>
    {{this.error}}
  </div>
</ion-list>


    
</ion-content>
  
</template>
<script>
import firebase from 'firebase';
export const db = firebase.firestore()

export default {
  name: 'Register',
  data() {
    return { 
      regInfo : {
        name: '',
        email: '',
        password: '',
        confpassword: '' 
      }, 
      error: ''
    }
  },
  props: {
    title: { type: String, default: 'Register' },
  },
  methods: {
    async doRegister() {
      const loading = await this.doShowLoading();
      try {
        loading.present();
        const user = await firebase.auth().createUserWithEmailAndPassword(this.regInfo.email, this.regInfo.password)
        
  
        await db.collection('users').add(
          {name: this.regInfo.name, 
           email: user.user.email,
           authId: user.user.uid,
           }
        )
         this.$ionic.modalController.dismiss({success: true, regInfo: this.regInfo, fireUser: user, loading: loading})
      } catch (err) {
        
        loading.dismiss();
        this.error = err.message;
        setTimeout(() => {
          this.error = '';
        }, 2000);
      }
    },
    doDismiss() {
      this.$ionic.modalController.dismiss(true)
    },

    async doShowLoading(){

    return await this.$ionic.loadingController
        .create({
          spinner: "dots",
          message: 'Please wait...',
        })
    }
  },
}
</script>
<style>
.error { color: red; text-align: center}
</style>