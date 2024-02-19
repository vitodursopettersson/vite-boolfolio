<script>
import axios from 'axios';
export default {
    name: 'AppSingleProject',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            imageUrl: 'http://127.0.0.1:8000/storage/',
            project: null,
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}/${this.$route.params.slug}`).then((response) => {
                console.log(response.data);
                this.project = response.data.results;
            });
        }
    },
    created() {
        this.getProject();
    }
}

</script>

<template>
    <p v-if="!project" class="loader"> Loading...</p>
    <main v-else class="row">
        <div class="col-6">
            <img :src="imageUrl + project.thumb" alt="..." class="img-fluid">
        </div>
        <div class="col-6">
            <h1>{{ project.title }}</h1>
            <h6 class="text-body-tertiary fw-normal fs-6">{{ project.type.name }}</h6>
            <p class="card-text">{{ project.description }}</p>
            <span v-for=" tech  in  project.technologies "
                class="badge rounded-pill text-bg-light me-1 px-3 py-2 border border-black hover-badge">{{ tech.name
                }}</span>
        </div>
    </main>
</template>

<style scoped></style>