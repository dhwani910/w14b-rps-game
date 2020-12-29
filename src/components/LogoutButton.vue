<template>
    <button type="button" class="button is-danger" @click="logout">Sign Out</button>
</template>

<script>
export default {
    name: 'LogoutButton',
    methods: {
        logout(){
            this.$store.commit('logout');
            this.$router.push({name: 'login'})
        },
    }
}
</script>