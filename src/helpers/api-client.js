import axios from 'axios'

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? undefined
      : 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api',
})

export default client
