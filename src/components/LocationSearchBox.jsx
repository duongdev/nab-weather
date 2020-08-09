import React, { useState, useEffect } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { useQuery } from 'react-query'
import axios from 'axios'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'

const fetchLocations = async (searchText = '') => {
  if (!searchText) {
    return []
  }
  const { data } = await axios.get(`/location/search/`, {
    params: { query: searchText },
  })

  return data
}

const LocationSearchBox = () => {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState(null)
  const [options, setOptions] = useState([])
  const { data, isLoading, error, isError } = useQuery(
    ['locations', inputValue],
    () => fetchLocations(inputValue),
    {
      // initialData: [],
      enabled: inputValue,
    },
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
      onChange={(e, option) => setValue(option)}
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
          <div>
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
