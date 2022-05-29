<template>
  <ion-page>
    <h1>Create an Account</h1>
    <form @submit.prevent="register">
      <p><input type="text" placeholder="Email" autocomplete="on" v-model="email"/></p>
      <p><input type="password" placeholder="Password" autocomplete="on" v-model="password"/></p>
      <p>
        <ion-button type="submit" @click="store.register(email, password)">Submit</ion-button>
      </p>
    </form>
  </ion-page>
</template>

<script>
import {IonButton, IonPage} from '@ionic/vue'
import {useStore} from "@/store";


export default {
  name: "RegisterUser",
  components: {
    IonButton, IonPage
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  }
}
</script>

<style scoped>

</style>
