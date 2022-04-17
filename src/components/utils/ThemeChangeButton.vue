<template>
  <ion-icon slot="start" :icon="getIcon"></ion-icon>
  <ion-label>
    {{ $t('toggle_dark_theme') }}
  </ion-label>
  <ion-toggle id="themeToggle" slot="end" @ionChange="toggleDarkTheme" :checked="isDarkMode"></ion-toggle>
</template>

<script>
import {
  IonIcon,
  IonLabel,
  IonToggle
} from '@ionic/vue'
import {moon, sunny} from "ionicons/icons";
import {useStore} from "@/store";

export default {
  name: "ThemeChangeButton",
  components: {
    IonIcon,
    IonLabel,
    IonToggle
  },
  setup() {
    const store = useStore();
    return {
      moon,
      sunny,
      store
    }
  },
  methods: {
    toggleDarkTheme() {
      document.body.classList.toggle('dark');
      this.store.isDarkMode = !this.store.isDarkMode;
    },
  },
  computed: {
    getIcon() {
      return this.store.isDarkMode ? this.moon : this.sunny;
    },
    isDarkMode() {
      return this.store.isDarkMode;
    }
  }
}

</script>

<style scoped>

</style>
