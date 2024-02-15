<script>

export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },
    data() {
        return {
            imageUrl: 'http://127.0.0.1:8000/storage/',
        };
    },
    computed: {
        projectDescription() {
            return this.project.description.substring(0, 100) + "...";
        }
    }
}

</script>

<template>
    <div class="card" style="width: 20rem;">
        <div class="card-img-container">
            <img :src="imageUrl + project.thumb" alt="..." class="img-fluid">
        </div>
        <div class="card-body card-text-container">
            <h6 class="text-body-tertiary fw-normal fs-6">{{ project.type.name }}</h6>
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ projectDescription }}</p>
            <span v-for=" tech  in  project.technologies "
                class="badge rounded-pill text-bg-light me-1 px-3 py-2 border border-black hover-badge">{{
                    tech.name
                }}</span>
        </div>
    </div>
</template>

<style scoped></style>