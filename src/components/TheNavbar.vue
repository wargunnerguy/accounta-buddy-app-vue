<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ $t('weekly_goals')}}</ion-title>
      <ion-buttons slot="end">
        <TheLocaleChanger></TheLocaleChanger>
        <ThemeChangeButton></ThemeChangeButton>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {IonHeader, IonTitle, IonToolbar} from "@ionic/vue";
import ThemeChangeButton from "@/components/ThemeChangeButton";
import TheLocaleChanger from "@/components/TheLocaleChanger";

export default {
  name: "TheNavbar",
  components: {IonHeader, IonToolbar, IonTitle, ThemeChangeButton, TheLocaleChanger}
}
</script>

<style scoped>

</style>
