<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />

        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost  from './SinglePost.vue'

export default {
    props: ['posts'],
    components: {SinglePost},
    setup (props) {
        console.log(props.posts)

    // life cycle hook in vue composition api
        onMounted(() => {
            console.log('component mounted')
        })
        onUnmounted(() => {
            console.log('component unmounted')
        })
        onUpdated(() => {
            console.log('component updated')
        })
        return {}
    }
}
</script>

<style>

</style>