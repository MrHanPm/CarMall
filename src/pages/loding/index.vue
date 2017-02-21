<style lang="less" scoped>
	
</style>
<template>
	<div class="jump-cover">
    <div class="loading visible">
        <span class="loading-ring"> </span>
    </div>
    <v-toast :show="toastShow" :txt="toastTxt"></v-toast>
    <v-alert :show="alertShow" :txt="alertTxt"></v-alert>
  </div>
</template>
<script>
  import XHR from '../../api/service'
  export default {
    data() {
      return {
        toastShow: false,
        toastTxt:'',
        alertShow: false,
        alertTxt:'',
      }
    },
    mounted () {
      let self = this
      XHR.getLogin()
      .then(function (res) {
        // self.showToast('')
        // console.log(res)
        if (res.data.status === 1) {
          self.$router.push('home')
        } else {
          self.showAlert(res.data.errInfo)
          self.$router.push('notice')
        }
      })
      .catch(function (err) {
        // self.showAlert('')
        self.$router.push('notice')
      })
    },
    methods:{
        showToast(txt) {
          let self = this
          self.toastShow = true
          self.toastTxt = txt
          setTimeout(function() {
            self.toastShow = false
            self.toastTxt = ''
          },3000)
        },
        showAlert(txt) {
          let self = this
          self.alertShow = true
          self.alertTxt = txt
          setTimeout(function() {
            self.alertShow = false
            self.alertTxt = ''
          },3000)
        },
    }
  }
</script>
