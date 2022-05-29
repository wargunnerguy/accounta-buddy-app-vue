<template>
  <ion-page>

    <form @submit.prevent="handleSubmit" class="mt-4 flex flex-col">
      <h3 class="text-xl underline">Login</h3>

      <ion-label for="email">Email:</ion-label>
      <input class="border w-4/12" type="email" name="email" autocomplete="on" v-model="email" required>

      <ion-label for="email">Password:</ion-label>
      <input class="border w-4/12" type="password" name="password" autocomplete="on" v-model="password" required>

      <ion-button class="w-max mt-4 px-4 py-2 text-center rounded-full bg-blue-500 text-white"
                  @click="store.signIn(email, password)">Sign in
      </ion-button>
      <div v-if="error">{{ error }}</div>
    </form>
  </ion-page>
</template>

<script>
import {IonLabel, IonButton, IonPage} from "@ionic/vue";
import {useStore} from "@/store";

export default {
  name: "SignIn",
  components: {
    IonLabel, IonButton, IonPage
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
