export default {
    methods: {
        jump (to) {
          if (this.$router) {
            this.$router.push(to)
          }
        },


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
