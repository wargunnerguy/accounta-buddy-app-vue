<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import {useStore} from "@/store";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  },
  created() {
    this.store.fetchData().then(this.store.getFullData);
  },
  mounted() {
    this.store.isDarkMode = document.body.classList.toggle('dark', this.store.prefersDark.matches);
  }
});
</script>
