class Github {
  //   constructor() {
  //     this.client_id = "0e409b4a2aa946d68a42";
  //     this.client_secret = "f3454d3ab41a6960fc702405a720018a3cdd69b4";
  //   }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/ ${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
