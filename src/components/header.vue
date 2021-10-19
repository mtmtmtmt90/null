<template>
  <div class="container">
    <header>
      <div class="help">
        <div style="border-bottom:1px solid yellow;height:20px;width:300px;position:absolute;left:0px;">
          <img src="../assets/img/delivery-truck-svgrepo-com.svg" class="truck">
          <img src="../assets/img/gruz.svg" class="box">
        </div>
        <ul>
          <li>
            <img src="../assets/img/globus.svg" class="icon">
            <a href="#" class="lang" @click="choseLang()"> Türkmen </a>
            <div class="animated-border"></div>
            <div id="lang-bar">
              <div>Türkmen</div>
              <div>Russki</div>
              <div>English</div>
            </div>
          </li>
          <li>
            <img src="../assets/img/location.svg" class="icon">
            <a href="#" class="location"> Ýerleşýän ýeri</a>
            <div class="animated-border"></div>
          </li>
          <li>
            <img src="../assets/img/service.png" class="icon">
            <a href="#" class="feedback"> Habarlaşmak</a>
            <div class="animated-border"></div>
          </li>
          <li>
            <a href="#" class="sign-in"> Ulgama gir</a>
          </li>
        </ul>
      </div>
      <div class="navigation">
        <div class="name">
          SPH
        </div>
        <div class="nav">
          <ul>
            <li>
              <span>Baş sahypa</span>
            </li>
            <li><span>Ugratmak</span></li>
            <li><span>Kabul etmek</span></li>
            <li><span>Ofis</span></li>
            <li><span>Biznes</span></li>
            <li><span>Maglumat</span></li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      langBar:false
    }
  },
  methods:{
    choseLang(){
      let elem = document.getElementById('lang-bar')
      console.log(elem)
      elem.setAttribute('class', !this.langBar ? 'active' : '')
      this.langBar = !this.langBar
    },
    openSection(e){
      let elem = e.path[0].lastElementChild
      console.log(elem)
    },
    closeSection(e){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="../assets/less/header.less">

</style>
