<template>
  <ion-button router-link="/tabs/settings">
    <ion-icon slot="start" :icon="settingsOutline"></ion-icon>
  </ion-button>
</template>

<script>
import {settingsOutline} from "ionicons/icons";
import {IonIcon, IonButton} from "@ionic/vue";

export default {
  name: "TheSettingsButton",
  components: {IonIcon, IonButton},
  setup() {
    return {settingsOutline};
  },
}
</script>

<style scoped>
ion-icon {
  color: #a4a4a4;
}
</style>
