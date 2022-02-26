<template>
  <button v-for="locale of $i18n.availableLocales" :key="locale"
          @click="changeLocale(locale)"
          type="button"
          class="btn btn-lg">
    <img :src="require(`@/assets/img/flags/${locale}.png`)" width="50"/>
  </button>
</template>

<script>
export default {
  name: 'TheLocaleChanger',
  data() {
    return {
      langs: [
        {
          id: 'et',
          name: 'Eesti',
        },
        {
          id: 'en',
          name: 'English',
        },
        {
          id: 'ru',
          name: 'Vene',
        },
      ]
    }
  },
  methods: {
    changeLocale(localeString) {
      this.$i18n.locale = localeString;
      localStorage.setItem("locale", localeString);
    },
  },
  created: function () {
    if (localStorage.getItem("locale") !== null) {
      this.$i18n.locale = localStorage.getItem("locale");
    }
  },
}
</script>

<style scoped>

</style>