<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> Language </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title class="langSelectItem" @click="this.changeLanguage('en')">English</v-list-item-title>
        <v-list-item-title class="langSelectItem" @click="this.changeLanguage('ara')">Arabic</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
    name: "LangSelector",
    methods : {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>

<style scoped>
    .langSelectItem {
        cursor: pointer;
    }
</style>
    