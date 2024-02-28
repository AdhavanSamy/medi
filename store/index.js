import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    userCredentials :[
      { username: 'biller', password: '1234', id: "biller" },
      { username: 'manager', password: '1234', id: "manager" },
      { username: 'admin', password: '1234', id: "admin" },
      { username: 'inventry', password: '1234', id: "inventry" },
    ],

    history: [
    ],

    statebill:'',
    statemanager:'',
    stateadmin:'',
    stateinventry:'',
  },
  mutations: {
    mutationbill(state, valueforbiller) {
      state.statebill = valueforbiller;
    },
    mutationmanager(state, valueformanager) {
      state.statemanager = valueformanager;
    },
    mutationadmin(state, valueforadmin){
      state.stateadmin = valueforadmin;
    },
    mutationinventry(state, valueforinventry){
      state.stateinventry = valueforinventry;
    },

    MUTATE_HISTORY(state,value){
      state.history.push(value);
    },
    MUTATE_LOGOUT(state,value){
      state.history.push(value);
    }

  },
  actions: {},
  modules: {},
});
