// Schema
const { gql } = require("apollo-server");

// create schema
 const typeDefs = gql`
  # Markets
  type MarketList {
    Id: ID
    LeagueId: Int
    UntranslatedLabel: String
    LabelId: Int
    Image: String
    Category: Int
  }

  # Leagues
  type LeaguesPayLoad {
    LeagueId: Int
    CompetitionId: Int
    Name: String
    Season: String
    SportName: String
    SportId: Int
    Active: Boolean
    ActiveFixtureCount: Int
    Country: String
  }

  type Leagues {
    Status: Int
    Error: String
    PayLoad: [LeaguesPayLoad]
  }
  # Fixtures
  type AwayTeam {
    TeamId: Int
    Name: String
    ShortName: String
    AbbreviatedName: String
  }

  type HomeTeam {
    TeamId: Int
    Name: String
    ShortName: String
    AbbreviatedName: String
  }

  type FixturePayLoad {
    FixtureId: Int
    ConsumerFixtureId: String
    LeagueId: Int
    CompetitionId: Int
    Sport: Int
    Venue: String
    StartTime: String
    StartTimeUTC: String
    MatchState: Int
    AwayTeam: AwayTeam
    HomeTeam: HomeTeam
  }

  type FixtureList {
    Status: Int
    Error: String
    PayLoad: [FixturePayLoad]
  }

  type Fixture {
    Status: Int
    Error: String
    PayLoad: FixturePayLoad
  }

  type Query {
    marketList(fixtureId: Int): MarketList
    leaguesList: Leagues
    fixtureList(leagueId: Int, startDate: String, endDate: String): FixtureList
    fixture(fixtureId: Int): Fixture
  }
`;

module.exports = typeDefs;