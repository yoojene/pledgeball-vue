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
    <ion-input type="email" :value="email" @ionInput="email = $event.target.value"> </ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="floating">Password</ion-label>
    <ion-input type="password" :value="password" @ionInput="password = $event.target.value"></ion-input>
  </ion-item>
  <ion-button @click="doLogin">Login</ion-button>
  <ion-button @click="doRegister">Register</ion-button>
  <ion-button @click="doSkip">Skip</ion-button>
    
</ion-list>
    
</ion-content>
  
</template>
<script>
import firebase from 'firebase';
import Register from './Register';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
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
    doRegister() {
      return this.$ionic.modalController.create({
        component: Register,
        
      }).then(m => m.present())
      
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