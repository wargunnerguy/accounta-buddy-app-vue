<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card class="main-card-wrapper">
        <ion-header class="ion-text-center"><h2>My goals for the next week</h2></ion-header>
        <ion-item v-for="item in [1, 2, 3, 4, 5]" :key="item" class="">
          <ion-label>Goal #{{ item }}</ion-label>
          <ion-input placeholder="Type here.."></ion-input>
          <ion-button color="dark">Save</ion-button>
        </ion-item>
      </ion-card>
      <ion-card class="main-card-wrapper">
        <ion-header class="ion-text-center"><h2>Sten's goals for the next week</h2></ion-header>
        <ion-item v-for="item in [1, 2, 3, 4, 5]" :key="item" class="">
          <ion-label>Goal #{{ item }}</ion-label>
          <ion-input placeholder="" disabled></ion-input>
        </ion-item>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonInput } from '@ionic/vue';

export default  defineComponent({
  name: 'MyThisWeekPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonInput }
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
  --ion-card-background: var(--ion-color-main-contrast);
  --ion-item-background: var(--ion-color-main-theme-contrast-dark);
  --ion-card: var(--ion-color-main-theme);
  --ion-item-border-color: var(--ion-color-main-contrast);
}
</style>
