<template>
  <BaseInputForm :heading="'Create an account'">
    <form @submit.prevent>
      <ion-input type="text" placeholder="Email" autocomplete="on" v-model="email"/>
      <ion-input type="password" placeholder="Password" autocomplete="on" v-model="password"/>
      <ion-button type="submit" @click="store.register(email, password)">Create</ion-button>
    </form>
  </BaseInputForm>
</template>

<script>
import {IonButton, IonInput} from '@ionic/vue'
import {useStore} from "@/store";
import BaseInputForm from "@/components/BaseInputForm";


export default {
  name: "RegisterUser",
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
