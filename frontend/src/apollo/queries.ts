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

export const SENSOR = gql`
query ($id: Int!) {
  sensor(id: $id) {
    sensorId, name, location, factors,
    lastData {
      temperature, humidity, pressure
    }
  }
}
`