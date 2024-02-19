<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'AppProjects',
    components: {
        ProjectCard,
    },
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            projects: null,
            currentPage: 1,
        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl, {
                params: {
                    page: this.currentPage,
                }
            }).then((response) => {
                console.log(response.data);
                this.projects = response.data;
            });
        },
        nextPage() {
            this.currentPage++;
            this.getProjects();
            this.$router.push({
                name: 'projects',
                query: { page: this.currentPage },
            });
        },
        prevPage() {
            this.currentPage--
            this.getProjects();
            this.$router.push({
                name: 'projects',
                query: { page: this.currentPage },
            });
        },
    },
    created() {
        this.getProjects();
    }
}

</script>

<template>
    <main>
        <div class="p-4">
            <h1 class="text-white">Projects</h1>
        </div>
        <div v-if="!projects" class="d-flex justify-content-center">
            <div class="spinner-border " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else>
            <ul>
                <li v-show="projects.results?.prev_page_url">
                    <a @click="prevPage"> ← Prev page</a>
                </li>
                <li>
                    <a v-show="projects.results?.next_page_url" @click="nextPage">Next
                        Page →</a>
                </li>
            </ul>
            <div class="d-flex gap-4 p-4 card-container">
                <ProjectCard v-for="project in projects.results.data" :project="project" />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    min-height: 100vh;
    background-color: black;
}

.card-container {
    flex-wrap: wrap;
}

ul {
    list-style: none;
    display: flex;
    color: rgb(80, 80, 80);
    text-decoration: underline;
    cursor: pointer;

    li {
        margin-right: 20px;
    }
}
</style>