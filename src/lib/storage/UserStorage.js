class UserStorage {
  setUserInformations(token, refreshToken, expiredAt) {
    localStorage.setItem('user', JSON.stringify({ token, refreshToken, expiredAt }));
  }

  getUserInformations() {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
      return null;
    }
  }

  getUserInformationsByKey(key) {
    return this.getUserInformations() ? this.getUserInformations()[key] : null;
  }

  resetUserAuthentication() {
    localStorage.removeItem('user');
  }
}

export default new UserStorage();
