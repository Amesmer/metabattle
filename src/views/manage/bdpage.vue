<template>
<div class="container">
    <navigation></navigation>
           <!-- title -->
    <div class="content">
               <h2 class="pagetitle">Herald - Condition Mallyx</h2>
               <p class="pagesubtitle">List of Conquest PvP builds ranging from good to meta.</p>
                <div class="behindpagetitle">
                    <div>
                          <span  class="iconfont righticon">&#xe6b8;</span>
                     Section revised on: <i>June 18, 2020</i>
                    </div>
                  
                    </div>
              <div class="gamemode">
           <div class="title"><span>Meta</span></div>
     

        </div>
    </div>
    
<iframe id="my-iframe" width="1115" height="3400"
frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" 
 src="./bds/Herald - Condition Mallyx.html"></iframe>
 <!-- <div data-armory-embed="skills" data-armory-ids="5507,5508,5510,5515"></div> -->

</div>
    
    
</template>

<script>
import navigation from '@/components/navigation.vue'

// import '@/plugins/Embed_.js'
export default {
  data() {
    return {
      tableData: [
        // 魂武
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Condition Mallyx',
          skill_1: '32px-Legendary_Demon_Stance',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Dragon_Stance',
          skill_2_name: '',
          weapon_1: 'M/A',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Sw/Sh',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Resistance',
          runename: '',
          amulet: '32px-Carrion_Amulet',
          amuletname: '',
          rate: '5',
          comment: ''
        },//工程
         {
          professionicon: 'Dark-icon-holosmith',
          bdname: 'Explosive Sword',
          skill_1: '32px-Elixir_H',
          skill_1_name: '',
          skill_2: '32px-Elixir_S',
          skill_2_name: '',
          skill_3: '32px-Elixir_U',
          skill_3_name: '',
          skill_4: '32px-Grenade_Kit',
          skill_4_name: '',
          skill_5: '32px-Elixir_X',
          skill_5_name: '',
          weapon_1: 'Sw/Sh',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Intelligence',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',

          rune: '32px-Superior_Rune_of_the_Revenant',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '5',
          comment: ''
        }, //死灵
        {
          professionicon: 'Dark-icon-necromancer',
          bdname: 'Vanilla Condi Necro',
          skill_1: '32px-Consume_Conditions',
          skill_1_name: '',
          skill_2: '32px-Skill',
          skill_2_name: '',
           skill_3: '32px-Corrupt_Boon',
          skill_3_name: '',
          skill_4: '32px-Spectral_Walk',
          skill_4_name: '',
          skill_5: '32px-Lich_Form',
          skill_5_name: '',
          weapon_1: 'Sc/Wh',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Staff',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Escape',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Traveler',
          runename: '',
          amulet: '32px-Carrion_Amulet',
          amuletname: '',
          rate: '4.9',
          comment: ''
        },//元素
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'D/F Auramancer',
          skill_1: '32px-_Wash_the_Pain_Away_',
          skill_1_name: '',
          skill_2: '32px-Mist_Form',
          skill_2_name: '',
           skill_3: '32px-Lightning_Flash',
          skill_3_name: '',
          skill_4: '32px-Glyph_of_Renewal',
          skill_4_name: '',
          skill_5: '32px-Tornado',  
          skill_5_name: '',
          weapon_1: 'D/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',

          rune: '32px-Superior_Rune_of_Resistance',
          runename: '',
          amulet: "32px-Mender's_Amulet",
          amuletname: '',
          rate: '4.5',
          comment: ''
        },//盗贼
        {
          professionicon: 'Dark-icon-thief',
          bdname: 'Core P/D Condition',
          skill_1: '32px-Hide_in_Shadows',
          skill_1_name: '',
          skill_2: '32px-Skill',
          skill_2_name: '',
           skill_3: '32px-Shadowstep',
          skill_3_name: '',
          skill_4: '32px-Shadow_Refuge',
          skill_4_name: '',
          skill_5: '32px-Basilisk_Venom',
          skill_5_name: '',
          weapon_1: 'P/D',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Venom',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Agony',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'SB',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Carrion_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        },
      ]
    }
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
  height: 38rem;
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
    font-size: 0.175rem;
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
    // justify-content: space-between;
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
    font-size: 0.14rem;
    justify-content: space-between;
    align-items: center;
    span {
      width: 2.64rem;
    }
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

.pagetitle {
  font-size: 0.44rem;
  color: #fff;
}
.pagesubtitle {
  font-size: 0.14rem;
  color: #ccc;
}
.righticon {
  color: #458e46;
}
.behindpagetitle {
  margin-top: 3.5px;
  // width: 2.57rem;
  font-size: 0.14rem;
}
.behindpagetitle div {
  width: fit-content;
  padding: 5px 10px;
  border: 2px solid #458e46;
}
.skills {
  width: 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 0;
    width: 0.32rem;
    height: 0.32rem;
  }
  img {
    margin: 0;
  }
}
.equment {
  display: flex;
  align-items: center;
}
.weaps {
  width: 3.68rem;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
  }
  i {
    width: .35rem;
    text-align: center;
    font-size: 0.12rem;
    color: #ccc;
    margin-right: 0.1rem;
  }
  img {
    width: 0.32rem;
    height: 0.32rem;
    margin-right: 0 !important;
  }
  div img:nth-child(3) {
    width: 0.16rem;
    height: 0.16rem;
  }
}

.ra {
  margin-top: 0.01rem;
}
.ra img {
  margin-right: 0 !important;
  width: 0.32rem;
  height: 0.32rem;
}
.community {
  margin-left: 0.2rem;
  display: flex;
  width: 1.15rem;
  align-items: center;
  justify-content: space-around;
  .rate {
    box-sizing: border-box;
    width: 0.32rem;
    height: 0.32rem;
    background: #223e39;
    border: 2px solid #345e57;
    text-align: center;
    line-height: 0.32rem;
    font-size: 0.14rem;
  }
}

#my-iframe{
position: absolute;
top: 300px;
left: 50%;
transform: translateX(-50%);
// z-index: 9999;
background-color: #111;
}

</style>
