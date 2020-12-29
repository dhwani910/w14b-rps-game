<template>
    <div>
        <div class="it">
            <div v-show="computerWeapon === 'Rock'" class="r"></div>
            <div v-show="computerWeapon === 'Paper'" class="p"></div>
            <div v-show="computerWeapon === 'Scissor'" class="s"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'ComputerSelection',
    computed: {
        options(){
            return this.$store.state.options;
        },
        computerWeapon(){
            return this.$store.state.computerWeapon;
        },
    },
}
</script>



<style scoped>

</style>