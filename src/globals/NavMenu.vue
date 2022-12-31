<template>
  <p>{{ t("hello") }}</p>
  <button @click="changeLanguage">Change langauge</button>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "HelloI18n",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },
  methods: {
    changeLanguage() {
      this.$vuetify.theme.global.name = "darkTheme";
      this.$i18n.locale === "ja"
        ? (this.$i18n.locale = "en")
        : (this.$i18n.locale = "ja");

      fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: "admin",
          password: "admin",
        }),
        
      }).then((result) =>
        result
          .json()
          .then((loginResult) => {
            console.log(loginResult, "error here");
          })
          .catch((err) => {
            console.log(err);
          })
      );
    },
  },
});
</script>

<i18n>
  {
    "en": {
      "hello": "hello world!"
    },
    "ja": {
      "hello": "こんにちは、世界！"
    }
  }
  </i18n>