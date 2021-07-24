export default{
    state: { 
        user: null,
        isLoggedIn: false, 
    },
    mutations: { 
        set_user (state, data) {
            state.user = data
            state.isLoggedIn = true
        }, 
        reset_user (state) {
            state.user = null
            state.isLoggedIn = false
        }
    },
    getters:{ 
      isLoggedIn (state){
        return state.isLoggedIn
      },
      user (state) {
        return state.user
      }
    },
    actions: { 
    } 
  }