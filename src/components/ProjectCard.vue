<script>

export default {
    name: 'ProjectCard',
    props: ['title', 'description', 'technologies', 'type'],
}

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <span v-for="tech in technologies" class="badge rounded-pill text-bg-primary">{{ tech.name }}</span>
            <h6>{{ type.name }}</h6>
        </div>
    </div>
</template>

<style scoped></style>