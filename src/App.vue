<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Boolfolio',
  components: {
    AppHeader,
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style scoped></style>