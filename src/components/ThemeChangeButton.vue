<template>
  <ion-icon slot="start" name="moon"></ion-icon>
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

export default {
  name: "ThemeChangeButton",
  components: {
    IonIcon,
    IonLabel,
    IonToggle
  },
  data() {
    return {
      isDarkMode: document.body.classList.contains('dark'),
    }
  },
  methods: {
    toggleDarkTheme() {
      document.body.classList.toggle('dark');
    }
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
