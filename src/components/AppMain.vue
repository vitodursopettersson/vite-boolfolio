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
        <ProjectCard v-for="project in projects" :title="project.title" :description="project.description"
            :technologies="project.technologies" :type="project.type" />
    </main>
</template>

<style scoped lang="scss">
main {
    height: 100vh;
    background-color: black;
}
</style>