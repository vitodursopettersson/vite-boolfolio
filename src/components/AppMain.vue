<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'AppMain',
    components: {
        ProjectCard,
    },
    props: ['projects'],
    data() {
        return {

        }
    }
}

</script>

<template>
    <main>
        <div class="d-flex gap-4 p-4">
            <ProjectCard v-for="project in projects" :project="project" />
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    height: 100vh;
    background-color: black;
}
</style>