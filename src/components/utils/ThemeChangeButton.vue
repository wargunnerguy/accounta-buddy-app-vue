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

export default {
  name: "ThemeChangeButton",
  components: {
    IonIcon,
    IonLabel,
    IonToggle
  },
  setup() {
    return {moon, sunny};
  },
  methods: {
    toggleDarkTheme() {
      document.body.classList.toggle('dark');
      this.store.isDarkMode = !this.store.isDarkMode;
    },
  },
  computed: {
    getIcon() {
      return this.isDarkMode ? this.moon : this.sunny;
    },
  },
  mounted() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // Use matchMedia to check the user preference
    this.isDarkMode = document.body.classList.toggle('dark', prefersDark.matches);

// Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));

  }
}

</script>

<style scoped>

</style>
