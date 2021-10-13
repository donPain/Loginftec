<template>
    <div>
    <b-img :src="require('../assets/logo.png')"></b-img>
        <b-img src=""></b-img>
        <b-container>
            <b-row align-h="center">
                <b-col>
                    <b-jumbotron header="login was successful" lead="welcome" v-if="val"></b-jumbotron>
                    <b-jumbotron header="Login successful" lead="welcome" v-else></b-jumbotron>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Index.vue",
    props:['val']
}
</script>

<style scoped>

</style>