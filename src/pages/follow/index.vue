<style lang="less" scoped>
    .login {
        padding: 50px;
        text-align: center;
        .line {
            padding: 5px;
            input {
                padding: 0 10px;
                line-height: 28px;
            }
        }
        button {
            padding: 0 20px;
            margin-top: 20px;
            line-height: 28px;
        }
    }
</style>
<template>
    <div class="app">
        <v-header :follow="true"></v-header>
        <v-plist></v-plist>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    
    export default {
        data() {
            return {
                btn: false, //true 已经提交过， false没有提交过
                form: {
                    id: '',
                    name: ''
                }
            }
        },
        // methods: {
        //     ...mapActions([USER_SIGNIN]),
        //     submit() {
        //         this.btn = true
        //         if(!this.form.id || !this.form.name) return
        //         this.USER_SIGNIN(this.form)
        //         this.$router.replace({ path: '/home' })
        //     }
        // }
    }
</script>
