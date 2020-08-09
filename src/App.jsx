import React from 'react'
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

function App() {
  return (
    <ReactQueryCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box paddingY={4}>
            <Grid container spacing={4} direction="column" wrap="nowrap">
              <Grid item>
                <LocationSearchBox />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  )
}

export default App
