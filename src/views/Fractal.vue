<template>
<div class="container">
    <navigation></navigation>
           <!-- title -->

    <div class="content">
               <h2 class="pagetitle">Fractal</h2>
               <p class="pagesubtitle">List of Fractal builds ranging from good to meta/recommended.</p>
                <div class="behindpagetitle">
                    <div>
                          <span  class="iconfont righticon">&#xe6b8;</span>
                     Section revised on: <i>June 18, 2020</i>
                    </div>
                  
                    </div>
              <div class="gamemode">
           <div class="title"><span>Meta</span></div>
          <ul>
            <!-- meta  -->
            <li v-for="(item,i) in tableData" :key="i" @click="gobdpage(item.bdname,i,'meta')">
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
            <li v-for="(item,i) in tableData_great" :key="i" @click="gobdpage(item.bdname,i,'great')">
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
            <li v-for="(item,i) in tableData_good" :key="i" @click="gobdpage(item.bdname,i,'good')">
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
            <li v-for="(item,i) in tableData_test" :key="i" @click="gobdpage(item.bdname,i,'test')">
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
            <li v-for="(item,i) in tableData_draft" :key="i" @click="gobdpage(item.bdname,i,'draft')">
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
      // 力量  纪律  防御 战术 防御 破法者  狂战士
      // 光辉  荣耀  美德 热诚 
      // 炸药  炼金 枪械 工具 发明 机械师  全息
      // 毁灭 唤魂 惩戒  腐化  救赎   预告者  龙魂使
      // 游击  兽王
      tableData: [
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
          professionicon: 'Dark-icon-dragonhunter',
          bdname: '直伤猎龙',
          skill_1: '32px-Litany_of_Wrath',
          skill_2: '32px-Procession_of_Blades',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Bane_Signet',
          skill_5: "32px-Dragon's_Maw",
          traits_1: '热诚',
          traits_2: '光辉',
          traits_3: '猎龙',
          rate: '4.9',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '症状燃火',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Flame',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Signet_of_Wrath',
          skill_5: '32px-Renewed_Focus',
          traits_1: '热诚',
          traits_2: '光辉',
          traits_3: '燃火',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '急速辅助直伤燃火',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Sword_of_Justice',
          skill_3: '32px-Mantra_of_Potence',
          skill_4: '32px-Bane_Signet',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: '热诚',
          traits_2: '光辉',
          traits_3: '燃火',
          rate: '4',
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
          traits_3: '全息',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: '直伤剑全息',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Rifle_Turret',
          skill_4: '32px-Laser_Disk',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: '枪械',
          traits_2: '炸药',
          traits_3: '全息',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: '增益辅助直伤',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Dwarf_Stance',
      
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
              skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Signet_of_the_Wild',
          skill_3: "32px-_Sic_'Em_",
            skill_4: '32px-Frost_Trap',
          skill_5: '32px-One_Wolf_Pack',

          professionicon: 'Dark-icon-soulbeast',
          bdname: '直伤兽魂',

    
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
                skill_1: '32px-Glyph_of_Elemental_Harmony',
          skill_2: '32px-Primordial_Stance',
          skill_3: '32px-Glyph_of_Storms',
          professionicon: 'Dark-icon-weaver',
          bdname: '直伤剑编织',
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
          professionicon: 'Dark-icon-daredevil',
          bdname: '直伤独行侠',
          skill_1: '32px-Channeled_Vigor',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Fist_Flurry',
          skill_4: '32px-Skill',
          skill_5: '32px-Basilisk_Venom',
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
          professionicon: 'Dark-icon-firebrand',
          bdname: '辅助燃火',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Potence',
          skill_3: '32px-Bane_Signet',
          skill_4: '32px-Skill',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: '燃火',
          traits_2: '光辉',
          traits_3: '荣耀',
          rate: '4.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: '症状全息',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Flamethrower',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: '枪械',
          traits_2: '炸药',
          traits_3: '全息',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-mirage',
          bdname: '混沌症状幻象术士',
          skill_1: '32px-False_Oasis',
          skill_2: '32px-Signet_of_Midnight',
          skill_3: '32px-Signet_of_Domination',
          skill_4: '32px-Crystal_Sands',
          skill_5: '32px-Jaunt',
          traits_1: '决斗',
          traits_2: '混沌',
          traits_3: '幻象术士',
          rate: '4.6',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: '增益辅助龙魂',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',
          traits_1: '救赎',
          traits_2: '毁灭',
          traits_3: '龙魂使',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: '实用症状灾厄使',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Blood_Is_Power',
          skill_3: '32px-Epidemic',
          skill_4: '32px-Trail_of_Anguish',
          skill_5: '32px-Plaguelands',
          traits_1: '诅咒',
          traits_2: '摄魂',
          traits_3: '灾厄师',
          rate: '4.3',
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
          traits_2: '秘法',
          traits_3: '暴风使',
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-warrior',
          bdname: '直伤旗奴',
          skill_1: '32px-_To_the_Limit_',
          skill_2: '32px-Banner_of_Strength',
          skill_3: '32px-Banner_of_Discipline',
          skill_4: '32px-Throw_Bolas',
          skill_5: '32px-Rampage',
          traits_1: '力量',
          traits_2: '战术',
          traits_3: '纪律',
          rate: '3.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ],
      tableData_good: [
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
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: '增益辅助直伤神枪手',
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
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Shadow_Flare',
          skill_4: '32px-Skill',
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
          professionicon: 'Dark-icon-druid',
          bdname: '增益治疗辅助德鲁伊',
          skill_1: '32px-Healing_Spring',
          skill_2: '32px-Sun_Spirit',
          skill_3: '32px-Frost_Spirit',
          skill_4: '32px-Storm_Spirit',
          skill_5: '32px-Spirit_of_Nature',
          traits_1: '游击',
          traits_2: '自然',
          traits_3: '德鲁伊',
          rate: '4.1',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-elementalist',
          bdname: '直伤元素',
          skill_1: '32px-Glyph_of_Elemental_Harmony',
          skill_2: '32px-Glyph_of_Storms',
          skill_3: '32px-Conjure_Lightning_Hammer',
          skill_4: '32px-Conjure_Frost_Bow',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: '火焰',
          traits_2: '流水',
          traits_3: '秘法',
          rate: '2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-engineer',
          bdname: '直伤工程',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Rifle_Turret',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: '炸药',
          traits_2: '枪械',
          traits_3: '工具',
          rate: '1.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-guardian',
          bdname: '直伤守护',
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
          professionicon: 'Dark-icon-mesmer',
          bdname: '直伤幻术',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Mantra_of_Pain',
          skill_3: '32px-Phantasmal_Defender',
          skill_4: '32px-Phantasmal_Disenchanter',
          skill_5: '32px-Signet_of_Humility',
          traits_1: '决斗',
          traits_2: '支配',
          traits_3: '幻想',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-necromancer',
          bdname: '法池辅助死灵',
          skill_1: '32px-Well_of_Blood',
          skill_2: '32px-Signet_of_Spite',
          skill_3: '32px-Well_of_Suffering',
          skill_4: '32px-Well_of_Corruption',
          skill_5: '32px-Summon_Flesh_Golem',
          traits_1: '怨恨',
          traits_2: '摄魂',
          traits_3: '鲜血',
          rate: '2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-ranger',
          bdname: '直伤游侠',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Signet_of_the_Wild',
          skill_3: "32px-_Sic_'Em_",
          skill_4: '32px-Skill',
          skill_5: '32px-_Strength_of_the_Pack',
          traits_1: '射手',
          traits_2: '游击',
          traits_3: '兽王',
          rate: '3',
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
          professionicon: 'Dark-icon-renegade',
          bdname: '症状龙魂使',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Demon_Stance',

          traits_1: '腐化',
          traits_2: '唤魂',
          traits_3: '龙魂使',
          rate: '4.7',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: '辅助治疗灾厄师',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Blood_Is_Power',
          skill_3: '32px-Desiccate',
          skill_4: '32px-Signet_of_Undeath',
          skill_5: '32px-Summon_Flesh_Golem',
          traits_1: '鲜血',
          traits_2: '灾厄师',
          traits_3: '摄魂',
          rate: '4.1',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: '治疗机械师',
          skill_1: '32px-Med_Kit',
          skill_2: '32px-Bulwark_Gyro',
          skill_3: '32px-Elixir_Gun',
          skill_4: '32px-Purge_Gyro',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: '发明',
          traits_2: '炼金',
          traits_3: '机械师',
          rate: '3.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: '症状兽魂师',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Sharpening_Stone',
          skill_3: '32px-Vulture_Stance',
          skill_4: "32px-Viper's_Nest",
          skill_5: '32px-One_Wolf_Pack',
          traits_1: '游击',
          traits_2: '生存',
          traits_3: '兽魂师',
          rate: '4.2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-spellbreaker',
          bdname: '直伤削增益旗奴破法 ',
          skill_1: '32px-_To_the_Limit_',
          skill_2: '32px-Banner_of_Strength',
          skill_3: '32px-Banner_of_Discipline',
          skill_4: '32px-Kick_(warrior_utility)',
          skill_5: '32px-Rampage',
          traits_1: '力量',
          traits_2: '纪律',
          traits_3: '破法者',
          rate: '3.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-thief',
          bdname: '直伤贼',
          skill_1: '32px-Signet_of_Malice',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Signet_of_Agility',
          skill_4: '32px-Skill',
          skill_5: '32px-Basilisk_Venom',
          traits_1: '武艺',
          traits_2: '致命',
          traits_3: '诡诈',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ],
      tableData_test: [
        {
          professionicon: 'Dark-icon-berserker',
          bdname: '旗子输出狂战',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Kick_(warrior_utility)',
          skill_3: '32px-Banner_of_Strength',
          skill_4: '32px-Banner_of_Discipline',
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
          bdname: '增益治疗时空术士',
          skill_1: '32px-Mantra_of_Recovery',
          skill_2: '32px-Signet_of_Inspiration',
          skill_3: '32px-Mimic',
          skill_4: '32px-Well_of_Action',
          skill_5: '32px-Signet_of_Humility',
          traits_1: '混沌',
          traits_2: '灵感',
          traits_3: '时空术士',
          rate: '0',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: '水下实用增益辅助时空术士',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Signet_of_Inspiration',
          skill_3: '32px-Mimic',
          skill_4: '32px-Phantasmal_Disenchanter',
          skill_5: '32px-Time_Warp',
          traits_1: '混沌',
          traits_2: '灵感',
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
          bdname: '法池辅助时空术士',
          skill_1: '32px-Well_of_Eternity',
          skill_2: '32px-Well_of_Precognition',
          skill_3: '32px-Signet_of_Inspiration',
          skill_4: '32px-Well_of_Recall',
          skill_5: '32px-Time_Warp',
          traits_1: '灵感',
          traits_2: '决斗',
          traits_3: '时空术士',
          rate: 'N/A',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '急速输出燃火',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Lore',
          skill_3: '32px-Mantra_of_Potence',
          skill_4: '32px-Signet_of_Wrath',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: '光辉',
          traits_2: '荣耀',
          traits_3: '燃火',
          rate: '4.7',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: '增益治疗辅助预告者',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',

          traits_1: '救赎',
          traits_2: '毁灭',
          traits_3: '预告者',
          rate: '3.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: '碎层治疗',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',

          traits_1: '救赎',
          traits_2: '毁灭',
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
          professionicon: 'Dark-icon-tempest',
          bdname: '增益辅助直伤暴风使',
          skill_1: '32px-Arcane_Brilliance',
          skill_2: '32px-Signet_of_Fire',
          skill_3: '32px-Glyph_of_Storms',
          skill_4: '32px-Conjure_Lightning_Hammer',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: '火焰',
          traits_2: '空气',
          traits_3: '暴风使',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: '治疗增益暴风使',
          skill_1: '32px-_Wash_the_Pain_Away_',
          skill_2: '32px-_Feel_the_Burn_',
          skill_3: '32px-_Aftershock_',
          skill_4: '32px-_Flash-Freeze_',
          skill_5: '32px-_Rebound_',
          traits_1: '火焰',
          traits_2: '流水',
          traits_3: '暴风使',
          traits_4: '空气',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: '水下直伤暴风使',
          skill_1: '32px-Signet_of_Restoration',
          skill_2: '32px-Signet_of_Fire',
          skill_3: '32px-Arcane_Blast',
          skill_4: '32px-_Feel_the_Burn_',
          skill_5: '32px-_Rebound_',
          traits_1: '水',
          traits_2: '空气',
          traits_3: '暴风使',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ],
      tableData_draft: [
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: '圣骑士',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Smite_Condition',
          skill_3: '32px-Mantra_of_Lore',
          skill_4: '32px-Merciful_Intervention',
          skill_5: '32px-Signet_of_Courage',
          traits_1: '荣耀',
          traits_2: '英勇',
          traits_3: '燃火',
          rate: 'N/A',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        }
      ]
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
          type:'fractal'
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
