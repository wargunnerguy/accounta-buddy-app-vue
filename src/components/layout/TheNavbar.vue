<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ $t('weekly_goals')}}</ion-title>
      <ion-buttons slot="end">
        <TheLocaleChanger></TheLocaleChanger>
        <ThemeChangeButton></ThemeChangeButton>
        <TheSettingsButton></TheSettingsButton>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {IonHeader, IonTitle, IonToolbar} from "@ionic/vue";
import ThemeChangeButton from "@/components/utils/ThemeChangeButton";
import TheLocaleChanger from "@/components/utils/TheLocaleChanger";
import TheSettingsButton from "@/components/utils/TheSettingsButton";
export default {
  name: "TheNavbar",
  components: {IonHeader, IonToolbar, IonTitle, ThemeChangeButton, TheLocaleChanger, TheSettingsButton}
}
</script>

<style scoped>

</style>
