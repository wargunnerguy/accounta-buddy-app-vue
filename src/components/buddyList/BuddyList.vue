<template>
  <ion-card class="main-card-wrapper">
    <BuddyListElement :buddy-name="'Reimo'" streak-in-days="3"/>
    <BuddyListElement :buddy-name="'Sten'" streak-in-days="7"/> <!-- TODO dynamic weeklyData about last (x)~7 days -->
    <BuddyListElement :buddy-name="'Rauno'" streak-in-days="7"/> <!-- TODO dynamic weeklyData about last (x)~7 days -->
    <BuddyListElement :buddy-name="'Kristjan'" streak-in-days="7"/> <!-- TODO dynamic weeklyData about last (x)~7 days -->
    <ion-card></ion-card>
  </ion-card>
</template>

<script>

import {IonCard,} from "@ionic/vue";
import BuddyListElement from "@/components/buddyList/BuddyListElement";

export default {
  name: "BuddyList",
  components: {
    BuddyListElement,
    IonCard
  },
}
</script>

<style scoped>

.main-card-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  max-width: 600px;

  --ion-card-background: var(--ion-color-main-contrast);
}


</style>
