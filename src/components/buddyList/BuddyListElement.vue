<template>
  <ion-card>
    <ion-item>
      <ion-label>{{ buddyName }}</ion-label>
      <ion-checkbox v-for="completeness in weeklyCompleteness" :checked="completeness===1" :key="completeness" slot="end"></ion-checkbox>
      <!--TODO use ration to make it to a filled circle or smth -->
      <ion-item v-if="+streakInDays > 0">
        <ion-icon :icon="flame" size="large" style="color: orange;"></ion-icon>
        <ion-label style="font-size: 24px">
          {{ streakInDays }}
        </ion-label>
      </ion-item>
    </ion-item>
  </ion-card>
</template>
<script>

import {flame} from "ionicons/icons";
import {IonIcon, IonLabel} from "@ionic/vue";

export default {
  name: 'BuddyListElement',
  props: ['buddyName', 'streakInDays', 'weeklyCompleteness'],
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
