<template>
  <VBtn @click="changeTheme('lightTheme')">light</VBtn>
  <VBtn @click="changeTheme('darkTheme')">dark</VBtn>
  <VBtn @click="changeTheme('redTheme')">red</VBtn>
  <VBtn @click="changeTheme('otherTheme')">other</VBtn>
  <p>{{ t('hello') }}</p>
  <VBtn>toggle language</VBtn>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },

  methods: {
    changeTheme(theme) {
      this.$vuetify.theme.global.name = theme;
    },
    changeLocale(locale) {
        this.$i18n.locale = locale;
    },
  },
};
</script>

<style>
</style>

<i18n>
    {
      "en" : {
        "hello": "Hello i18n in SFC!"
      },
      "ara" : {
        "hello": "لماذا نحن هنا"
      }
    }

</i18n>
    