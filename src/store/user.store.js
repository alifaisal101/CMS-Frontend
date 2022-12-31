export default {
    state: {
      loggedIn: false,
      user: {
        id:null,
        email:null,
        role: null,
        privileges:[]
      }
    },
    getters: {
      isLoggedIn(state){
        return state.loggedIn;
      },
      getUserData(state) {
        return state.user;
      }
    },
  }
  