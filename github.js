class Github {
  constructor() {
    this.clientId = "b808e97d95a72d96b9a5";
    this.clientSecret = "ddeb362c23d7139888c53dde550fa18b66ded615";
    this.reposCount = 5;
    this.reposSort = "created: asc";
  }

  //using async function and fetch
  async getUser(user) {
    //fetch Url
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.reposCount
      }&sort=${this.reposSort}client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    };
  }
}
