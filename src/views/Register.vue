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
    <ion-input type="text" :value="name" @ionInput="name = $event.target.value"> </ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Email Address</ion-label>
    <ion-input type="email" :value="email" @ionInput="email = $event.target.value"> </ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Password</ion-label>
    <ion-input type="password" :value="password" @ionInput="password = $event.target.value"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Confirm Password</ion-label>
    <ion-input type="password" :value="confpassword" @ionInput="confpassword = $event.target.value"></ion-input>
  </ion-item>

  
   <ion-grid>
    <ion-row class="ion-justify-content-center">
    <ion-button expand="large" @click="doRegister">Register</ion-button>
    </ion-row>
  </ion-grid> 
</ion-list>
    
</ion-content>
  
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confpassword: ''  
    }
  },
  props: {
    title: { type: String, default: 'Register' },
  },
  methods: {
    async doRegister() {
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(user);
        
        // TODO Create user collection with result

        this.$router.push('/pledges');
      } catch (err) {
        
        
        alert(err.message)
      }
    },
    doDismiss() {
      this.$ionic.modalController.dismiss(true)
    }
  },
}
</script>