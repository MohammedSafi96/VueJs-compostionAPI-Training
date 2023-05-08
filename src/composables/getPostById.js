import {ref} from 'vue'

const getPostById = (id) => {
    const post = ref(null)
    const error = ref(null)

      const load = async () => {
        try {
          let data = await fetch('https://localhost:7279/WeatherForecast/getPosts')
          console.log(data)
          if(!data.ok) {
            throw Error('no data available!')
          }  
          const _data = await data.json()
          
          post.value = _data.posts.find((b) => b.id == id)
          console.log(JSON.stringify(post.value))
        } catch (err) {
          error.value = err.message;
          console.log(`err.message:: ${err.message}`)
        }
      }
       return {post, error, load}
}
// exports.getPostById = getPostById; // as props {}
export default getPostById; // export as class