import CardsApi from 'cards/CardsApi';
import UsersApi from 'profile/UsersApi';

class HostApi {
  constructor({ address, token, groupId }) {
    this.cardsApi = new CardsApi({ address, token, groupId });
    this.usersApi = new UsersApi({ address, token, groupId });
  }

  getAppInfo() {
    return Promise.all([
      this.cardsApi.getCardList(),
      this.usersApi.getUserInfo(),
    ]);
  }
}


export default HostApi;
