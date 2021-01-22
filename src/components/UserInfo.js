class UserInfo {
  constructor({ userId, userNameSelector, userJobSelector }) {
    this._userId = userId;
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    this._userInfo = {
      id: this._userId,
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
    return this._userInfo;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userJob.textContent = userData.about;
  }
}

export default UserInfo;