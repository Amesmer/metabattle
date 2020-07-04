<template>
  <div class="container">
   <!-- 顶部navigation -->
   <div class="nav">
            <el-menu   :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="tabSelect"
          background-color="#31394D"
          text-color="#cdcac7"
          active-text-color="#ffd04b">
          <el-submenu  index="1">
            <template slot="title"><span class="mytitle">职业</span> </template>
            <el-menu-item index="1-1">
              <div class="darkiconitem"><img src="@/assets/images/Dark-icon-elementalist.png" alt=""><span>元素</span></div>
            </el-menu-item>
            <el-menu-item index="1-2"> <div class="darkiconitem"><img src="@/assets/images/Dark-icon-engineer.png" alt=""><span>工程</span></div></el-menu-item>
            <el-menu-item index="1-3"> <div class="darkiconitem"><img src="@/assets/images/Dark-icon-guardian.png" alt=""><span>魂武</span></div></el-menu-item>
          <el-menu-item index="1-4">
              <div class="darkiconitem"><img src="@/assets/images/Dark-icon-mesmer.png" alt=""><span>幻术</span></div>
            </el-menu-item>
            <el-menu-item index="1-5">
              <div class="darkiconitem"><img src="@/assets/images/Dark-icon-necromancer.png" alt=""><span>死灵</span></div>
            </el-menu-item>
            <el-menu-item index="1-6">
              <div class="darkiconitem"><img src="@/assets/images/Dark-icon-ranger.png" alt=""><span>游侠</span></div>
            </el-menu-item>
            <el-menu-item index="1-7">
              <div class="darkiconitem"><img src="@/assets/images/Dark-icon-revenant.png" alt=""><span>魂武</span></div>
            </el-menu-item>
            <el-menu-item index="1-8">
              <div class="darkiconitem"><img src="@/assets/images/Dark-icon-thief.png" alt=""><span>盗贼</span></div>
            </el-menu-item>
            <el-menu-item index="1-9">
              <div class="darkiconitem"><img src="@/assets/images/Dark-icon-warrior.png" alt=""><span>战士</span></div>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><span class="mytitle">游戏模式</span></template>
            <el-menu-item index="2-1">
              <div class="darkiconitem"><img src="@/assets/images/Pvp_fp_icon.png" alt=""><span>征服模式(pvp)</span></div>
              </el-menu-item>
                          <el-menu-item index="2-2">
              <div class="darkiconitem"><img src="@/assets/images/Fractal_fp_icon.png" alt=""><span>迷雾碎层</span></div>
              </el-menu-item>
                          <el-menu-item index="2-3">
              <div class="darkiconitem"><img src="@/assets/images/Pve_fp_all.png" alt=""><span>开放世界</span></div>
              </el-menu-item>
                          <el-menu-item index="2-4">
              <div class="darkiconitem"><img src="@/assets/images/Raid_fp_icon.png" alt=""><span>Raid</span></div>
              </el-menu-item>
                          <el-menu-item index="2-5">
              <div class="darkiconitem"><img src="@/assets/images/Wvw_fp_icon.png" alt=""><span>WvW</span></div>
             </el-menu-item>
          </el-submenu>
          <el-submenu  index="3" >
            <template slot="title"><span class="mytitle">导航</span></template>
            <el-menu-item index="3-1">achievement</el-menu-item>
            <el-menu-item index="3-2">pvp</el-menu-item>
            <el-menu-item index="3-3">wvw</el-menu-item>
            <el-menu-item index="3-3">all</el-menu-item>
          </el-submenu>
          <el-submenu  index="4">
            <template slot="title"><span class="mytitle">others</span></template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>            
        </el-menu>
        <div class="line"></div>
   </div>
       <!-- banner -->
       <div></div>
       <!-- content  game mode -->
      <div class="content">
        <div class="gamemode">
           <div class="title"><span>Builds By Game Mode </span><i>Quick Browse</i></div>
          <ul>
            <li>
              <div class="left">
                <img src="@/assets/images/Pvp_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Fractal_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Pve_fp_all.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Raid_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Wvw_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
          </ul>
        </div>
                <!-- content  profession -->
      <div class=" profession">
          <div class="title"><span>Builds By Profession </span><i>Quick Browse</i></div>
          <ul>
            <li>
              <div class="left">
                <img src="@/assets/images/Pvp_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Fractal_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Pve_fp_all.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Raid_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
             <li>
              <div class="left">
                <img src="@/assets/images/Wvw_fp_icon.png" alt=""><span>conquest(pvp)</span>
              </div>
              <div>
                <a href="">meta</a>-
                <a href="">great</a>-
                <a href="">good</a>
              </div>
            </li>
          </ul>
      </div>

      </div>

 
  </div>


</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    tabSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.el-menu--horizontal .el-menu--popup {
  min-width: 1.3rem;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  margin-right: 0.2rem;
}
</style>

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
    font-size: 1.25em;
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
    height: 0.54rem;
    padding: 0.1rem 0.1rem 0.1rem 0.15rem;
  }
  li:nth-child(1) {
    background: url('../assets/images/Pvp_fp.png') no-repeat;
  }
  li:nth-child(2) {
    background: url('../assets/images/Fractal_fp.png') no-repeat;
  }
  li:nth-child(3) {
    background: url('../assets/images/Raid_fp.png') no-repeat;
  }
  li:nth-child(4) {
    background: url('../assets/images/Openworld_fp.png') no-repeat;
  }
  li:nth-child(5) {
    background: url('../assets/images/Wvw_fp.png') no-repeat;
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

// .profession{
//   top: 5rem;
// }
</style>


