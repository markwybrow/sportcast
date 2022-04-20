const { RESTDataSource } = require('apollo-datasource-rest');


const key = "268f3d61-ca02-414d-b91b-269b2617d30a"; // change to env var
// const fixtureId = "178949"; // change to arg

module.exports = class MarketListDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://clusteruat.sportcastlive.com/Public/`;
  }

  async getMarketList(fixtureId) {
      const options = {
        method: "GET",
        headers: { Accept: "application/json" }
      };
    console.log("Called getMarketList");
    const { results } = await this.get(
      `GetFixture?key=${key}&fixtureId=${fixtureId}&isConsumerId=false`,
      options
    );
    console.info('results: ', {results});
    
    return results;
  }
}
