import {ref} from 'vue'

const getPost = () => {
    const posts = ref([])
    const error = ref(null)

      const load = async () => {
        try {
          let data = await fetch('https://localhost:7028/WeatherForecast/getPosts')
          console.log(data)
          if(!data.ok) {
            throw Error('no data available!')
          }  
          const _data = await data.json()
          posts.value = _data
        } catch (err) {
          error.value = err.message;
          console.log(`err.message:: ${err.message}`)
        }
      }
       return {posts, error, load}
}
// exports.getPost = getPost; // as props {}
export default getPost; // export as class