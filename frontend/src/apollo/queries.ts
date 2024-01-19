import { gql } from 'graphql-tag'

export const ALL_SENSORS = gql`
  query {
    allSensors {
      sensorId, name, location, factors
    }
  }
`