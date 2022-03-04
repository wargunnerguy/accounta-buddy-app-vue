<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <TheSettingsCard></TheSettingsCard>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import TheSettingsCard from "@/components/utils/TheSettingsCard.vue";

export default defineComponent({
  name: "SettingsPage",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    TheSettingsCard
  },
})
</script>

<style scoped>

</style>
