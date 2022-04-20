const { ApolloServer, gql } = require('apollo-server');

// Datasources
const { FixtureListDataSource, LeaguesDataSource, MarketListDataSource } = require("./DataSources");

// create Schema + Query
const typeDefs = require("./Schemas");


const resolvers = {
  Query: {
    marketList: (_, { fixtureId }, { dataSources }) =>
      dataSources.marketListAPI.getMarketList(fixtureId),
    leaguesList: (_, __, { dataSources }) =>
      dataSources.leaguesAPI.getAllLeagues(),
    fixtureList: (_, { leagueId, startDate, endDate }, { dataSources }) =>
      dataSources.fixturesAPI.getAllFixturesList(leagueId),
    fixture: (_, { fixtureId }, { dataSources }) =>
      dataSources.fixturesAPI.getFixture(fixtureId),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    marketListAPI: new MarketListDataSource(),
    leaguesAPI: new LeaguesDataSource(),
    fixturesAPI: new FixtureListDataSource(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
