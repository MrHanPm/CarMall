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
      // localStorage.setItem('vipLodData','{"ishavingpwd":"1","iscanrob":"1","usercategory":"1","dealersalesallbrandsname":"一汽红塔,雷诺,东风小霸王,福田奥铃","salesmansalesbrandsname":"一汽红塔,雷诺,东风小霸王","sessionid":"45742_e76f187e3775d7b5e1194988d6ae4e703cf851fb","realname":"韩国料理","userid":"45742","dealerid":47911,"username":"18039221559","tel":"18039221559","dealername":"遵义瑞东汽车商贸有限公司","permission":[{"key":"crm","value":"1","remark":""},{"key":"find_share","value":"1","remark":""},{"key":"recharge","value":"0","remark":""},{"key":"cluespage","value":"0","remark":""}],"salesmansalesshopname":"遵义瑞东汽车商贸有限公司,遵义瑞东汽车商贸有限公司,遵义瑞东汽车商贸有限公司","alermsg":""}')
      let self = this
      XHR.getLogin()
      .then(function (res) {
        // self.showToast('')
        // console.log(res)
        if (res.data.status === 1) {
          self.$router.push('home')
        } else {
          XHR.isErr(res)
          // self.$router.push('notice')
          window.location.href = 'https://saasm.kcimg.cn/carshop/hot.html'
        }
      })
      .catch(function (err) {
        // self.showAlert('')
        // self.$router.push('notice')
        window.location.href = 'https://saasm.kcimg.cn/carshop/hot.html'
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
