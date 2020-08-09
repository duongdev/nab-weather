import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Box, CircularProgress, Grid } from '@material-ui/core'
import { useQuery } from 'react-query'
import client from 'helpers/api-client'
import WeatherConditionItem from './WeatherConditionItem'

const fetchLocationWeather = async (locationId) => {
  const { data } = await client.get(`/location/${locationId}/`)

  return data
}

const WeatherConditions = (props) => {
  const { locationId } = props
  const { data, isLoading } = useQuery(
    ['location', locationId],
    () => fetchLocationWeather(locationId),
    { enabled: locationId },
  )

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    )
  }

  if (!locationId) {
    return (
      <Typography align="center" color="textSecondary">
        Select a location above to see its weather
      </Typography>
    )
  }

  if (!data?.consolidated_weather) {
    return (
      <Typography align="center" color="textSecondary">
        Unable to load weather for this location. Please try again.
      </Typography>
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">{data.title}</Typography>
      </Grid>
      {data.consolidated_weather.slice(0, 5).map((item) => (
        <Grid item xs={12} sm key={item.id}>
          <WeatherConditionItem data={item} />
        </Grid>
      ))}
    </Grid>
  )
}

WeatherConditions.propTypes = {
  locationId: PropTypes.number,
}

export default WeatherConditions
