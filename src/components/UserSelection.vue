<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-nd-8 nx-auto">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="title"> Rock , Paper , Scissor </div> <hr><hr>
                        <!-- <div class="d-flex scores flex-row">
                            <div class="d-flex align-items-center you mr-3 justify-content-between">
                                <span class="text">you</span><span class="score font-weight-bold">{{yourScore}}</span>

                            </div>
                            <div class="d-flex align-items-center computer">
                                <span class="text"> computer</span><span class="score font-weight-bold">{{computerScore}}</span>

                            </div>

                        </div> -->

                    </div>
                </div> 

            </div>
            <div class="row">
                <div class="col-nd-6 nx-auto">
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <div class="options">
                            <div class="r" :class="yourWeapon === 'Rock' ? 'checked' : ''" @click="chooseWeapon('Rock')">Rock</div>
                            <div class="p" :class="yourWeapon === 'Paper' ? 'checked' : ''" @click="chooseWeapon('Paper')">Paper</div>
                            <div class="s" :class="yourWeapon === 'Scissor' ? 'checked' : ''" @click="chooseWeapon('Scissor')">Scissor</div>

                        </div>
                        <div class="game">
                            <div class="chooseWeapon" v-if="!yourWeapon"> choose your weapon</div>
                            <div class="fight" v-if="yourWeapon" @click="fight">fight</div>
                            <div class="fighting" v-if="fighting">
                                <div class="spinner-border text-danger" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>

                            </div>
                            <div class="result" :class="result" v-if="result">{{result}}</div>

                        </div>
                        <!-- <div class="it">
                            <div v-show="computerWeapon === 'Rock'" class="r"></div>
                            <div v-show="computerWeapon === 'Paper'" class="p"></div>
                            <div v-show="computerWeapon === 'Scissor'" class="s"></div>
                        </div> -->

                    </div>
                    <!-- <div class="d-flex flex-row justify-content-center text-center controls shadow rounded">
                        <div class="flex-fill">
                            <button type="button" class="btn btn-info">
                                Rounds <span class="badge badge-light">{{totalRounds}}</span>

                            </button>

                        </div>
                        <div class="flex-fill">
                            <button @click="reset" class="btn btn-warning">Reset</button>

                        </div>

                    </div> -->

                </div>

            </div>

        </div>
        
    </div>
</template>


<script>
export default {
    name: 'UserSelection',
    // data() {
    //     return{
    //         options: ['Rock', 'Paper', 'Scissor'],
    //         yourWeapon: '',
    //         computerWeapon: '',
    //         result: '',
    //         yourScore: 0,
    //         computerScore: 0,
    //         totalRounds: 0,
    //         fighting: false,

    //     }
    // },
    computed: {
        options(){
            return this.$store.state.options;
        },
        yourWeapon(){
            return this.$store.state.yourWeapon;
        },
        result(){
            return this.$store.state.result;
        },
        fighting(){
            return this.$store.state.fighting;
        },
        computerWeapon(){
            return this.$store.state.computerWeapon;
        },
    },
    methods: {
        chooseWeapon(weapon){
            this.$store.commit('chooseWeapon', weapon);
            // this.yourWeapon = weapon;
            // this.result = '';
            // this.computerWeapon = '';

        },
        fight(){
            this.$store.commit('fight');
            // this.computerWeapon = this.options[Math.floor(Math.random() * this.options.length)];
            // if(this.yourWeapon === this.computerWeapon){
            //     this._draw();
            // }
            // if(this.computerWeapon === 'Rock'){
            //     if(this.yourWeapon === 'Paper'){
            //         this._win();
            //     }
            //     if(this.yourWeapon === 'Scissor'){
            //         this._lost();
            //     }
            // }
            // if(this.computerWeapon === 'Paper'){
            //     if(this.yourWeapon === 'Rock'){
            //         this._lost();
            //     }
            //     if(this.yourWeapon === 'Scissor'){
            //         this._win();
            //     }
            // }
            // if(this.computerWeapon === 'Scissor'){
            //     if(this.yourWeapon === 'Rock'){
            //         this._win();
            //     }
            //     if(this.yourWeapon === 'Paper'){
            //         this._lost();
            //     }
            // }
               
        },
        // _draw(){
        //     this.$store.commit('_draw');
        //     // this.result = 'draw',
        //     // this.totalRounds++;
        // },
        // _win(){
        //      this.$store.commit('_win');
        //     // this.result = 'won';
        //     // this.yourScore++;
        //     // this.totalRounds++;
        // },
        // _lost(){
        //     this.$store.commit('_lost')
        //     // this.result = 'lost';
        //     // this.computerScore++;
        //     // this.totalRounds++;
        // }, 
        // reset(){
        //     this.computerScore = 0;
        //     this.yourScore = 0;
        //     this.result = '';
        //     this.yourWeapon = '';
        //     this.computerWeapon = '';
        //     this.totalRounds = 0;
        // }
    }
}
</script>



