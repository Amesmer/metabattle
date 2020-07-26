<template>
<div class="container">
    <navigation></navigation>
           <!-- title -->

    <div class="content">
               <h2 class="pagetitle">Raid</h2>
               <p class="pagesubtitle">List of Raid builds ranging from good to meta/recommended.</p>
                <div class="behindpagetitle">
                    <div>
                          <span  class="iconfont righticon">&#xe6b8;</span>
                     Section revised on: <i>June 9, 2020</i>
                    </div>
                  
                    </div>
              <div class="gamemode">
           <div class="title"><span>Meta</span></div>
          <ul>
            <!-- meta  -->
            <li v-for="(item,i) in tableData" :key="i" @click="gobdpage(item.bdname,i)">
              <div class="left">
                <img :src="require(`@/assets/profession/${item.professionicon}.png`)" alt=''><span>{{item.bdname}}</span>
              </div>
              <!-- 职业技能 -->
                  <ul class="skills">
                      <li v-if="!!item.skill_1" >
                        <a href="#javascript" :title="item.skill_1_name"><img :src="require(`@/assets/skills/${item.skill_1}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_2">
                        <a href="#javascript" :title="item.skill_2_name"><img :src="require(`@/assets/skills/${item.skill_2}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_3">
                        <a href="#javascript" :title="item.skill_3_name"><img :src="require(`@/assets/skills/${item.skill_3}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_4">
                        <a href="#javascript" :title="item.skill_4_name"><img :src="require(`@/assets/skills/${item.skill_4}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_5" >
                        <a href="#javascript" :title="item.skill_5_name"><img :src="require(`@/assets/skills/${item.skill_5}.png`)" alt=""></a></li>
                  </ul>
                    <span  class="iconfont ">&#xe937;</span>
                 <div class="equment">
                      <div class="traits">
                      <span>{{item.traits_1}}</span>
                      <span>{{item.traits_2}}</span>
                      <span>{{item.traits_3}}</span>
                      <span v-if="!!item.traits_4">{{item.traits_4}}</span>
                    </div>
                    </div>
         
                  <div class="community">
                        <div class="rate">{{item.rate}}</div>
                         <span  class="iconfont "> &#xe662;</span>
                       
                  </div>
            </li> 

          </ul>

                     <div class="title"><span>Great</span></div>
          <ul>
            <!-- 魂武 -->
            <li v-for="(item,i) in tableData_great" :key="i">
              <div class="left">
                <img :src="require(`@/assets/profession/${item.professionicon}.png`)" alt=''><span>{{item.bdname}}</span>
              </div>
              <!-- 职业技能 -->
                  <ul class="skills">
                      <li v-if="!!item.skill_1" >
                        <a href="#javascript" :title="item.skill_1_name"><img :src="require(`@/assets/skills/${item.skill_1}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_2">
                        <a href="#javascript" :title="item.skill_2_name"><img :src="require(`@/assets/skills/${item.skill_2}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_3">
                        <a href="#javascript" :title="item.skill_3_name"><img :src="require(`@/assets/skills/${item.skill_3}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_4">
                        <a href="#javascript" :title="item.skill_4_name"><img :src="require(`@/assets/skills/${item.skill_4}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_5" >
                        <a href="#javascript" :title="item.skill_5_name"><img :src="require(`@/assets/skills/${item.skill_5}.png`)" alt=""></a></li>
                  </ul>
                    <span  class="iconfont ">&#xe937;</span>
                 <div class="equment">
                      <div class="traits">
                      <span>{{item.traits_1}}</span>
                      <span>{{item.traits_2}}</span>
                      <span>{{item.traits_3}}</span>
                       <span v-if="!!item.traits_4">{{item.traits_4}}</span>
                    </div>
                    </div>
         
                  <div class="community">
                        <div class="rate">{{item.rate}}</div>
                         <span  class="iconfont "> &#xe662;</span>
                       
                  </div>
            </li> 

          </ul>

                     <div class="title"><span>Good</span></div>
          <ul>
            <!-- 魂武 -->
            <li v-for="(item,i) in tableData_good" :key="i">
              <div class="left">
                <img :src="require(`@/assets/profession/${item.professionicon}.png`)" alt=''><span>{{item.bdname}}</span>
              </div>
              <!-- 职业技能 -->
                  <ul class="skills">
                      <li v-if="!!item.skill_1" >
                        <a href="#javascript" :title="item.skill_1_name"><img :src="require(`@/assets/skills/${item.skill_1}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_2">
                        <a href="#javascript" :title="item.skill_2_name"><img :src="require(`@/assets/skills/${item.skill_2}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_3">
                        <a href="#javascript" :title="item.skill_3_name"><img :src="require(`@/assets/skills/${item.skill_3}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_4">
                        <a href="#javascript" :title="item.skill_4_name"><img :src="require(`@/assets/skills/${item.skill_4}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_5" >
                        <a href="#javascript" :title="item.skill_5_name"><img :src="require(`@/assets/skills/${item.skill_5}.png`)" alt=""></a></li>
                  </ul>
                    <span  class="iconfont ">&#xe937;</span>
                   <div class="equment">
                      <div class="traits">
                      <span>{{item.traits_1}}</span>
                      <span>{{item.traits_2}}</span>
                      <span>{{item.traits_3}}</span>
                       <span v-if="!!item.traits_4">{{item.traits_4}}</span>
                    </div>
                    </div>
         
                  <div class="community">
                        <div class="rate">{{item.rate}}</div>
                         <span  class="iconfont "> &#xe662;</span>
                       
                  </div>
            </li> 

          </ul>
                           <div class="title"><span>Test</span></div>
          <ul>
            <!-- 魂武 -->
            <li v-for="(item,i) in tableData_test" :key="i">
              <div class="left">
                <img :src="require(`@/assets/profession/${item.professionicon}.png`)" alt=''><span>{{item.bdname}}</span>
              </div>
              <!-- 职业技能 -->
                  <ul class="skills">
                      <li v-if="!!item.skill_1" >
                        <a href="#javascript" :title="item.skill_1_name"><img :src="require(`@/assets/skills/${item.skill_1}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_2">
                        <a href="#javascript" :title="item.skill_2_name"><img :src="require(`@/assets/skills/${item.skill_2}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_3">
                        <a href="#javascript" :title="item.skill_3_name"><img :src="require(`@/assets/skills/${item.skill_3}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_4">
                        <a href="#javascript" :title="item.skill_4_name"><img :src="require(`@/assets/skills/${item.skill_4}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_5" >
                        <a href="#javascript" :title="item.skill_5_name"><img :src="require(`@/assets/skills/${item.skill_5}.png`)" alt=""></a></li>
                  </ul>
                    <span  class="iconfont ">&#xe937;</span>
                 <div class="equment">
                      <div class="traits">
                      <span>{{item.traits_1}}</span>
                      <span>{{item.traits_2}}</span>
                      <span>{{item.traits_3}}</span>
                       <span v-if="!!item.traits_4">{{item.traits_4}}</span>
                    </div>
                    </div>
         
                  <div class="community">
                        <div class="rate">{{item.rate}}</div>
                         <span  class="iconfont "> &#xe662;</span>
                       
                  </div>
            </li> 

          </ul>
                                     <div class="title"><span>Draft</span></div>
          <ul>
            <!-- 魂武 -->
            <li v-for="(item,i) in tableData_draft" :key="i">
              <div class="left">
                <img :src="require(`@/assets/profession/${item.professionicon}.png`)" alt=''><span>{{item.bdname}}</span>
              </div>
              <!-- 职业技能 -->
                  <ul class="skills">
                      <li v-if="!!item.skill_1" >
                        <a href="#javascript" :title="item.skill_1_name"><img :src="require(`@/assets/skills/${item.skill_1}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_2">
                        <a href="#javascript" :title="item.skill_2_name"><img :src="require(`@/assets/skills/${item.skill_2}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_3">
                        <a href="#javascript" :title="item.skill_3_name"><img :src="require(`@/assets/skills/${item.skill_3}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_4">
                        <a href="#javascript" :title="item.skill_4_name"><img :src="require(`@/assets/skills/${item.skill_4}.png`)" alt=""></a></li>
                         <li v-if="!!item.skill_5" >
                        <a href="#javascript" :title="item.skill_5_name"><img :src="require(`@/assets/skills/${item.skill_5}.png`)" alt=""></a></li>
                  </ul>
                    <span  class="iconfont ">&#xe937;</span>
               <div class="equment">
                      <div class="traits">
                      <span>{{item.traits_1}}</span>
                      <span>{{item.traits_2}}</span>
                      <span>{{item.traits_3}}</span>
                       <span v-if="!!item.traits_4">{{item.traits_4}}</span>
                    </div>
                    </div>
         
                  <div class="community">
                        <div class="rate">{{item.rate}}</div>
                         <span  class="iconfont "> &#xe662;</span>
                       
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
      tableData: [
        {
          professionicon: 'Dark-icon-berserker',
          bdname: '症状旗奴狂战士',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Banner_of_Strength',
          skill_3: '32px-Banner_of_Discipline',
          skill_4: '32px-Shattering_Blow',
          skill_5: '32px-Head_Butt',
          traits_1: '武器',
          traits_2: '纪律',
          traits_3: '狂战士',
          rate: '5',
          skill_1_name: '献血清算',
          skill_2_name: '力量旗帜',
          skill_3_name: '纪律旗帜',
          skill_4_name: '裂岩怒击',
          skill_5_name: '头槌重击'
        },
        {
          professionicon: 'Dark-icon-berserker',
          bdname: '直伤旗奴狂战士',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Banner_of_Strength',
          skill_3: '32px-Banner_of_Discipline',
          skill_4: '32px-Signet_of_Might',
          skill_5: '32px-Head_Butt',
          traits_1: '力量',
          traits_2: '纪律',
          traits_3: '狂战士',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: '直伤时空术士',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Mantra_of_Pain',
          skill_3: '32px-Mirror_Images',
          skill_4: '32px-Phantasmal_Disenchanter',
          skill_5: '32px-Gravity_Well',
          traits_1: '决斗',
          traits_2: '支配',
          traits_3: '时空术士',
          rate: '4.8',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: '直伤增益时空术士',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Signet_of_Inspiration',
          skill_3: '32px-Well_of_Action',
          skill_4: '32px-Well_of_Recall',
          skill_5: '32px-Time_Warp',
          traits_1: '灵感',
          traits_2: '支配',
          traits_3: '时空术士',
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: '增益独行侠',
          skill_1: '32px-Hide_in_Shadows',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Tripwire',
          skill_4: '32px-Fist_Flurry',
          skill_5: '32px-Basilisk_Venom',
          traits_1: '武艺',
          traits_2: '诡诈',
          traits_3: '独行侠',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: '直伤棍子独行侠',
          skill_1: '32px-Channeled_Vigor',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Signet_of_Agility',
          skill_4: '32px-Fist_Flurry',
          skill_5: '32px-Thieves_Guild',
          traits_1: '武艺',
          traits_2: '致命',
          traits_3: '独行侠',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-dragonhunter',
          bdname: '直伤猎龙者',
          skill_1: '32px-Litany_of_Wrath',
          skill_2: '32px-Procession_of_Blades',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Bane_Signet',
          skill_5: "32px-Dragon's_Maw",
          traits_1: '光辉',
          traits_2: '热诚',
          traits_3: '猎龙者',
          rate: '4.9',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-druid',
          bdname: '增益治疗德鲁伊',
          skill_1: '32px-Water_Spirit',
          skill_2: '32px-Frost_Spirit',
          skill_3: '32px-Sun_Spirit',
          skill_4: '32px-Stone_Spirit',
          skill_5: '32px-Spirit_of_Nature',
          traits_1: '游击',
          traits_2: '自然',
          traits_3: '德鲁伊',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '症状燃火者',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Flame',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Signet_of_Wrath',
          skill_5: '32px-Renewed_Focus',
          traits_1: '光辉',
          traits_2: '热诚',
          traits_3: '燃火者',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '症状增益燃火者',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Signet_of_Wrath',
          skill_3: '32px-Mantra_of_Potence',
          skill_4: '32px-Sword_of_Justice',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: '光辉',
          traits_2: '热诚',
          traits_3: '燃火者',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: '直伤步枪全息',
          skill_1: '32px-A.E.D.',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Laser_Disk',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: '枪械',
          traits_2: '炸药',
          traits_3: '全息师',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: '直伤剑枪全息师',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Rifle_Turret',
          skill_4: '32px-Laser_Disk',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: '枪械',
          traits_2: '炸药',
          traits_3: '全息师',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-mirage',
          bdname: '症状幻象术士',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Signet_of_Midnight',
          skill_3: '32px-Signet_of_Domination',
          skill_4: '32px-Crystal_Sands',
          skill_5: '32px-Jaunt',
          traits_1: '幻象',
          traits_2: '决斗',
          traits_3: '幻象术士',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: '直伤增益龙魂使',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Assassin_Stance',

          traits_1: '毁灭',
          traits_2: '唤魂',
          traits_3: '龙魂使',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: '症状龙魂使',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Demon_Stance',

          traits_1: '唤魂',
          traits_2: '腐化',
          traits_3: '龙魂使',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: '直伤魂兽师',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Signet_of_the_Wild',
          skill_3: "32px-_Sic_'Em_",
          skill_4: '32px-Frost_Trap',
          skill_5: '32px-One_Wolf_Pack',
          traits_1: '游击',
          traits_2: '兽王',
          traits_3: '魂兽师',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-weaver',
          bdname: '症状编织者',
          skill_1: '32px-Signet_of_Restoration',
          skill_2: '32px-Primordial_Stance',
          skill_3: '32px-Signet_of_Fire',
          skill_4: '32px-Glyph_of_Lesser_Elementals_(fire)',
          skill_5: '32px-Weave_Self',
          traits_1: '火焰',
          traits_2: '大地',
          traits_3: '编织者',
          rate: '4.7',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-weaver',
          bdname: '直伤剑编织者',
          skill_1: '32px-Glyph_of_Elemental_Harmony',
          skill_2: '32px-Primordial_Stance',
          skill_3: '32px-Glyph_of_Storms',
          skill_4: '32px-Arcane_Blast',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: '火焰',
          traits_2: '空气',
          traits_3: '编织者',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ],
      tableData_great: [
        {
          professionicon: 'Dark-icon-berserker',
          bdname: '症状狂战士',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Shattering_Blow',
          skill_3: '32px-Outrage',
          skill_4: '32px-Sundering_Leap',
          skill_5: '32px-Head_Butt',
          traits_1: '武器',
          traits_2: '纪律',
          traits_3: '狂战士',
          rate: '4.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-berserker',
          bdname: '直伤狂战士',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Wild_Blow',
          skill_3: '32px-Outrage',
          skill_4: '32px-Signet_of_Might',
          skill_5: '32px-Head_Butt',
          traits_1: '力量',
          traits_2: '纪律',
          traits_3: '狂战士',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: '主T时空术士',
          skill_1: '32px-Mantra_of_Recovery',
          skill_2: '32px-Signet_of_Inspiration',
          skill_3: '32px-Well_of_Recall',
          skill_4: '32px-Well_of_Action',
          skill_5: '32px-Time_Warp',
          traits_1: '混沌',
          traits_2: '灵感',
          traits_3: '时空术士',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: '直伤神枪手',
          skill_1: '32px-Hide_in_Shadows',
          skill_2: '32px-Shadow_Gust',
          skill_3: '32px-Mercy',
          skill_4: "32px-Assassin's_Signet",
          skill_5: '32px-Shadow_Meld',
          traits_1: '武艺',
          traits_2: '致命',
          traits_3: '神枪手',
          rate: '3.8',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '治疗增益燃火者',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Potence',
          skill_3: '32px-Bane_Signet',
          skill_4: '32px-Skill',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: '热诚',
          traits_2: '荣耀',
          traits_3: '燃火者',
          rate: '4.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: '黑水预告者',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',

          traits_1: '救赎',
          traits_2: '惩戒',
          traits_3: '预告者',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: '症状全息师',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Flamethrower',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: '枪械',
          traits_2: '炸药',
          traits_3: '全息师',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: '治疗增益龙魂使',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',

          traits_1: '救赎',
          traits_2: '唤魂',
          traits_3: '龙魂使',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: '症状魂兽师',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Sharpening_Stone',
          skill_3: '32px-Vulture_Stance',
          skill_4: "32px-Viper's_Nest",
          skill_5: '32px-One_Wolf_Pack',
          traits_1: '游击',
          traits_2: '生存',
          traits_3: '魂兽师',
          rate: '4.6',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: '鬼手魂兽师',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Moa_Stance',
          skill_3: '32px-Signet_of_Renewal',
          skill_4: '32px-Signet_of_Stone',
          skill_5: '32px-Spirit_of_Nature',
          traits_1: '生存',
          traits_2: '自然',
          traits_3: '魂兽师',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: '直伤暴风使',
          skill_1: '32px-Glyph_of_Elemental_Harmony',
          skill_2: '32px-Signet_of_Fire',
          skill_3: '32px-Glyph_of_Storms',
          skill_4: '32px-Conjure_Lightning_Hammer',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: '空气',
          traits_2: '火焰',
          traits_3: '暴风使',
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: '治疗暴风使',
          skill_1: '32px-_Wash_the_Pain_Away_',
          skill_2: '32px-_Feel_the_Burn_',
          skill_3: '32px-_Flash-Freeze_',
          skill_4: '32px-_Aftershock_',
          skill_5: '32px-_Rebound_',
          traits_1: '流水',
          traits_2: '秘法',
          traits_3: '暴风使',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-thief',
          bdname: '增益盗贼',
          skill_1: '32px-Skelk_Venom',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Signet_of_Agility',
          skill_4: '32px-Pitfall',
          skill_5: '32px-Thieves_Guild',
          traits_1: '武艺',
          traits_2: '特技',
          traits_3: '诡诈',
          rate: 'N/A',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ],
      tableData_good: [
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: '症状独行侠',
          skill_1: '32px-Channeled_Vigor',
          skill_2: '32px-Caltrops',
          skill_3: '32px-Spider_Venom',
          skill_4: '32px-Thousand_Needles',
          skill_5: '32px-Basilisk_Venom',
          traits_1: '武艺',
          traits_2: '诡诈',
          traits_3: '独行侠',
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: '增益直伤神枪手',
          skill_1: '32px-Malicious_Restoration',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Shadow_Flare',
          skill_4: '32px-Mercy',
          skill_5: '32px-Basilisk_Venom',
          traits_1: '武艺',
          traits_2: '致命',
          traits_3: '神枪手',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: '直伤双匕神枪手',
          skill_1: '32px-Signet_of_Malice',
          skill_2: '32px-Shadow_Flare',
          skill_3: "32px-Infiltrator's_Signet",
          skill_4: "32px-Assassin's_Signet",
          skill_5: '32px-Basilisk_Venom',
          traits_1: '武艺',
          traits_2: '致命',
          traits_3: '神枪手',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: '直伤双枪神枪手',
          skill_1: '32px-Signet_of_Malice',
          skill_2: '32px-Shadow_Flare',
          skill_3: "32px-Infiltrator's_Signet",
          skill_4: "32px-Assassin's_Signet",
          skill_5: '32px-Shadow_Meld',
          traits_1: '武艺',
          traits_2: '致命',
          traits_3: '神枪手',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-druid',
          bdname: '增益治疗症状德鲁伊',
          skill_1: '32px-Water_Spirit',
          skill_2: '32px-Frost_Spirit',
          skill_3: '32px-Sun_Spirit',
          skill_4: '32px-Stone_Spirit',
          skill_5: '32px-Spirit_of_Nature',
          traits_1: '游击',
          traits_2: '自然',
          traits_3: '德鲁伊',
          rate: '4.9',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '直伤急速燃火者',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Sword_of_Justice',
          skill_3: '32px-Mantra_of_Potence',
          skill_4: '32px-Bane_Signet',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: '热诚',
          traits_2: '光辉',
          traits_3: '燃火者',
          rate: '2.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-guardian',
          bdname: '直伤守护者',
          skill_1: '32px-Litany_of_Wrath',
          skill_2: '32px-_Retreat_',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Bane_Signet',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: '热诚',
          traits_2: '光辉',
          traits_3: '美德',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: '直伤预告者',
          skill_1: '32px-Legendary_Assassin_Stance',
          skill_2: '32px-Legendary_Dragon_Stance',

          traits_1: '唤魂',
          traits_2: '毁灭',
          traits_3: '预告者',
          rate: '4.2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-reaper',
          bdname: '直伤夺魂者',
          skill_1: '32px-Signet_of_Vampirism',
          skill_2: '32px-Signet_of_Spite',
          skill_3: '32px-Well_of_Suffering',
          skill_4: '32px-Well_of_Darkness',
          skill_5: '32px-Summon_Flesh_Golem',
          traits_1: '怨恨',
          traits_2: '摄魂',
          traits_3: '夺魂者',
          rate: '4.2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: '奶灾厄师',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Blood_Is_Power',
          skill_3: '32px-Desiccate',
          skill_4: '32px-Signet_of_Undeath',
          skill_5: '32px-Summon_Flesh_Golem',
          traits_1: '鲜血',
          traits_2: '摄魂',
          traits_3: '灾厄师',
          rate: '4.1',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: '症状灾厄师',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Blood_Is_Power',
          skill_3: '32px-Epidemic',
          skill_4: '32px-Signet_of_Undeath',
          skill_5: '32px-Plaguelands',
          traits_1: '诅咒',
          traits_2: '摄魂',
          traits_3: '灾厄师',
          rate: '4.6',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: '奶机械师',
          skill_1: '32px-Med_Kit',
          skill_2: '32px-Bulwark_Gyro',
          skill_3: '32px-Elixir_Gun',
          skill_4: '32px-Skill',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: '发明',
          traits_2: '炼金',
          traits_3: '机械师',
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: '症状短工魂兽师',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Sharpening_Stone',
          skill_3: '32px-Vulture_Stance',
          skill_4: "32px-_Sic_'Em_",
          skill_5: '32px-One_Wolf_Pack',
          traits_1: '游击',
          traits_2: '兽王',
          traits_3: '魂兽师',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ],
      tableData_test: [
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: '症状增益时空术士',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Signet_of_Inspiration',
          skill_3: '32px-Well_of_Recall',
          skill_4: '32px-Well_of_Action',
          skill_5: '32px-Skill',
          traits_1: '灵感',
          traits_2: '混沌',
          traits_3: '时空术士',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: '症状时空术士',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Signet_of_Midnight',
          skill_3: '32px-Signet_of_Domination',
          skill_4: '32px-Mirror_Images',
          skill_5: '32px-Time_Warp',
          traits_1: '支配',
          traits_2: '幻象',
          traits_3: '时空术士',
          rate: 'N/A',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: '治疗增益预告者',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',

          traits_1: '救赎',
          traits_2: '唤魂',
          traits_3: '预告者',
          rate: '3.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: '症状机械师',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Flamethrower',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: '枪械',
          traits_2: '炸药',
          traits_3: '机械师',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: '鬼手机械师',
          skill_1: '32px-Elixir_H',
          skill_2: '32px-Bulwark_Gyro',
          skill_3: '32px-Tool_Kit',
          skill_4: '32px-Elixir_S',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: '炼金',
          traits_2: '工具',
          traits_3: '机械师',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ],
      tableData_draft: []
    }
  },
  components: {
    navigation
  },
  methods: {
    gobdpage(bdname, index) {
      console.log(index)
      this.$router.push({
        name: 'bdpage',
        query: {
          id: index,
          bd: bdname,
          type:'raid'
        }
      })
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
  height: 22rem;
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
    cursor: pointer;
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
    width: 0.35rem;
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
.traits {
  width: 4.2rem;
  display: flex;
  justify-content: space-evenly;
}
.equment .traits span {
  display: block;
  width: 140px;
  // justify-content: center;
  font-size: 12px;
  text-align: center;
}
</style>
