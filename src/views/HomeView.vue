<template>
  <div class="home">
    <h1>Home</h1>

    <!-- Part 1-->
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">increase age</button>
    <input type="text" v-model="name"> -->

    <!-- Part 2-->
    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }} - {{ nameOne }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>

    <h2>reactive</h2>
    <p>{{ ninjaTow.name }} - {{ ninjaTow.age }} - {{ nameTow }}</p>
    <button @click="updateNinjaTow">Update Ninja Tow</button> -->

    <!-- Part 3-->
    <!-- <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button> -->

    <!--Part 4-->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostLise v-if="showPosts" :posts="posts" />
    </div>
    <div v-else> loading...</div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import getPost from '../composables/getPost'

import PostLise from '../components/PostLise.vue'
export default {
  name: 'HomeView',
  components: { PostLise },
  setup() {
    console.log('setup func')

    // 111111111111111111111111
    // const p = ref('helllllooooo')
    // console.log(p, p.value)
    // const name =  ref('Mhmd')
    // const age =  ref(27)

    // const handleClick = () => {
    //   console.log(p, p.value)
    //   //p.value.classList.add('test')
    //   //p.value.textContent = 'hello !!!!'
    //   name.value = 'ghazal'
    //   age.value = 34
    // }
    // return { name, age, handleClick, p }

    //2222222222222222222222222222 ref, reactive diffrence
    //   const ninjaOne = ref({name: 'ghazal', age: 1})
    //   const ninjaTow = reactive({name: 'noor', age: 25})

    //  const updateNinjaOne = () => {
    //     ninjaOne.value.age = 2
    //     nameOne.value = 'name 11 -- (updated)'
    //   }
    //   const updateNinjaTow = () => {
    //     ninjaTow.age = 26
    //    // nameTow = reactive('name 22 -- (updated)') // not working 
    //   }
    //   //we can't use premitive values with reactive() 
    //   //ex: 
    //   const nameOne = ref('name 1')
    //   const nameTow = reactive('name 2')

    //   // ref is better for external comonent values
    //   return {ninjaOne, updateNinjaOne, ninjaTow, updateNinjaTow, nameOne, nameTow}

    //333333333333333333333333 computed, watch, watchEffect
    // const search = ref('')
    // const names = ref(['mario', 'yoshi', 'lubna', 'khaled', 'mhmd', 'noor', 'ghazal', 'amro'])

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value))
    // })

    // let index = 1;
    // const assignWatchToVariableToStopIt = watch(search, () => {
    //   console.log(`watching search input is running - ${index} - search valur: ${search.value}`)
    //   index += 1;
    // })

    // const assignWatchEffectToVariableToStopIt = watchEffect(() => {
    //   console.log(`watchEffect func ran, search changes: ${search.value}`)
    // })
    // // stop watching by assign watch + watchEffect into variables then call the variables as a function 
    // const handleClick = (() => {
    //   assignWatchToVariableToStopIt()
    //   assignWatchEffectToVariableToStopIt()
    // })

    // return { names, search, matchingNames, handleClick }

    //4444444444444444444444
    const { posts, error, load } = getPost()
    load()
    const showPosts = ref(true)
 
    return { posts, showPosts, error }
  }
}
</script>


