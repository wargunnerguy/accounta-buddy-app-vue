<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <main-swiper></main-swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonPage, IonHeader, IonToolbar, IonContent} from '@ionic/vue';
import MainSwiper from '@/components/MainSwiper.vue';

export default defineComponent({
  name: 'DetailedUsersWeeksPage',
  components: {MainSwiper, IonHeader, IonToolbar, IonContent, IonPage}
});

</script>

