<template>
  <ion-card>
    <ion-item>
      <ion-label>{{ buddyName }}</ion-label>
      <ion-item v-if="+streakInDays > 0">
        <ion-icon :icon="flame" size="large" style="color: orange;"></ion-icon>
        <ion-label style="font-size: 24px">
          {{ streakInDays }}
        </ion-label>
      </ion-item>
      <ion-checkbox checked slot="end"></ion-checkbox>
      <ion-checkbox slot="end"></ion-checkbox>
      <ion-checkbox checked slot="end"></ion-checkbox>
      <ion-checkbox checked slot="end"></ion-checkbox>
      <ion-checkbox checked slot="end"></ion-checkbox>
      <ion-checkbox checked slot="end"></ion-checkbox>
      <ion-checkbox slot="end"></ion-checkbox>
    </ion-item>
  </ion-card>
</template>
<script>

import {flame} from "ionicons/icons";
import {IonIcon, IonLabel} from "@ionic/vue";

export default {
  name: 'BuddyListElement',
  props: ['buddyName', 'streakInDays',],
  components: {
    IonIcon, IonLabel
  },
  setup() {
    return {
      flame,
    }
  }

}
</script>
