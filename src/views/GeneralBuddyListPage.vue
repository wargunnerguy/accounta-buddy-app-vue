<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card class="main-card-wrapper">
        <BuddyListElement :buddy-name="'Sten'" :streak-in-days="store.getStreakForUser(0)" :weekly-completeness="store.getCompletenessesForUser(0, 5)"></BuddyListElement> <!-- TODO get last week and insert it to weeklyData -->
        <BuddyListElement :buddy-name="'Reimo'" :streak-in-days="store.getStreakForUser(1)" :weekly-completeness="store.getCompletenessesForUser(1, 5)"></BuddyListElement> <!-- TODO get last week and insert it to weeklyData -->
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import BuddyListElement from "@/components/buddyList/BuddyListElement.vue";
import {useStore} from "@/store";

export default defineComponent({
  name: 'GeneralBuddyListPage',
  components: {BuddyListElement, IonHeader, IonToolbar, IonTitle, IonContent, IonPage},
  setup() {
    const store = useStore();
    return {
      store
    }
  }
});
</script>
<style lang="scss" scoped>
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
