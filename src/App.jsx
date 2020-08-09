import React, { useState } from 'react'
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Grid,
} from '@material-ui/core'
import LocationSearchBox from 'components/LocationSearchBox'
import theme from 'theme'
import { ReactQueryCacheProvider } from 'react-query'
import WeatherConditions from 'components/WeatherConditions'

function App() {
  const [location, setLocation] = useState(null)
  // const [location, setLocation] = useState({ woeid: 1252431 })
  return (
    <ReactQueryCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box paddingY={4}>
            <Grid container spacing={4} direction="column" wrap="nowrap">
              <Grid item>
                <LocationSearchBox onChange={setLocation} />
              </Grid>
              <Grid item>
                <WeatherConditions locationId={location?.woeid} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  )
}

export default App
