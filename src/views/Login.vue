<template>
  <LangSelector />
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-text-field v-model="password" label="Password" required></v-text-field>

    <v-btn color="primary" @click.prevent="login"> Submit </v-btn>
  </v-form>
</template>

<script>
import LangSelector from "../components/LangSelector.vue";
import { useI18n } from "vue-i18n";

export default {
  name: "LoginView",
  components: {
    LangSelector,
  },

  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    return { t };
  },

  data() {
    return {
      valid: false,
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        this.$store.dispatch("login",{email:this.email, password:this.password});
      }
    },
  },
};
</script>

<style>
</style>

<i18n>
    {
      "en": {
        "hello": "hello world!"
      },
      "ara": {
        "hello": "مرحبا بكم"
      }
    }
</i18n>