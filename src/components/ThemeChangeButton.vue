<template>
  <ion-icon slot="start" name="moon"></ion-icon>
  <ion-label>
    {{ $t('toggle_dark_theme') }}
  </ion-label>
  <ion-toggle id="themeToggle" slot="end"></ion-toggle>
</template>

<script>
export default {
  name: "ThemeChangeButton",
}

</script>

<style scoped>

</style>
