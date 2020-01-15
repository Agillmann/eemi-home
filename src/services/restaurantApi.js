import Api from './api';

export default {
  async getRestaurants() {
    return await Api().get('/restaurants');
  },
};
