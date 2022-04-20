const { RESTDataSource } = require('apollo-datasource-rest');


const key = "268f3d61-ca02-414d-b91b-269b2617d30a"; // change to env var

// let leagueId=0;
// let startDate=2022-04-18;
// let endDate=2022-04-29;


module.exports = class FixtureListDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://clusteruat.sportcastlive.com/Public/`;
  }

  async getAllFixturesList(startDate, endDate) {
    const options = { method: "GET", headers: { Accept: "application/json" } };
   // const URIpath = `GetFixtureList?key=${key}&startDate=${startDate}&endDate=${endDate}`;
    const URIpath = `GetFixtureList?key=${key}&startDate=2022-04-10&endDate=2022-04-28`;
    console.info('startDate, endDate: ', {startDate, endDate});
    
    const results = await this.get(URIpath, options).then((results) => results).catch(err=> console.error(err));

    return results;
  }

  async getFixture(fixtureId) {
    console.info("fixtureId: ", { fixtureId });
    const options = { method: "GET", headers: { Accept: "application/json" } };
    const results = await this.get(
      `GetFixture?key=${key}&fixtureId=${fixtureId}`,
      options
    );

    return results;
  }
};
