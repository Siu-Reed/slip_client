export default class SlipService {
  constructor(http, tokenStorage, socket) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.socket = socket;
  }

  async getslips(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/tweets${query}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }

  async postslip(text) {
    return this.http.fetch(`/tweets`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ text, username: 'ellie', name: 'Ellie' }),
    });
  }

  async deleteslip(slipId) {
    return this.http.fetch(`/tweets/${slipId}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
  }

  async updateslip(slipId, text) {
    return this.http.fetch(`/tweets/${slipId}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify({ text }),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  onSync(callback) {
    return this.socket.onSync('tweets', callback);
  }
}
