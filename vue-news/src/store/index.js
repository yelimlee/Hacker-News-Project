import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex);

export const store =new Vuex.Store({
    state:{
        news: [],
        jobs: [],
        asks: [],
        user: {},
        items: {},
    },
    getters:{
        fetchedAsk(state){
            return state.asks;
        },
        fetchedJob(state){
            return state.jobs;
        },
        fetchedUser(state){
            return state.user;
        },
        fetchedItem(state){
            return state.items;
        }
    },
    mutations,
    actions,
})