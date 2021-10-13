<template>
    <div>
    <b-img :src="require('../assets/logo.png')" style = width:400px ></b-img>
        <br>
        <b-container>
            <b-row>
                <b-col offset="3" cols="6">
                    <b-input-group size="lg">
                        <b-input-group-text>Usuário</b-input-group-text>
                        <b-form-input type="text" v-model="username"></b-form-input>
                    </b-input-group>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col offset="3" cols="6">
                    <b-input-group size="lg">
                        <b-input-group-text>Senha</b-input-group-text>
                        <b-form-input type="password" v-model="password"></b-form-input>
                    </b-input-group>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col offset="3" cols="6">
                    <b-button variant="success" @click="login">
                        Click para registrar/logar
                    </b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'
import router from "../router"

export default {
    name: "Login.vue",
    data:function (){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        login:function(){
            axios.post("http://localhost:8080/login",{
                username:this.username,
                password:this.password
            }).then(function (res){
                router.push({
                    name:"index",
                    params:{
                        // @ts-ignore
                        val:res.data.code === 1
                    }
                })
            })
        }
    }
}
</script>

<style scoped>

</style>