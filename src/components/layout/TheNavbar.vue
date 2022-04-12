<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>{{ $t('weekly_goals')}}</ion-title>
      <ion-buttons slot="end">
        <TheSettingsButton></TheSettingsButton>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {IonBackButton, IonHeader, IonTitle, IonToolbar} from "@ionic/vue";
import TheSettingsButton from "@/components/utils/TheSettingsButton";
export default {
  name: "TheNavbar",
  components: {IonHeader, IonToolbar, IonTitle, IonBackButton, TheSettingsButton}
}
</script>
