<script>
import AppMain from './components/AppMain.vue';
import axios from 'axios';
export default {
  name: 'Boolfolio',
  data() {
    return {
      apiUrl: 'http://127.0.0.1:8000/api/projects',
    }
  },
  components: {
    AppMain,
  },
  methods: {
    getProjects() {
      axios.get(this.apiUrl).then((response) => {
        console.log(response.data);
      });
    }
  },
  created() {
    this.getProjects();
  }

}
</script>

<template>
  <AppMain />
</template>

<style scoped></style>