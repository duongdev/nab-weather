import React from 'react'
import { Paper, Grid, Typography, makeStyles } from '@material-ui/core'
import { format } from 'date-fns'

const WeatherConditionItem = (props) => {
  const classes = useStyles(props)
  const { data } = props
  return (
    <Paper
      data-testid={`WeatherConditionItem-${data.id}`}
      className={classes.root}
    >
      <Grid
        container
        spacing={1}
        direction="column"
        wrap="nowrap"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="button" color="primary">
            {format(new Date(data.applicable_date), 'EEE dd MMM')}
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
            alt={data.weather_state_name}
            className={classes.stateImg}
          />
          <Typography variant="body2" color="textSecondary">
            {data.weather_state_name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            Min:{' '}
            <Typography variant="button" color="textPrimary">
              {Math.round(data.min_temp)}
            </Typography>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Max:{' '}
            <Typography variant="button" color="textPrimary">
              {Math.round(data.max_temp)}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(1),
  },
  stateImg: {
    height: 72,
    maxWidth: '100%',
  },
}))

export default WeatherConditionItem
