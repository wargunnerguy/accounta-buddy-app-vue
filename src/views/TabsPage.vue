<template>
  <ion-page>
    <ion-tabs>
      <TheNavbar></TheNavbar>
      <ion-router-outlet></ion-router-outlet>
      <BottomButtons></BottomButtons>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {defineComponent} from 'vue';
import {IonTabs, IonPage, IonRouterOutlet} from '@ionic/vue';
import BottomButtons from "@/components/layout/BottomButtons";
import TheNavbar from "@/components/layout/TheNavbar";

export default defineComponent({
  name: 'TabsPage',
  components: {IonTabs, IonPage, IonRouterOutlet, BottomButtons, TheNavbar},
});
</script>
