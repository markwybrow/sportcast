const { gql } = require("apollo-server");

const query = gql`
type Query {
    marketList(fixtureId: Int): MarketList
    leaguesList: Leagues
    fixtureList(leagueId: Int, startDate: String, endDate: String): FixtureList
    fixture(fixtureId: Int): Fixture
  }
  `;

  module.exports = {
    query,
  };