<template>
    <div id="game">
        <logout-button></logout-button>
        <user-selection></user-selection>
        <computer-selection></computer-selection>
        <score-board></score-board>
        

    </div>
</template>


<script>
import LogoutButton from '@/components/LogoutButton.vue';
import UserSelection from '@/components/UserSelection.vue';
import ComputerSelection from '@/components/ComputerSelection.vue';
import ScoreBoard from '@/components/ScoreBoard.vue';
export default {
    name: 'Game',
    components: {
        LogoutButton,
        ScoreBoard,
        UserSelection,
        ComputerSelection,
    },
    computed:  {
        token(){
            return this.$store.state.token;
        },
        
    },
    created(){
        if(!this.token){
            this.$router.push({name: 'login'});

        }
    }
}
</script>

<style lang="scss">
.options div{
    cursor: pointer;
    display: block;
    height: 120px;
    margin: 20px 0px;
    transition: transform 0.2s;
    transform: scale(1);
    width: 120px;

}
.options div:hover {
    background-color: aquamarine;
}
.options div.r {
    background-image: url("/assets/img/rock.jpg");
}
.options div.p {
    background-image: url("/assets/img/paper.jpg");
}
.options div.s {
    background-image: url("/assets/img/scissor.jpg");
}
.options div.checked{
    background-color: hotpink;
    transform: scale(1.2);
}
#score{
    margin-left: 290px;
    margin-top: 100px;
}
.it{
    height: 120px;
    width: 120px;
    margin-top: -228px;
}
.it div{
    height: 120px;
    margin-left: 400px;
    width: 120px;
}
.it div.r{
    background-image: url("/assets/img/rock.jpg");

}
.it div.p{
    background-image: url("/assets/img/paper.jpg");

}
.it div.s{
    background-image: url("/assets/img/scissor.jpg");

}
.it div.checked{
    background-color: hotpink;
} 
.game{
    height: 120px;
    overflow: hidden;
    position: relative;
    width: 120px;
    z-index: 10;
}
.game .chooseWeapon, .game .fight, .game .fighting, .game .result{
    align-items: center;
    background: coral;
    color: black;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 2;

}
.game .fight{
    background: rgb(236, 236, 186);
    cursor: pointer;
}
.game .result.won{
    background: green;
}
.game .result.lost{
    background: red;
}
.game .result.draw{
    background: yellow;
}
.controls{
    background: rgb(241, 163, 241);
    margin: 20px;
}
.controls div{
    width: 120px;
    padding: 20px;
}
.you .score, .computer .score{
    font-size: 36px;
}

</style>

