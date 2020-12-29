<template>
    <div id="score">
        <div class="d-flex scores flex-row">
                            <div class="d-flex align-items-center you mr-3 justify-content-between">
                                <span class="text">you</span><span class="score font-weight-bold">{{yourScore}}</span>

                            </div>
                            <div class="d-flex align-items-center computer">
                                <span class="text"> computer</span><span class="score font-weight-bold">{{computerScore}}</span>

                            </div>

         </div>
         <div class="d-flex flex-row justify-content-center text-center controls shadow rounded">
                        <div class="flex-fill">
                            <button type="button" class="btn btn-info">
                                Rounds <span class="badge badge-light">{{totalRounds}}</span>

                            </button>

                        </div>
                        <div class="flex-fill">
                            <button @click="reset" class="btn btn-warning">Reset</button>

                        </div>

        </div>
        
    </div>
</template>


<script>
export default {
    name: 'ScoreBoard',
    computed: {
        yourScore(){
            return this.$store.state.yourScore;
        },
        computerScore(){
            return this.$store.state.computerScore;
        },
        totalRounds(){
            return this.$store.state.totalRounds;
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
        reset(){
            this.$store.commit('reset')
        }
    }
}
</script>



<style scoped>

</style>