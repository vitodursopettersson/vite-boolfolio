<script>

export default {
    components: {

    },
}

</script>

<template>
    <main>
        <h1>Benvenuto</h1>
        <br>
        <router-link :to="{ name: 'projects' }" class="text-white">Scopri i progetti →</router-link>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}
</style>