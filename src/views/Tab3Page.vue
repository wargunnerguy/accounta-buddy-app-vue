<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $t('weekly_goals')}}</ion-title>
        <ion-buttons slot="end">
          <TheLocaleChanger></TheLocaleChanger>
          <ThemeChangeButton></ThemeChangeButton>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
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
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import MainSwiper from '@/components/MainSwiper.vue';
import ThemeChangeButton from '@/components/ThemeChangeButton.vue';
import TheLocaleChanger from '@/components/TheLocaleChanger.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: {MainSwiper, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, ThemeChangeButton, TheLocaleChanger}
});

</script>

