<template>
  <VBtn @click="changeTheme('lightTheme')">light</VBtn>
  <VBtn @click="changeTheme('darkTheme')" >dark</VBtn>
  <VBtn @click="changeTheme('redTheme')" >red</VBtn>
  <VBtn @click="changeTheme('otherTheme')" >other</VBtn>
</template>

<script>
export default {
    methods: {
        changeTheme (theme) {
            this.$vuetify.theme.global.name = theme
        }
    }
};
</script>

<style>
</style>