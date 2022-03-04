<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <BuddyList></BuddyList>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import BuddyList from "@/components/buddyList/BuddyList.vue";


export default defineComponent({
  name: 'GeneralBuddyListPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, BuddyList }
});
</script>
