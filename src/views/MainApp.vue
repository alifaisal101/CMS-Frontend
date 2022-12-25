<template>
  <v-app id="MainApp">
      <NavMenuVue />
      <router-view />
  </v-app>
</template>

<script>
import NavMenuVue from '@/globals/NavMenu.vue';

export default {
  components:{
    NavMenuVue
  }
}
</script>

<style>

</style>