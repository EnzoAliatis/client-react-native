import React, { Component } from 'react'
import HomeComponent from '../components/home-component';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ErrorComponent from '../components/error-component';
import LoadingComponent from '../components/loading-component';
import DataListComponent from '../components/data-list-component';

const GET_STUDENTS = gql`
  query GetEnzo {
    studentByName(name: "Melissa") {
      name
      phone {
        brand
        model
      }
    }
  }
`

class HomeContainer extends Component {

  render() {
    return (
      <HomeComponent>
        <Query query={GET_STUDENTS}>
          {({ loading, error, data }) => {
            if (error) return <ErrorComponent />
            if (loading || !data) return <LoadingComponent />
            console.log(data)
            return <DataListComponent data={data}/>
          }}
        </Query>
      </HomeComponent>
    )
  }
}



export default HomeContainer
