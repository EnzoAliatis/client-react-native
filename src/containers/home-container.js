import React, { Component } from 'react'
import HomeComponent from '../components/home-component';
import ApolloClient, { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';


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
const client = new ApolloClient({
  uri: 'https://graphql-server-base.herokuapp.com/graphql'
})

class HomeContainer extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <HomeComponent>
          <Query query={GET_STUDENTS}>
            {({ loading, error, data }) => {
              if (error) return <ErrorComponent />
              if (loading || !data) return <LoadingComponent />
              console.log(data)
              return <DataListComponent data={data} />
            }}
          </Query>
        </HomeComponent>
      </ApolloProvider>

    )
  }
}



export default HomeContainer
