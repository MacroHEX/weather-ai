// ::: libraries
//

import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        uv_index_clear_sky_max
        time
        uv_index_max
        weathercode
      }
      utc_offset_seconds
      timezone_abbreviation
      timezone
      longitude
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        relativehumidity_2m
        rain
        windgusts_10m
        uv_index_clear_sky
        uv_index
        time
        temperature_2m
        snowfall
        snow_depth
        showers
      }
      latitude
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        snowfall
        uv_index_clear_sky
        uv_index
        windgusts_10m
        time
        temperature_2m
        showers
        snow_depth
        relativehumidity_2m
        rain
      }
      generationtime_ms
      elevation
      daily_units {
        apparent_temperature_max
        sunrise
        sunset
        apparent_temperature_min
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
    }
  }
`;

export default fetchWeatherQuery;
