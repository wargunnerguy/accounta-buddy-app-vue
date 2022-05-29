<template>
  <ion-button id="trigger-button">
    <ion-icon slot="start" :icon="personCircleOutline"></ion-icon>
  </ion-button>
  <ion-popover trigger="trigger-button" show-backdrop="false" dismiss-on-select="true">
    <ion-content>
      <ion-list>
        <ion-item button @click="$router.push('/sign-out')">
          <ion-icon slot="start" :icon="logOutOutline"></ion-icon>
          <ion-label>
            Log out
          </ion-label>
        </ion-item>
        <ion-item button @click="$router.push('/tabs/settings')">
          <ion-icon slot="start" :icon="settingsOutline"></ion-icon>
          <ion-label>
            Settings
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-popover>
</template>

<script>
import {personCircleOutline, logOutOutline, settingsOutline} from "ionicons/icons";
import {IonIcon, IonButton, IonContent, IonPopover, IonItem, IonLabel} from "@ionic/vue";

export default {
  name: "TheUserAuthButton",
  components: {IonIcon, IonButton, IonContent, IonPopover, IonItem, IonLabel},
  setup() {
    return {personCircleOutline, logOutOutline, settingsOutline};
  },
}
</script>

<style scoped>
ion-icon {
  color: #a4a4a4;
}
</style>
