<template>
  <h1>Create an Account</h1>
  <form @submit.prevent="register">
    <p><input type="text" placeholder="Email" autocomplete="on" v-model="email"/></p>
    <p><input type="password" placeholder="Password" autocomplete="on" v-model="password"/></p>
    <p>
      <ion-button type="submit">Submit</ion-button>
    </p>
  </form>
</template>

<script>
import IonButton from '@ionic/vue'
import {auth} from '@/firebase/config.js'
import {createUserWithEmailAndPassword} from "firebase/auth";

export default {
  name: "RegisterUser",
  components: {
    IonButton
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            alert('Successfully registered! Please login.');
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);
          });
    },
  },
}
</script>

<style scoped>

</style>
