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
    <div class="card">
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
        <div class="icon-container">
            <div class="icon">
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="arrow">→</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hover-badge {

    margin-bottom: 6px;

    &:hover {

        background-color: #edecec !important;
        transition: background-color 0.2s ease-in-out;
    }
}

.card-img-container {
    height: 300px;
    padding: 2px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 6px;
    }
}

.card-text-container {
    min-height: 264px;
}

.icon {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    border-radius: 50%;
    margin: 8px;

    &:hover {
        background-color: #edecec !important;
        transition: background-color 0.2s ease-in-out;
    }

    .arrow {
        text-decoration: none;
        color: black;
    }
}

.icon-container {
    display: flex;
    justify-content: end;
}

/* .card {
    width: calc((100% / 4) - 20px);
    min-width: calc((100% / 2) - 20px);
} */

@media (min-width: 576px) {
    .card {
        width: calc((100% / 2) - 20px);
    }
}

@media (min-width: 768px) {
    .card {
        width: calc((100% / 3) - 20px);
    }
}

@media (min-width: 992px) {
    .card {
        width: calc((100% / 4) - 20px);
    }
}

@media (min-width: 1400px) {
    .card {
        width: calc((100% / 5) - 20px);
    }
}
</style>