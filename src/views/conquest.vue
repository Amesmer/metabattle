<template>
<div class="container">
    <navigation></navigation>
           <!-- title -->

    <div class="content">
               <h2 class="pagetitle">Conquest</h2>
               <p class="pagesubtitle">List of Conquest PvP builds ranging from good to meta.</p>
                <div class="behindpagetitle">
                    <div>
                          <span  class="iconfont righticon">&#xe6b8;</span>
                     Section revised on: <i>June 18, 2020</i>
                    </div>
                  
                    </div>
              <div class="gamemode">
           <div class="title"><span>Meta</span><i></i></div>
          <ul>
            <li>
              <div class="left">
                <img src="@/assets/images/Dark-icon-revenant.png" alt=""><span>Condition Mallyx</span>
              </div>
              <!-- 职业技能 -->
                  <ul class="skills">
                      <li><img src="@/assets/skills/32px-Legendary_Demon_Stance.png" alt=""></li>
                      <li><img src="@/assets/skills/32px-Legendary_Dragon_Stance.png" alt=""></li>
                  </ul>
                    <span  class="iconfont ">&#xe937;</span>
                    <div class="equment">
                      <div class="weaps">
                                <div>
                                    <i>D/P</i>
                                    <img src="@/assets/sigil/32px-Superior_Sigil_of_Exploitation.png" alt="">
                                    <img src="@/assets/images/16px-I.png" alt="">
                                    <img src="@/assets/sigil/32px-Superior_Sigil_of_Compounding.png" alt="">
                                </div>
                                      <div>
                                    <i>S/P</i>
                                    <img src="@/assets/sigil/32px-Superior_Sigil_of_Exploitation.png" alt="">
                                    <img src="@/assets/images/16px-II.png" alt="">
                                    <img src="@/assets/sigil/32px-Superior_Sigil_of_Compounding.png" alt="">
                                </div>
                                
                    </div>
                    <div class="ra">
                       <img src="@/assets/superiorRune/32px-Superior_Rune_of_Resistance.png" alt="">
                       <img src="@/assets/amulet/32px-Carrion_Amulet.png" alt="">
                    </div>
                    </div>
         
                  <div class="community">
                        <div class="rate">5</div>
                         <span  class="iconfont "> &#xe662;</span>
                       
                  </div>
            </li> 
             <li>
              <div class="left">
                <img src="@/assets/images/Fractal_fp_icon.png" alt=""><span>迷雾碎层</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Pve_fp_all.png" alt=""><span>开放世界</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Raid_fp_icon.png" alt=""><span>团本</span>
              </div>
              <div>
                <a href="">卓越</a>-
                <a href="">优秀</a>-
                <a href="">良好</a>
              </div>
            </li>
             <li>
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
    </div>
</div>
    
    
</template>
<script>
import navigation from '@/components/navigation.vue'
export default {
  data() {
    return {}
  },
  components: {
    navigation
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
  width: 0.2rem;
  height: 0.2rem;
  // margin-right: 0.15rem;
}
.darkiconitem span {
  width: 0.6rem;
  text-align: center;
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
  text-align: center;
}

.content {
  min-width: 11.15rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.16rem;
  color: #fff;
  background-color: #111;
  padding: 0 0.1rem;
  .title {
    padding: 0.05rem 0.1rem;
    font-size: .175rem;
    background-color: #1d1d1d;
    font-weight: 700;
    display: flex;
    height: 0.36rem;
    line-height: 0.36rem;
    margin: 0.1rem 0;
    justify-content: space-between;
  }
  li {
    box-sizing: border-box;

    background-size: contain;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.33rem;
    // padding: 0.1rem 0.1rem 0.1rem 0.15rem;
  }
  li:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
    color: #f9a916;
  }

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left span:hover {
    color: #f9a916;
  }
  li img {
    width: 0.32rem;
    height: 0.32rem;
    margin-right: 0.2rem;
  }
  li a {
    color: #f9a916;
  }
  li a:hover {
    color: #fff;
  }
}




.pagetitle{
    font-size: .44rem;
    color: #fff;
}
.pagesubtitle{
    font-size: .14rem;
    color: #ccc;
}
.righticon{
    color: #458e46;
}
.behindpagetitle{
    margin-top: 3.5px;
    // width: 2.57rem;
    font-size: .14rem;
     
}
.behindpagetitle  div{
    width: fit-content;
            padding: 5px 10px;
       border: 2px solid #458e46;
}
.skills{
    width: 1.9rem;
        display: flex;
    justify-content: center;
    align-items: center; 
    li{
        padding: 0;
        width: .32rem;
        height: .32rem;

    }
    img{
            margin: 0;
        }
}
.equment{
     display: flex;
        align-items: center;
}
.weaps{
    width: 3.68rem;
   display: flex;
   justify-content: space-around;
    div{
        display: flex;
        align-items: center;
    }
    i{
        font-size: .12rem;
        color: #ccc;
        margin-right: .1rem;
    }
    img{
        width: .32rem;
        height: .32rem;
        margin-right: 0!important;
    }
    div img:nth-child(3){
        width: .16rem;
        height: .16rem;
    }
}

.ra img{
    margin-right:0!important;
    width: .32rem;
    height: .32rem;
}
.community{
    display: flex
    
}

</style>
