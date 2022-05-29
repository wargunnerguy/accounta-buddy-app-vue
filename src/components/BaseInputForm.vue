<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ heading }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card class="main-card-wrapper">
        <ion-header class="ion-text-center"><h2>{{ heading }}</h2></ion-header>
        <ion-card-content>
          <slot></slot>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent} from '@ionic/vue';

export default defineComponent({
  name: 'BasInputForm',
  components: {IonHeader, IonCardContent, IonToolbar, IonTitle, IonContent, IonPage, IonCard},
  props: ['heading']
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

ion-card {
  --ion-item-background: var(--ion-color-main-theme-contrast-dark);
  --ion-card: var(--ion-color-main-theme);
  --ion-item-border-color: var(--ion-color-main-theme-contrast-dark);
}
</style>
