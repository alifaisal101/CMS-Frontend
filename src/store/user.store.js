export default {
    state: {
      loggedIn: false,
      user: {
        id:null,
        token:{
            value:null,
            expDate:null
        },
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
    mutations: {
      setLoggedInTrue (state) {
        state.loggedIn = true;
      },
      setLoggedInFalse (state) {
        state.loggedIn = false;
      },
      setUser(state, payload) {
        state.user.id = payload.id;
        state.user.email = payload.email;
        state.user.token.value = payload.token.value;
        state.user.token.expDate = payload.token.expDate;
        state.user.role = payload.role;
        state.user.privileges = payload.privileges;
      }
    },
    
    actions: {
      login(context, payload) {
        const body = {
          username: payload.email,
          password: payload.password,
        };

        fetch("http://127.0.0.1:5000/auth/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(body),
        }).then((result) =>
          result
            .json()
            .then((loginResult) => {
              if(loginResult.token){
                context.commit("setUser", {
                  id:loginResult._id,
                  email:body.email,
                  token:{value:loginResult.token},
                  privileges:loginResult.privileges
                });
                context.commit("setLoggedInTrue");
              }
            })
            .catch((err) => {
              console.log(err);
            })
        );
      }
    },
  }
  