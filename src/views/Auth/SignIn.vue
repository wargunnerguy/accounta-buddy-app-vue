<template>
  <BaseInputForm :heading="'Sign in'">
    <form @submit.prevent>
      <ion-input type="text" name="email" autocomplete="on" v-model="email" placeholder="Email" required></ion-input>
      <ion-input type="password" name="password" autocomplete="on" v-model="password" placeholder="Password" required></ion-input>
      <ion-button type="submit" @click="store.signIn(email, password)">Sign in</ion-button>
    </form>
  </BaseInputForm>
</template>

<script>
import {IonButton, IonInput} from "@ionic/vue";
import {useStore} from "@/store";
import BaseInputForm from "@/components/BaseInputForm";

export default {
  name: "SignIn",
  components: {
    IonButton, IonInput, BaseInputForm
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
