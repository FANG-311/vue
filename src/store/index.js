import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        isLogined: false,
        token: ''
    },
    mutations: {
        increment (state){
            state.count++
        },
        Verify(state){
            state.isLogined = true;
        },
        reception(state,respond){
            state.token = respond.data.data.token;
        }
    }
})

export default store