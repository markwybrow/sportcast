const { RESTDataSource } = require('apollo-datasource-rest');


const key = "268f3d61-ca02-414d-b91b-269b2617d30a"; // change to env var
const fixtureId = "178949"; // change to arg

module.exports = class LeaguesDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://clusteruat.sportcastlive.com/Public/`;
  }

  async getAllLeagues() {

    const results = await this.get(
      `GetAllLeagues?key=${key}`
    ).then((results) => results);
    
    return results
  }
}
