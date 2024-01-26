import { gql } from 'graphql-tag'

export const ALL_SENSORS = gql`
  query {
    allSensors {
      sensorId, name, location, factors,
      lastData {
        temperature, humidity, pressure
      }
    }
  }
`

export const FANSTATE = gql`
query {
  fanstate {
    time, state, override
  }
}
`