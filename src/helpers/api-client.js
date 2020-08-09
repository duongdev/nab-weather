import axios from 'axios'

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? undefined
      : 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api',
})

export const fetchLocations = async (searchText = '') => {
  if (!searchText) {
    return []
  }
  const { data } = await client.get(`/location/search/`, {
    params: { query: searchText },
  })

  return data
}

export const fetchLocationWeather = async (locationId) => {
  const { data } = await client.get(`/location/${locationId}/`)

  return data
}

export default client
