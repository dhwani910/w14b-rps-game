import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: cookies.get('token'),
    options: ['Rock', 'Paper', 'Scissor'],
    yourWeapon: '',
    computerWeapon: '',
    result: '',
    yourScore: 0,
    computerScore: 0,
    totalRounds: 0,
    fighting: false,
  },
  mutations: {
    setToken(state, token){
      cookies.set('token', token);
      state.token = token;

    },
    logout(state){
      state.token = null;
      cookies.remove('token');

    },
    chooseWeapon(state, weapon){
      state.yourWeapon = weapon;
      state.result = '';
      state.computerWeapon = '';

    },
    fight(state){
      state.computerWeapon =  state.options[Math.floor(Math.random() *  state.options.length)];
      if( state.yourWeapon ===  state.computerWeapon){
        // state._draw();
        state.result = 'draw',
        state.totalRounds++;
      }
      if( state.computerWeapon === 'Rock'){
          if( state.yourWeapon === 'Paper'){
            // state._win();
            state.result = 'won';
            state.yourScore++;
            state.totalRounds++;
          }
          if( state.yourWeapon === 'Scissor'){
            // state._lost();
            state.result = 'lost';
            state.computerScore++;
            state.totalRounds++;
          }
      }
      if( state.computerWeapon === 'Paper'){
          if( state.yourWeapon === 'Rock'){
            // state._lost();
            state.result = 'lost';
            state.computerScore++;
            state.totalRounds++;
          }
          if( state.yourWeapon === 'Scissor'){
            // state._win();
            state.result = 'won';
            state.yourScore++;
            state.totalRounds++;
          }
      }
      if( state.computerWeapon === 'Scissor'){
          if( state.yourWeapon === 'Rock'){
            // state._win();
            state.result = 'won';
            state.yourScore++;
            state.totalRounds++;
          }
          if( state.yourWeapon === 'Paper'){
            // state._lost();
            state.result = 'lost';
            state.computerScore++;
            state.totalRounds++;
          }
      }
         
    },
    // _draw(state){
    //   state.result = 'draw',
    //   state.totalRounds++;
    // },
    // _win(state){
    //   state.result = 'won';
    //   state.yourScore++;
    //   state.totalRounds++;
    // },
    // _lost(state){
    //   state.result = 'lost';
    //   state.computerScore++;
    //   state.totalRounds++;
    // }, 
    reset(state){
      state.computerScore = 0;
      state.yourScore = 0;
      state.result = '';
      state.yourWeapon = '';
      state.computerWeapon = '';
      state.totalRounds = 0;
    }
  },
  actions: {},
  modules: {}
});
