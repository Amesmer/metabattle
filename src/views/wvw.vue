<template>
<div class="container">
    <navigation></navigation>
           <!-- title -->

    <div class="content">
               <h2 class="pagetitle">WvW</h2>
               <p class="pagesubtitle">List of World versus World roaming/zerg builds ranging from good to meta.</p>
                <div class="behindpagetitle">
                    <div>
                          <span  class="iconfont righticon">&#xe6b8;</span>
                     Section revised on: <i> July 26th, 2020</i>
                    </div>
                  
                    </div>
              <div class="gamemode">
                <h3>Zerg Builds</h3>
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
          <!-- 小规模战斗 -->
          <h3>Smallscale Builds</h3>
                                       <div class="title"><span>Great builds</span></div>
          <ul>
            <!-- 魂武 -->
            <li v-for="(item,i) in smalltableData_great" :key="i" @click="gobdpage(item.bdname,i,'greatbuilds')">
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
                                              <div class="title"><span>Good builds</span></div>
          <ul>
            <!-- 魂武 -->
            <li v-for="(item,i) in smalltableData_goodt" :key="i" @click="gobdpage(item.bdname,i,'goodbuilds')">
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
            <li v-for="(item,i) in smalltableData_test" :key="i" @click="gobdpage(item.bdname,i,'testbuilds')">
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
            <li v-for="(item,i) in smalltableData_draft" :key="i" @click="gobdpage(item.bdname,i,'draftbuilds')">
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
          professionicon: 'Dark-icon-firebrand',
          bdname: 'Support Firebrand',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-_Stand_Your_Ground_',
          skill_3: '32px-Purging_Flames',
          skill_4: '32px-Mantra_of_Lore',
          skill_5: '32px-Mantra_of_Liberation',
          traits_1: 'Honor',
          traits_2: 'Virtues',
          traits_3: 'Firebrand',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.9'
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Hammer Backline',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Dwarf_Stance',

          traits_1: 'Devastation',
          traits_2: 'Invocation',
          traits_3: 'Herald',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.6'
        },

        {
          professionicon: 'Dark-icon-scourge',
          bdname: 'Power Curses',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Trail_of_Anguish',
          skill_3: '32px-Well_of_Corruption',
          skill_4: '32px-Well_of_Suffering',
          skill_5: '32px-Ghastly_Breach',
          traits_1: 'Soul Reaping',
          traits_2: 'Curses',
          traits_3: 'Scourge',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.8'
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Med Kit Scrapper',
          skill_1: '32px-Med_Kit',
          skill_2: '32px-Bulwark_Gyro',
          skill_3: '32px-Elixir_Gun',
          skill_4: '32px-Purge_Gyro',
          skill_5: '32px-Sneak_Gyro',
          traits_1: 'Inventions',
          traits_2: 'Alchemy',
          traits_3: 'Scrapper',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-spellbreaker',
          bdname: 'Support Spellbreaker',
          skill_1: '32px-_To_the_Limit_',
          skill_2: '32px-_Shake_It_Off_',
          skill_3: '32px-_For_Great_Justice_',
          skill_4: '32px-Break_Enchantments',
          skill_5: '32px-Winds_of_Disenchantment',
          traits_1: 'Defense',
          traits_2: 'Spellbreaker',
          traits_3: 'Tactics',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'Frontline Aurashare',
          skill_1: '32px-_Wash_the_Pain_Away_',
          skill_2: '32px-_Flash-Freeze_',
          skill_3: '32px-_Eye_of_the_Storm_',
          skill_4: '32px-_Feel_the_Burn_',
          skill_5: '32px-_Rebound_',
          traits_1: 'Water',
          traits_2: 'Tempest',
          traits_3: 'Fire',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        }
      ],
      tableData_great: [
        {
          professionicon: 'Dark-icon-berserker',
          bdname: 'Burstzerker',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Balanced_Stance',
          skill_3: '32px-Endure_Pain',
          skill_4: '32px-Signet_of_Fury',
          skill_5: '32px-Battle_Standard',
          traits_1: 'Strength',
          traits_2: 'Discipline',
          traits_3: 'Berserker',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.9'
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: 'Support Chronomancer',
          skill_1: '32px-Mantra_of_Recovery',
          skill_2: '32px-Null_Field',
          skill_3: '32px-Veil',
          skill_4: '32px-Illusion_of_Life',
          skill_5: '32px-Gravity_Well',
          traits_1: 'Chaos',
          traits_2: 'Domination',
          traits_3: 'Chronomancer',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.7'
        },
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: 'Staff Daredevil',
          skill_1: '32px-Channeled_Vigor',
          skill_2: '32px-Shadowstep',
          skill_3: "32px-Assassin's_Signet",
          skill_4: '32px-Signet_of_Agility',
          skill_5: '32px-Dagger_Storm',
          traits_1: 'Critical Strikes',
          traits_2: 'Trickery',
          traits_3: 'Daredevil',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.6'
        },
        {
          professionicon: 'Dark-icon-guardian',
          bdname: 'Burn Guard',
          skill_1: '32px-Shelter',
          skill_2: '32px-Purging_Flames',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Wall_of_Reflection',
          skill_5: '32px-Renewed_Focus',
          traits_1: 'Zeal',
          traits_2: 'Virtues',
          traits_3: 'Radiance',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.5'
        },
        {
          professionicon: 'Dark-icon-reaper',
          bdname: 'DM Power Reaper',
          skill_1: '32px-Consume_Conditions',
          skill_2: '32px-Well_of_Corruption',
          skill_3: '32px-Well_of_Suffering',
          skill_4: '32px-_Nothing_can_save_you_',
          skill_5: '32px-_Chilled_to_the_Bone_',
          traits_1: 'Death Magic',
          traits_2: 'Soul\n Reaping',
          traits_3: 'Reaper',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.8'
        },
        {
          professionicon: 'Dark-icon-reaper',
          bdname: 'Power Wells',
          skill_1: '32px-Consume_Conditions',
          skill_2: '32px-Well_of_Darkness',
          skill_3: '32px-Well_of_Corruption',
          skill_4: '32px-Well_of_Suffering',
          skill_5: '32px-Lich_Form',
          traits_1: 'Spite',
          traits_2: 'Soul\n Reaping',
          traits_3: 'Reaper',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: 'Diviner Renegade',
          skill_1: '32px-Legendary_Dwarf_Stance',
          skill_2: '32px-Legendary_Demon_Stance',

          traits_1: 'Devastation',
          traits_2: 'Invocation',
          traits_3: 'Renegade',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.5'
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: 'Celestial Scourge',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Well_of_Suffering',
          skill_3: '32px-Trail_of_Anguish',
          skill_4: '32px-Well_of_Corruption',
          skill_5: '32px-Ghastly_Breach',
          traits_1: 'Spite',
          traits_2: 'Curses',
          traits_3: 'Scourge',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.9'
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: 'Condition Scourge',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Desiccate',
          skill_3: '32px-Trail_of_Anguish',
          skill_4: '32px-Well_of_Corruption',
          skill_5: '32px-Ghastly_Breach',
          traits_1: 'Curses',
          traits_2: 'Death\n Magic',
          traits_3: 'Scourge',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.5'
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Big Bomb Kit',
          skill_1: '32px-Medic_Gyro',
          skill_2: '32px-Shredder_Gyro',
          skill_3: '32px-Elixir_U',
          skill_4: '32px-Bomb_Kit',
          skill_5: '32px-Sneak_Gyro',
          traits_1: 'Firearms',
          traits_2: 'Explosives',
          traits_3: 'Scrapper',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: 'Immobbeast',
          skill_1: '32px-Bear_Stance',
          skill_2: '32px-Dolyak_Stance',
          skill_3: '32px-Signet_of_the_Wild',
          skill_4: '32px-Muddy_Terrain',
          skill_5: '32px-Entangle',
          traits_1: 'Skirmishing',
          traits_2: 'Beastmastery',
          traits_3: 'Soulbeast',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-spellbreaker',
          bdname: 'DPS Spellbreaker',
          skill_1: '32px-Defiant_Stance',
          skill_2: '32px-Balanced_Stance',
          skill_3: '32px-Berserker_Stance',
          skill_4: '32px-Break_Enchantments',
          skill_5: '32px-Winds_of_Disenchantment',
          traits_1: 'Strength',
          traits_2: 'Discipline',
          traits_3: 'Spellbreaker',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.9'
        },
        {
          professionicon: 'Dark-icon-weaver',
          bdname: 'Staff Backline',
          skill_1: '32px-Ether_Renewal',
          skill_2: '32px-Lightning_Flash',
          skill_3: '32px-Twist_of_Fate',
          skill_4: '32px-Mist_Form',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: 'Air',
          traits_2: 'Weaver',
          traits_3: 'Fire',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.5'
        }
      ],
      tableData_good: [
        {
          professionicon: 'Dark-icon-dragonhunter',
          bdname: 'Burn Dragonhunter',
          skill_1: '32px-Litany_of_Wrath',
          skill_2: '32px-Sword_of_Justice',
          skill_3: '32px-_Stand_Your_Ground_',
          skill_4: '32px-Wall_of_Reflection',
          skill_5: '32px-Renewed_Focus',
          traits_1: 'Zeal',
          traits_2: 'Virtues',
          traits_3: 'Dragonhunter',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '3.5'
        },
        {
          professionicon: 'Dark-icon-elementalist',
          bdname: 'Staff DPS',
          skill_1: '32px-Ether_Renewal',
          skill_2: '32px-Lightning_Flash',
          skill_3: '32px-Arcane_Wave',
          skill_4: '32px-Mist_Form',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: 'Fire',
          traits_2: 'Air',
          traits_3: 'Arcane',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.3'
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Condition Frontline',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Demon_Stance',

          traits_1: 'Corruption',
          traits_2: 'Invocation',
          traits_3: 'Herald',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.3'
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Ventari Healer',
          skill_1: '32px-Legendary_Centaur_Stance',
          skill_2: '32px-Legendary_Dragon_Stance',

          traits_1: 'Salvation',
          traits_2: 'Invocation',
          traits_3: 'Herald',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4'
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: 'Power Scourge',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Well_of_Suffering',
          skill_3: '32px-Well_of_Corruption',
          skill_4: '32px-Trail_of_Anguish',
          skill_5: '32px-Ghastly_Breach',
          traits_1: 'Spite',
          traits_2: 'Soul\n Reaping',
          traits_3: 'Scourge',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.4'
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Altruism Scrapper',
          skill_1: '32px-Med_Kit',
          skill_2: '32px-Bulwark_Gyro',
          skill_3: '32px-Elixir_Gun',
          skill_4: '32px-Purge_Gyro',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: 'Inventions',
          traits_2: 'Alchemy',
          traits_3: 'Scrapper',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4'
        }
      ],
      tableData_test: [
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'DPS Auramancer',
          skill_1: '32px-_Wash_the_Pain_Away_',
          skill_2: '32px-Mist_Form',
          skill_3: '32px-_Eye_of_the_Storm_',
          skill_4: '32px-_Aftershock_',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: 'Air',
          traits_2: 'Water',
          traits_3: 'Tempest',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.5'
        }
      ],
      tableData_draft: [
        {
          professionicon: 'Dark-icon-guardian',
          bdname: 'Core Support',
          skill_1: '32px-_Receive_the_Light_',
          skill_2: '32px-_Save_Yourselves',
          skill_3: '32px-_Retreat_',
          skill_4: '32px-_Stand_Your_Ground_',
          skill_5: '32px-Renewed_Focus',
          traits_1: 'Honor',
          traits_2: 'Virtues',
          traits_3: 'Valor',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: 'N/A'
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: 'Condimmob',
          skill_1: '32px-Bear_Stance',
          skill_2: '32px-Muddy_Terrain',
          skill_3: '32px-Spike_Trap',
          skill_4: '32px-Dolyak_Stance',
          skill_5: '32px-Entangle',
          traits_1: 'Skirmishing',
          traits_2: 'Wilderness Survival',
          traits_3: 'Soulbeast',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: 'N/A'
        }
      ],
      smalltableData_great: [
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: 'Power S/D Roamer',
          skill_1: '32px-Withdraw',
          skill_2: '32px-Roll_for_Initiative',
          skill_3: '32px-Shadowstep',
          skill_4: '32px-Signet_of_Agility',
          skill_5: '32px-Dagger_Storm',
          traits_1: 'Deadly Arts',
          traits_2: 'Trickery',
          traits_3: 'Daredevil',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: 'SA Rifle Roamer',
          skill_1: '32px-Withdraw',
          skill_2: '32px-Mercy',
          skill_3: '32px-Shadowstep',
          skill_4: '32px-Skill',
          skill_5: '32px-Shadow_Meld',
          traits_1: 'Shadow Arts',
          traits_2: 'Trickery',
          traits_3: 'Deadeye',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Hybrid Mallyx Roamer',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Demon_Stance',

          traits_1: 'Corruption',
          traits_2: 'Invocation',
          traits_3: 'Herald',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Shiro Roamer',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Assassin_Stance',

          traits_1: 'Devastation',
          traits_2: 'Invocation',
          traits_3: 'Herald',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: 'Explosive Roamer',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Elixir_S',
          skill_3: '32px-Elixir_U',
          skill_4: '32px-Photon_Wall',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: 'Explosives',
          traits_2: 'Alchemy',
          traits_3: 'Holosmith',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: 'Holorifle',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Elixir_S',
          skill_3: '32px-Elixir_U',
          skill_4: '32px-Photon_Wall',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: 'Alchemy',
          traits_2: 'Tools',
          traits_3: 'Holosmith',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.8'
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: 'Dual Axe Roamer',
          skill_1: '32px-Troll_Unguent',
          skill_2: '32px-Moa_Stance',
          skill_3: '32px-Dolyak_Stance',
          skill_4: '32px-Skill',
          skill_5: '32px-_Strength_of_the_Pack',
          traits_1: 'Wilderness Survival',
          traits_2: 'Nature Magic',
          traits_3: 'Soulbeast',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '4.7'
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: "Sic 'Em Roamer",
          skill_1: '32px-Troll_Unguent',
          skill_2: '32px-Quickening_Zephyr',
          skill_3: '32px-Skill',
          skill_4: "32px-_Sic_'Em_",
          skill_5: '32px-_Strength_of_the_Pack',
          traits_1: 'Wilderness Survival',
          traits_2: 'Beastmastery',
          traits_3: 'Soulbeast',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-spellbreaker',
          bdname: 'Magebane Roamer',
          skill_1: '32px-Healing_Signet',
          skill_2: '32px-_Shake_It_Off_',
          skill_3: "32px-Bull's_Charge",
          skill_4: '32px-Frenzy',
          skill_5: '32px-Signet_of_Rage',
          traits_1: 'Strength',
          traits_2: 'Discipline',
          traits_3: 'Spellbreaker',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        },
        {
          professionicon: 'Dark-icon-thief',
          bdname: 'Core P/D Roamer',
          skill_1: '32px-Hide_in_Shadows',
          skill_2: '32px-Blinding_Powder',
          skill_3: '32px-Shadowstep',
          skill_4: '32px-Shadow_Refuge',
          skill_5: '32px-Dagger_Storm',
          traits_1: 'Deadly Arts',
          traits_2: 'Shadow\n Arts',
          traits_3: 'Trickery',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: '',
          rate: '5'
        }
      ],
      smalltableData_goodt: [
         {
        "professionicon":"Dark-icon-daredevil",
        "bdname":"SA D/P Roamer",
        "skill_1":"32px-Withdraw",
        "skill_2":"32px-Assassin's_Signet",
        "skill_3":"32px-Shadowstep",
        "skill_4":"32px-Blinding_Powder",
        "skill_5":"32px-Basilisk_Venom",
        "traits_1":"Shadow Arts",
        "traits_2":"Trickery",
        "traits_3":"Daredevil",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-deadeye",
        "bdname":"Malicious Oneshot Roamer",
        "skill_1":"32px-Hide_in_Shadows",
        "skill_2":"32px-Infiltrator's_Signet",
        "skill_3":"32px-Assassin's_Signet",
        "skill_4":"32px-Signet_of_Shadows",
        "skill_5":"32px-Shadow_Meld",
        "traits_1":"Shadow Arts",
        "traits_2":"Critical Strikes",
        "traits_3":"Deadeye",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-dragonhunter",
        "bdname":"Meditrapper Roamer",
        "skill_1":"32px-Purification",
        "skill_2":"32px-Smite_Condition",
        "skill_3":"32px-Test_of_Faith",
        "skill_4":"32px-Judge's_Intervention",
        "skill_5":"32px-Renewed_Focus",
        "traits_1":"Valor",
        "traits_2":"Virtues",
        "traits_3":"Dragonhunter",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-druid",
        "bdname":"Stealth Trapper",
        "skill_1":"32px-Healing_Spring",
        "skill_2":"32px-Skill",
        "skill_3":"32px-Flame_Trap",
        "skill_4":"32px-Spike_Trap",
        "skill_5":"32px-Entangle",
        "traits_1":"Skirmishing",
        "traits_2":"Wilderness Survival",
        "traits_3":"Druid",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4.2"
    },
    {
        "professionicon":"Dark-icon-elementalist",
        "bdname":"S/F Fresh air roamer",
        "skill_1":"32px-Glyph_of_Elemental_Harmony",
        "skill_2":"32px-Arcane_Shield",
        "skill_3":"32px-Lightning_Flash",
        "skill_4":"32px-Arcane_Blast",
        "skill_5":"32px-Conjure_Fiery_Greatsword",
        "traits_1":"Air",
        "traits_2":"Water",
        "traits_3":"Arcane",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4.3"
    },
    {
        "professionicon":"Dark-icon-mirage",
        "bdname":"Chaotic Condition Roamer",
        "skill_1":"32px-False_Oasis",
        "skill_2":"32px-Illusionary_Ambush",
        "skill_3":"32px-Blink",
        "skill_4":"32px-Arcane_Thievery",
        "skill_5":"32px-Jaunt",
        "traits_1":"Dueling",
        "traits_2":"Chaos",
        "traits_3":"Mirage",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4.7"
    },
    {
        "professionicon":"Dark-icon-necromancer",
        "bdname":"Core Condi Roamer",
        "skill_1":"32px-Consume_Conditions",
        "skill_2":"32px-Spectral_Walk",
        "skill_3":"32px-Corrupt_Boon",
        "skill_4":"32px-Spectral_Wall",
        "skill_5":"32px-Plaguelands",
        "traits_1":"Curses",
        "traits_2":"Blood\n Magic",
        "traits_3":"Soul Reaping",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-necromancer",
        "bdname":"Core Signet Roamer",
        "skill_1":"32px-Signet_of_Vampirism",
        "skill_2":"32px-Spectral_Armor",
        "skill_3":"32px-Spectral_Walk",
        "skill_4":"32px-Signet_of_Undeath",
        "skill_5":"32px-Lich_Form",
        "traits_1":"Death Magic",
        "traits_2":"Spite",
        "traits_3":"Soul Reaping",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4.7"
    },
    {
        "professionicon":"Dark-icon-reaper",
        "bdname":"Greatsword Roamer",
        "skill_1":"32px-Consume_Conditions",
        "skill_2":"32px-Spectral_Armor",
        "skill_3":"32px-Spectral_Walk",
        "skill_4":"32px-Skill",
        "skill_5":"32px-_Chilled_to_the_Bone_",
        "traits_1":"Blood Magic",
        "traits_2":"Soul\n Reaping",
        "traits_3":"Reaper",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4.3"
    },
    {
        "professionicon":"Dark-icon-weaver",
        "bdname":"Fresh Air Roamer",
        "skill_1":"32px-Glyph_of_Elemental_Harmony",
        "skill_2":"32px-Twist_of_Fate",
        "skill_3":"32px-Lightning_Flash",
        "skill_4":"32px-Arcane_Blast",
        "skill_5":"32px-Conjure_Fiery_Greatsword",
        "traits_1":"Air",
        "traits_2":"Arcane",
        "traits_3":"Weaver",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4.3"
    },
    {
        "professionicon":"Dark-icon-weaver",
        "bdname":"Lightning Rod Roamer",
        "skill_1":"32px-Signet_of_Restoration",
        "skill_2":"32px-Twist_of_Fate",
        "skill_3":"32px-Lightning_Flash",
        "skill_4":"32px-Primordial_Stance",
        "skill_5":"32px-Tornado",
        "traits_1":"Air",
        "traits_2":"Arcane",
        "traits_3":"Weaver",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-weaver",
        "bdname":"Starfire Roamer",
        "skill_1":"32px-Signet_of_Restoration",
        "skill_2":"32px-Twist_of_Fate",
        "skill_3":"32px-Glyph_of_Elemental_Power",
        "skill_4":"32px-Primordial_Stance",
        "skill_5":"32px-Weave_Self",
        "traits_1":"Fire",
        "traits_2":"Arcane",
        "traits_3":"Weaver",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4.3"
    },
      ],
      smalltableData_test: [
      {
        "professionicon":"Dark-icon-daredevil",
        "bdname":"P/D Condi Roamer",
        "skill_1":"32px-Hide_in_Shadows",
        "skill_2":"32px-Blinding_Powder",
        "skill_3":"32px-Spider_Venom",
        "skill_4":"32px-Smoke_Screen",
        "skill_5":"32px-Thieves_Guild",
        "traits_1":"Deadly Arts",
        "traits_2":"Shadow\n Arts",
        "traits_3":"Critical Strikes",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"N/A"
    },
    {
        "professionicon":"Dark-icon-daredevil",
        "bdname":"Permadodge Condi Roamer",
        "skill_1":"32px-Signet_of_Malice",
        "skill_2":"32px-Roll_for_Initiative",
        "skill_3":"32px-Shadowstep",
        "skill_4":"32px-Bandit's_Defense", 
        "skill_5":"32px-Dagger_Storm",
        "traits_1":"Acrobatics",
        "traits_2":"Trickery",
        "traits_3":"Daredevil",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"3"
    },
    {
        "professionicon":"Dark-icon-deadeye",
        "bdname":"Poisonous Rifle Roamer",
        "skill_1":"32px-Hide_in_Shadows",
        "skill_2":"32px-Blinding_Powder",
        "skill_3":"32px-Shadowstep",
        "skill_4":"32px-Mercy",
        "skill_5":"32px-Shadow_Meld",
        "traits_1":"Deadly Arts",
        "traits_2":"Shadow\n Arts",
        "traits_3":"Deadeye",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"3.3"
    },
    {
        "professionicon":"Dark-icon-druid",
        "bdname":"Longbow Roamer",
        "skill_1":"32px-_We_Heal_As_One",
        "skill_2":"32px-Signet_of_Stone",
        "skill_3":"32px-Skill",
        "skill_4":"32px-Quickening_Zephyr",
        "skill_5":"32px-_Strength_of_the_Pack",
        "traits_1":"Wilderness Survival",
        "traits_2":"Beastmastery",
        "traits_3":"Druid",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-mesmer",
        "bdname":"Core Shatter Roamer",
        "skill_1":"32px-Mirror",
        "skill_2":"32px-Mantra_of_Pain",
        "skill_3":"32px-Blink",
        "skill_4":"32px-Decoy",
        "skill_5":"32px-Mass_Invisibility",
        "traits_1":"Domination",
        "traits_2":"Dueling",
        "traits_3":"Chaos",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-ranger",
        "bdname":"Core Longbow Roamer",
        "skill_1":"32px-_We_Heal_As_One",
        "skill_2":"32px-Skill",
        "skill_3":"32px-Quickening_Zephyr",
        "skill_4":"32px-Lightning_Reflexes",
        "skill_5":"32px-_Strength_of_the_Pack",
        "traits_1":"Marksmanship",
        "traits_2":"Wilderness Survival",
        "traits_3":"Beastmastery",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"N/A"
    },
    {
        "professionicon":"Dark-icon-thief",
        "bdname":"Sentry Trapper Roamer",
        "skill_1":"32px-Withdraw",
        "skill_2":"32px-Pitfall",
        "skill_3":"32px-Thousand_Needles",
        "skill_4":"32px-Skale_Venom",
        "skill_5":"32px-Dagger_Storm",
        "traits_1":"Deadly Arts",
        "traits_2":"Shadow\n Arts",
        "traits_3":"Trickery",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    },
    {
        "professionicon":"Dark-icon-warrior",
        "bdname":"Core Tactics Roamer",
        "skill_1":"32px-Mending",
        "skill_2":"32px-_Shake_It_Off_",
        "skill_3":"32px-Bull's_Charge",
        "skill_4":"32px-_For_Great_Justice_",
        "skill_5":"32px-Rampage",
        "traits_1":"Strength",
        "traits_2":"Tactics",
        "traits_3":"Discipline",
        "skill_1_name":"",
        "skill_2_name":"",
        "skill_3_name":"",
        "skill_4_name":"",
        "skill_5_name":"",
        "rate":"4"
    }
      ],
      smalltableData_draft: [
       
      ]
    }
  },
  components: {
    navigation
  },
  methods: {
    gobdpage(bdname, index,scope) {
      console.log(index)
      this.$router.push({
        name: 'bdpage',
        query: {
          id: index,
          bd: bdname,
          type: 'fractal',
          scope:scope
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
  height: 28rem;
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
