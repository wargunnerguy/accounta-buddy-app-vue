<template>
  <ion-card class="main-card-wrapper">
    <ion-card>
      <ion-item>
        <TheLocaleChanger></TheLocaleChanger>
      </ion-item>
    </ion-card>
    <ion-card>
      <ion-item>
        <ThemeChangeButton></ThemeChangeButton>
      </ion-item>
    </ion-card>
  </ion-card>
</template>

<script>
import {defineComponent} from "vue";
import {IonCard, IonItem} from "@ionic/vue";
import TheLocaleChanger from "@/components/utils/TheLocaleChanger";
import ThemeChangeButton from "@/components/utils/ThemeChangeButton";

export default defineComponent({
  name: 'TheSettingsCard',
  components: {IonCard, IonItem, TheLocaleChanger, ThemeChangeButton}
});
</script>

<style scoped>
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
