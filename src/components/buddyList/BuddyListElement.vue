<template>
  <ion-card>
    <ion-item>
      <ion-label>{{ buddyName }}</ion-label>
      <ion-icon v-for="completeness in weeklyCompleteness"
                :icon="completeness === 1 ? star : starHalf"
                :style="completeness === 1 ? 'color: orange;' : 'color:gray;'"
                size="small"
                :key="completeness" slot="end">
      </ion-icon>
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

import {flame, star, starHalf} from "ionicons/icons";
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
      starHalf,
      star
    }
  }

}
</script>
