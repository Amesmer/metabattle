<template>
  <div class="container">
    <!-- navigation -->
      <navigation></navigation>
       <!-- banner -->
       <div></div>
       <!-- content  game mode -->
      <div class="content">
        <div class="gamemode">
           <div class="title"><span>根据游戏模式划分的配置</span><i>快速浏览</i></div>
          <ul>
            <li @click="goListPage('pvp')">
              <div class="left">
                <img src="@/assets/images/Pvp_fp_icon.png" alt=""><span>征服模式(PVP)</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li> 
             <li @click="goListPage('fractal')">
              <div class="left">
                <img src="@/assets/images/Fractal_fp_icon.png" alt=""><span>迷雾碎层</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li @click="goListPage('openWorld')">
              <div class="left">
                <img src="@/assets/images/Pve_fp_all.png" alt=""><span>开放世界</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li @click="goListPage('raid')">
              <div class="left">
                <img src="@/assets/images/Raid_fp_icon.png" alt=""><span>团本</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li @click="goListPage('wvw')">
              <div class="left">
                <img src="@/assets/images/Wvw_fp_icon.png" alt=""><span>世界之战(WVW)</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
          </ul>
        </div>
                <!-- content  profession -->
      <div class=" profession">
          <div class="title"><span>根据职业划分的配置</span><i>快速浏览</i></div>
          <ul>
            <li >
              <div class="left">
                <img src="@/assets/images/Dark-icon-elementalist.png" alt=""><span>元素</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-engineer.png" alt=""><span>工程</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-guardian.png" alt=""><span>守护</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-mesmer.png" alt=""><span>幻术</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-necromancer.png" alt=""><span>死灵</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
                         <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-revenant.png" alt=""><span>游侠</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
                         <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-thief.png" alt=""><span>魂武</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
                         <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-warrior.png" alt=""><span>盗贼</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
                         <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-necromancer.png" alt=""><span>战士</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
          </ul>
      </div>

      </div>


  </div>


</template>

<script>
import navigation from '@/components/navigation.vue'
export default {
  data() {
    return {
     
    }
  },
  components:{
      navigation
  },
  methods: {
    goListPage(type){
      switch(type){
        case 'pvp':
                this.$router.push({
        name: 'conquest',
        path:"/conquest"

      })
          break 
           case 'fractal':
                   this.$router.push({
        name: 'Fractal',
          path:"/Fractal"

      })
          break 
           case 'openWorld':
      //              this.$router.push({
      //   name: 'bdpage',

      // })
          break 
           case 'raid':
                   this.$router.push({
        name: 'Raid',
          path:"/Raid"
  
      })
          break 
           case 'wvw':
                   this.$router.push({
        name: 'WvW',
          path:"/WvW"
     
      })
          break 
      }
    }
  }
}
</script>


<style lang="less" scoped>
/deep/ .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12rem;
  background-color: #1d1d1d;
  .nav {
    background-color: rgb(49, 57, 77);
  }
}
.darkiconitem {
  width: 80%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
}
.darkiconitem img {
  width: .2rem;
  height: .2rem;
  // margin-right: 0.15rem;
}
.darkiconitem span{
  width: .6rem;
  text-align: center
}
.el-menu-demo {
  .mytitle {
    position: relative;
  }
  .mytitle:hover {
    color: rgba(249, 169, 22, 1);
  }
  .mytitle::after {
    position: absolute;
    border: inset 5px;
    content: '';
    display: block;
    height: 0;
    width: 0;
    border-color: rgba(249, 169, 22, 1) transparent transparent transparent;
    border-top-style: solid;
    margin-top: -2.5px;
    top: 0.1rem;
    right: -0.15rem;
  }
}
.el-menu--horizontal .el-menu .el-menu-item {
  width: 100% !important;
  text-align: center
}

.content{
  min-width: 11.15rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: .16rem;
  color: #fff;
  background-color: #111;
  padding:  0 .1rem;
  .title{
    padding: .05rem .1rem;
    font-size: .175rem;
    background-color: #1d1d1d;
    font-weight: 700;
    display: flex;
    height: .36rem;
    line-height: .36rem;
    margin: .1rem 0;
    justify-content: space-between;
  }
  li{
    box-sizing: border-box;

    background-size: contain;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .54rem;
    padding: .1rem .1rem .1rem  .15rem

  }
  li:hover{
    background-color: rgba(255,255,255,.1)!important;
    color: #f9a916;
  }
  li:nth-child(1){
        background: url("../assets/images/Pvp_fp.png") no-repeat ;
  }
    li:nth-child(2){
        background: url("../assets/images/Fractal_fp.png") no-repeat ;
  }
    li:nth-child(3){
        background: url("../assets/images/Raid_fp.png") no-repeat ;
  }
    li:nth-child(4){
        background: url("../assets/images/Openworld_fp.png") no-repeat ;
  }
    li:nth-child(5){
        background: url("../assets/images/Wvw_fp.png") no-repeat ;
  }
    .left{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left span:hover{
    color: #f9a916;
  }
  li img{
    width: .32rem;
    height: .32rem;
    margin-right: .2rem;
  }
  li a{
    color: #f9a916;
  }
   li a:hover{
    color: #fff;
  }

}

.profession{
      li:nth-child(1){
        background: url("../assets/images/Ele_fp.png") no-repeat ;
  }
     li:nth-child(2){
        background: url("../assets/images/Eng_fp.png") no-repeat ;
  }
     li:nth-child(3){
        background: url("../assets/images/Guard_fp.png") no-repeat ;
  }
     li:nth-child(4){
        background: url("../assets/images/Mes_fp.png") no-repeat ;
  }
     li:nth-child(5){
        background: url("../assets/images/Nec_fp.png") no-repeat ;
  }
     li:nth-child(6){
        background: url("../assets/images/Rang_fp.png") no-repeat ;
  }
     li:nth-child(7){
        background: url("../assets/images/Rev_fp.png") no-repeat ;
  }
     li:nth-child(8){
        background: url("../assets/images/Thief_fp.png") no-repeat ;
  }
     li:nth-child(9){
        background: url("../assets/images/War_fp.png") no-repeat ;
  }

}

</style>
