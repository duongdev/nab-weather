import React, { useState, useEffect, useCallback } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { useQuery } from 'react-query'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import { fetchLocations } from 'helpers/api-client'

const LocationSearchBox = (props) => {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState(null)
  const [options, setOptions] = useState([])
  const { data, isLoading, error, isError } = useQuery(
    ['locations', inputValue.trim()],
    () => fetchLocations(inputValue.trim()),
    {
      // initialData: [],
      enabled: inputValue,
    },
  )

  const handleChangeLocation = useCallback(
    (event, location) => {
      setValue(location)
      // eslint-disable-next-line no-unused-expressions
      props.onChange?.(location)
    },
    [props.onChange],
  )

  useEffect(() => {
    if (!inputValue) return setOptions(value ? [value] : [])
    if (data) return setOptions(data)
  }, [data, inputValue, value])

  return (
    <Autocomplete
      autoComplete
      includeInputInList
      id="location-search"
      options={options ?? []}
      getOptionLabel={(location) => location.title}
      filterOptions={(x) => x}
      onInputChange={(event, value) => {
        setInputValue(value)
      }}
      onChange={handleChangeLocation}
      value={value}
      loading={isLoading}
      inputValue={inputValue}
      getOptionSelected={(opt, val) => opt?.woeid === val?.woeid}
      renderInput={(params) => (
        <TextField
          {...params}
          autoFocus
          fullWidth
          placeholder="Search a location..."
          variant="outlined"
          color={isError ? 'error' : 'primary'}
          helperText={error && error.message}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.title, inputValue)
        const parts = parse(option.title, matches)

        return (
          <div data-testid={`option-${option.woeid}`}>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        )
      }}
    />
  )
}

export default LocationSearchBox
