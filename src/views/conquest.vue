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
                      <div class="weaps">
                                <div>
                                    <i>{{item.weapon_1}}</i>
                                    <a href="#javascript" :title="item.weapon_1sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_1}.png`)" alt=""></a>
                             
                                    <img src="@/assets/images/16px-I.png" alt="">
                                     <a href="#javascript" :title="item.weapon_1sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_2}.png`)" alt=""></a>

                                </div>
                                      <div v-if="!!item.weapon_2">
                                    <i>{{item.weapon_2}}</i>
                                      <a href="#javascript" :title="item.weapon_2sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_1}.png`)" alt=""></a>
                                    
                                    <img src="@/assets/images/16px-II.png" alt="">
                                      <a href="#javascript" :title="item.weapon_2sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_2}.png`)" alt=""></a>
                                   
                                </div>
                                
                    </div>
                    <div class="ra">
                        <a href="#javascript" :title="item.runename"><img :src="require(`@/assets/superiorRune/${item.rune}.png`)" alt=""></a>
                     
                        <a href="#javascript" :title="item.amuletname"><img :src="require(`@/assets/amulet/${item.amulet}.png`)" alt=""></a>
                     
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
                      <div class="weaps">
                                <div>
                                    <i>{{item.weapon_1}}</i>
                                    <a href="#javascript" :title="item.weapon_1sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_1}.png`)" alt=""></a>
                             
                                    <img src="@/assets/images/16px-I.png" alt="">
                                     <a href="#javascript" :title="item.weapon_1sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_2}.png`)" alt=""></a>

                                </div>
                                      <div v-if="!!item.weapon_2">
                                    <i>{{item.weapon_2}}</i>
                                      <a href="#javascript" :title="item.weapon_2sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_1}.png`)" alt=""></a>
                                    
                                    <img src="@/assets/images/16px-II.png" alt="">
                                      <a href="#javascript" :title="item.weapon_2sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_2}.png`)" alt=""></a>
                                   
                                </div>
                                
                    </div>
                    <div class="ra">
                        <a href="#javascript" :title="item.runename"><img :src="require(`@/assets/superiorRune/${item.rune}.png`)" alt=""></a>
                     
                        <a href="#javascript" :title="item.amuletname"><img :src="require(`@/assets/amulet/${item.amulet}.png`)" alt=""></a>
                     
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
                      <div class="weaps">
                                <div>
                                    <i>{{item.weapon_1}}</i>
                                    <a href="#javascript" :title="item.weapon_1sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_1}.png`)" alt=""></a>
                             
                                    <img src="@/assets/images/16px-I.png" alt="">
                                     <a href="#javascript" :title="item.weapon_1sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_2}.png`)" alt=""></a>

                                </div>
                                      <div v-if="!!item.weapon_2">
                                    <i>{{item.weapon_2}}</i>
                                      <a href="#javascript" :title="item.weapon_2sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_1}.png`)" alt=""></a>
                                    
                                    <img src="@/assets/images/16px-II.png" alt="">
                                      <a href="#javascript" :title="item.weapon_2sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_2}.png`)" alt=""></a>
                                   
                                </div>
                                
                    </div>
                    <div class="ra">
                        <a href="#javascript" :title="item.runename"><img :src="require(`@/assets/superiorRune/${item.rune}.png`)" alt=""></a>
                     
                        <a href="#javascript" :title="item.amuletname"><img :src="require(`@/assets/amulet/${item.amulet}.png`)" alt=""></a>
                     
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
                      <div class="weaps">
                                <div>
                                    <i>{{item.weapon_1}}</i>
                                    <a href="#javascript" :title="item.weapon_1sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_1}.png`)" alt=""></a>
                             
                                    <img src="@/assets/images/16px-I.png" alt="">
                                     <a href="#javascript" :title="item.weapon_1sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_2}.png`)" alt=""></a>

                                </div>
                                      <div v-if="!!item.weapon_2">
                                    <i>{{item.weapon_2}}</i>
                                      <a href="#javascript" :title="item.weapon_2sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_1}.png`)" alt=""></a>
                                    
                                    <img src="@/assets/images/16px-II.png" alt="">
                                      <a href="#javascript" :title="item.weapon_2sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_2}.png`)" alt=""></a>
                                   
                                </div>
                                
                    </div>
                    <div class="ra">
                        <a href="#javascript" :title="item.runename"><img :src="require(`@/assets/superiorRune/${item.rune}.png`)" alt=""></a>
                     
                        <a href="#javascript" :title="item.amuletname"><img :src="require(`@/assets/amulet/${item.amulet}.png`)" alt=""></a>
                     
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
                      <div class="weaps">
                                <div>
                                    <i>{{item.weapon_1}}</i>
                                    <a href="#javascript" :title="item.weapon_1sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_1}.png`)" alt=""></a>
                             
                                    <img src="@/assets/images/16px-I.png" alt="">
                                     <a href="#javascript" :title="item.weapon_1sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_1sigil_2}.png`)" alt=""></a>

                                </div>
                                      <div v-if="!!item.weapon_2">
                                    <i>{{item.weapon_2}}</i>
                                      <a href="#javascript" :title="item.weapon_2sigil_1_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_1}.png`)" alt=""></a>
                                    
                                    <img src="@/assets/images/16px-II.png" alt="">
                                      <a href="#javascript" :title="item.weapon_2sigil_2_name"><img :src="require(`@/assets/sigil/${item.weapon_2sigil_2}.png`)" alt=""></a>
                                   
                                </div>
                                
                    </div>
                    <div class="ra">
                        <a href="#javascript" :title="item.runename"><img :src="require(`@/assets/superiorRune/${item.rune}.png`)" alt=""></a>
                     
                        <a href="#javascript" :title="item.amuletname"><img :src="require(`@/assets/amulet/${item.amulet}.png`)" alt=""></a>
                     
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
        // 魂武
        {
          professionicon: 'Dark-icon-herald',
          bdname: '症状魂武',
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
        }, //工程
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
        }, 
         //死灵
        {
          professionicon: 'Dark-icon-reaper',
          bdname: 'Spectral Onslaught',
          skill_1: '32px-Consume_Conditions',
          skill_1_name: '',
          skill_2: '32px-Summon_Flesh_Wurm',
          skill_2_name: '',
          skill_3: '32px-Spectral_Walk',
          skill_3_name: '',
          skill_4: '32px-Skill',
          skill_4_name: '',
          skill_5: '32px-Lich_Form',
          skill_5_name: '',
          weapon_1: 'Staff',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Intelligence',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'A/F',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }, 
        //元素
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
        }, //盗贼
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
        }
      ],
      tableData_great: [
        // 盗贼
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: 'Dagger/Pistol',
          skill_1: '32px-Hide_in_Shadows',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Signet_of_Agility',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          skill_3: '32px-Shadowstep',
          skill_3_name: '32px-Legendary_Dragon_Stance',
          skill_4: '32px-Blinding_Powder',
          skill_4_name: '32px-Legendary_Dragon_Stance',
          skill_5: '32px-Dagger_Storm',
          skill_5_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'D/P',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Compounding',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'SB',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Divinity',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4.7',
          comment: ''
        }, //燃火
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: 'Sagebrand',
          skill_1: '32px-Mantra_of_Solace',
          skill_1_name: '',
          skill_2: '32px-Purging_Flames',
          skill_2_name: '',
          skill_3: '32px-Contemplation_of_Purity',
          skill_3_name: '',
          skill_4: '32px-Mantra_of_Truth',
          skill_4_name: '',
          skill_5: '32px-Renewed_Focus',
          skill_5_name: '',
          weapon_1: 'Sc/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'A/Sh',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Absorption',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Purging',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Traveler',
          runename: '',
          amulet: "32px-Sage's_Amulet",
          amuletname: '',
          rate: '4.8',
          comment: ''
        },
        //燃火
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: 'Symbolbrand',
          skill_1: '32px-Mantra_of_Solace',
          skill_1_name: '',
          skill_2: '32px-_Save_Yourselves',
          skill_2_name: '',
          skill_3: '32px-Skill',
          skill_3_name: '',
          skill_4: '32px-Mantra_of_Truth',
          skill_4_name: '',
          skill_5: '32px-Renewed_Focus',
          skill_5_name: '',
          weapon_1: 'Sw/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'A/Sh',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Absorption',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Courage',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Traveler',
          runename: '',
          amulet: "32px-Mender's_Amulet",
          amuletname: '',
          rate: '4.7',
          comment: ''
        }, //魂武
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Power Shiro',
          skill_1: '32px-Legendary_Assassin_Stance',
          skill_1_name: '',
          skill_2: '32px-Legendary_Dragon_Stance',
          skill_2_name: '',

          weapon_1: 'Sw/Sw',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Staff',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Resistance',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4.8',
          comment: ''
        }, //魂武
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Retribution Shiro',
          skill_1: '32px-Legendary_Assassin_Stance',
          skill_1_name: '',
          skill_2: '32px-Legendary_Dragon_Stance',
          skill_2_name: '',

          weapon_1: 'Sw/Sw',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Courage',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Staff',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Intelligence',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Resistance',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '5',
          comment: ''
        },
        //游侠
        {
          professionicon: 'Dark-icon-ranger',
          bdname: 'Power Survival',
          skill_1: '32px-_We_Heal_As_One',
          skill_1_name: '',
          skill_2: '32px-_Protect_Me',
          skill_2_name: '',
          skill_3: '32px-Quickening_Zephyr',
          skill_3_name: '',
          skill_4: '32px-Lightning_Reflexes',
          skill_4_name: '',
          skill_5: '32px-_Strength_of_the_Pack',
          skill_5_name: '',
          weapon_1: 'LB',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Separation',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'GS',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Divinity',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4.8',
          comment: ''
        }
        //死灵
        // {
        //   professionicon: 'Dark-icon-reaper',
        //   bdname: 'Spectral Onslaught',
        //   skill_1: '32px-Consume_Conditions',
        //   skill_1_name: '',
        //   skill_2: '32px-Summon_Flesh_Wurm',
        //   skill_2_name: '',
        //   skill_3: '32px-Spectral_Walk',
        //   skill_3_name: '',
        //   skill_4: '32px-Skill',
        //   skill_4_name: '',
        //   skill_5: '32px-Lich_Form',
        //   skill_5_name: '',
        //   weapon_1: 'Staff',
        //   weapon_1sigil_1: '32px-Superior_Sigil_of_Intelligence',
        //   weapon_1sigil_1_name: '上海',
        //   weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
        //   weapon_1sigil_2_name: '上海',
        //   weapon_2: 'A/F',
        //   weapon_2sigil_1: '32px-Superior_Sigil_of_Exposure',
        //   weapon_2sigil_1_name: '上海',
        //   weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
        //   weapon_2sigil_2_name: '上海',
        //   rune: '32px-Superior_Rune_of_the_Lynx',
        //   runename: '',
        //   amulet: '32px-Marauder_Amulet',
        //   amuletname: '',
        //   rate: '4.5',
        //   comment: ''
        // }
      ],
      tableData_good: [
        // 盗贼
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: 'Marauder S/P',
          skill_1: '32px-Withdraw',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Roll_for_Initiative',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          skill_3: '32px-Shadowstep',
          skill_3_name: '32px-Legendary_Dragon_Stance',
          skill_4: '32px-Signet_of_Agility',
          skill_4_name: '32px-Legendary_Dragon_Stance',
          skill_5: '32px-Dagger_Storm',
          skill_5_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'Sw/P',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Savagery',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'SB',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Eagle',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4.4',
          comment: ''
        },
        // 盗贼
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: 'Power S/D',
          skill_1: '32px-Withdraw',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Roll_for_Initiative',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          skill_3: '32px-Shadowstep',
          skill_3_name: '32px-Legendary_Dragon_Stance',
          skill_4: '32px-Signet_of_Agility',
          skill_4_name: '32px-Legendary_Dragon_Stance',
          skill_5: '32px-Dagger_Storm',
          skill_5_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'Sw/D',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Compounding',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'SB',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Divinity',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '3.5',
          comment: ''
        },
        // 盗贼
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: 'Marauder Rifle',
          skill_1: '32px-Withdraw',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Mercy',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          skill_3: '32px-Shadowstep',
          skill_3_name: '32px-Legendary_Dragon_Stance',
          skill_4: '32px-Signet_of_Agility',
          skill_4_name: '32px-Legendary_Dragon_Stance',
          skill_5: '32px-Dagger_Storm',
          skill_5_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'Rifle',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Separation',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Sw/D',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Opportunity',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Courage',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Strength',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.4',
          comment: ''
        }, //工程
        {
          professionicon: 'Dark-icon-engineer',
          bdname: 'Core Grenadier',
          skill_1: '32px-Healing_Turret',
          skill_1_name: '',
          skill_2: '32px-Elixir_S',
          skill_2_name: '',
          skill_3: '32px-Grenade_Kit',
          skill_3_name: '',
          skill_4: '32px-Elixir_B',
          skill_4_name: '',
          skill_5: '32px-Elixir_X',
          skill_5_name: '',
          weapon_1: 'Rifle',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Divinity',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4',
          comment: ''
        },
        // 守护
        {
          professionicon: 'Dark-icon-guardian',
          bdname: 'Burst Burning',
          skill_1: '32px-Litany_of_Wrath',
          skill_1_name: '',
          skill_2: '32px-Contemplation_of_Purity',
          skill_2_name: '',
          skill_3: '32px-Smite_Condition',
          skill_3_name: '',
          skill_4: "32px-Judge's_Intervention",
          skill_4_name: '',
          skill_5: '32px-Renewed_Focus',
          skill_5_name: '',
          weapon_1: 'Sw/F',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Doom',
          weapon_2sigil_2_name: '上海',
          weapon_2: 'Sc/T',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Traveler',
          runename: '',
          amulet: '32px-Carrion_Amulet',
          amuletname: '',
          rate: '4.4',
          comment: ''
        },
        // 守护
        {
          professionicon: 'Dark-icon-guardian',
          bdname: 'Core Symbol Bunker',
          skill_1: '32px-Litany_of_Wrath',
          skill_1_name: '',
          skill_2: '32px-Smite_Condition',
          skill_2_name: '',
          skill_3: "32px-Judge's_Intervention",
          skill_3_name: '',
          skill_4: '32px-Contemplation_of_Purity',
          skill_4_name: '',
          skill_5: '32px-Renewed_Focus',
          skill_5_name: '',
          weapon_1: 'Sc/Sh',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          weapon_2: 'M/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Intelligence',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: "32px-Mender's_Amulet",
          amuletname: '',
          rate: '4.5',
          comment: ''
        },
        // 守护
        {
          professionicon: 'Dark-icon-guardian',
          bdname: 'Radiant Greatsword (PvP)',
          skill_1: '32px-Shelter',
          skill_1_name: '',
          skill_2: '32px-Contemplation_of_Purity',
          skill_2_name: '',
          skill_3: "32px-Judge's_Intervention",
          skill_3_name: '',
          skill_4: '32px-Smite_Condition',
          skill_4_name: '',
          skill_5: '32px-Renewed_Focus',
          skill_5_name: '',
          weapon_1: 'Gs',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          weapon_2: 'Sw/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4.4',
          comment: ''
        },
        // 幻术
        {
          professionicon: 'Dark-icon-mesmer',
          bdname: 'Core Shatter',
          skill_1: '32px-Mirror',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Mantra_of_Pain',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          skill_3: '32px-Blink',
          skill_3_name: '32px-Legendary_Dragon_Stance',
          skill_4: '32px-Decoy',
          skill_4_name: '32px-Legendary_Dragon_Stance',
          skill_5: '32px-Mass_Invisibility',
          skill_5_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'Sw/T',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'GS',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Exploitation',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Compounding',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Scholar',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4',
          comment: ''
        },
        // 幻术
        {
          professionicon: 'Dark-icon-mirage',
          bdname: 'Carrion Axe',
          skill_1: '32px-False_Oasis',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Signet_of_Illusions',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          skill_3: '32px-Blink',
          skill_3_name: '32px-Legendary_Dragon_Stance',
          skill_4: '32px-Skill',
          skill_4_name: '32px-Legendary_Dragon_Stance',
          skill_5: '32px-Jaunt',
          skill_5_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'A/P',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Sw/T',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Adventurer',
          runename: '',
          amulet: '32px-Carrion_Amulet',
          amuletname: '',
          rate: '4.2',
          comment: ''
        },
        // 魂武
        {
          professionicon: 'Dark-icon-renegade',
          bdname: 'Retribution Kalla',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Dwarf_Stance',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'SB',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Purging',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Staff',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Resistance',
          runename: '',
          amulet: "32px-Mender's_Amulet",
          amuletname: '',
          rate: '4',
          comment: ''
        },
        // 魂武
        {
          professionicon: 'Dark-icon-revenant',
          bdname: 'Core Mallyx',
          skill_1: '32px-Legendary_Demon_Stance',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Dwarf_Stance',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'M/A',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Staff',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: "32px-Sage's_Amulet",
          amuletname: '',
          rate: '4.3',
          comment: ''
        },
        //工程
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Explosive Hammer',
          skill_1: '32px-Healing_Turret',
          skill_1_name: '',
          skill_2: '32px-Elixir_U',
          skill_2_name: '',
          skill_3: '32px-Elixir_Gun',
          skill_3_name: '',
          skill_4: '32px-Bulwark_Gyro',
          skill_4_name: '',
          skill_5: '32px-Elite_Mortar_Kit',
          skill_5_name: '',
          weapon_1: 'Ham',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Intelligence',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',

          rune: '32px-Superior_Rune_of_Resistance',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4',
          comment: ''
        },
        // 游侠
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: "Sic 'Em Sniper",
          skill_1: '32px-_We_Heal_As_One',
          skill_1_name: '',
          skill_2: "32px-_Sic_'Em_",
          skill_2_name: '',
          skill_3: '32px-Quickening_Zephyr',
          skill_3_name: '',
          skill_4: '32px-Lightning_Reflexes',
          skill_4_name: '',
          skill_5: '32px-_Strength_of_the_Pack',
          skill_5_name: '',
          weapon_1: 'LB',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Separation',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'GS',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Intelligence',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Divinity',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        },
        //战士
        {
          professionicon: 'Dark-icon-spellbreaker',
          bdname: 'Strength Dagger',
          skill_1: '32px-Mending',
          skill_1_name: '',
          skill_2: '32px-_Shake_It_Off_',
          skill_2_name: '',
          skill_3: "32px-Bull's_Charge",
          skill_3_name: '',
          skill_4: '32px-Frenzy',
          skill_4_name: '',
          skill_5: '32px-Rampage',
          skill_5_name: '',
          weapon_1: 'GS',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Intelligence',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'D/Sh',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Absorption',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Fighter',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        },

        //战士
        {
          professionicon: 'Dark-icon-warrior',
          bdname: 'Greataxe',
          skill_1: '32px-Mending',
          skill_1_name: '',
          skill_2: '32px-_Shake_It_Off_',
          skill_2_name: '',
          skill_3: "32px-Bull's_Charge",
          skill_3_name: '',
          skill_4: '32px-_For_Great_Justice_',
          skill_4_name: '',
          skill_5: '32px-Rampage',
          skill_5_name: '',
          weapon_1: 'GS',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'A/Sh',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Intelligence',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Battle',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Fighter',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '4',
          comment: ''
        }, //元素
        {
          professionicon: 'Dark-icon-weaver',
          bdname: 'D/F Lightning Rod',
          skill_1: '32px-Signet_of_Restoration',
          skill_1_name: '',
          skill_2: '32px-Twist_of_Fate',
          skill_2_name: '',
          skill_3: '32px-Lightning_Flash',
          skill_3_name: '',
          skill_4: '32px-Primordial_Stance',
          skill_4_name: '',
          skill_5: '32px-Tornado',
          skill_5_name: '',
          weapon_1: 'D/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',

          rune: '32px-Superior_Rune_of_Divinity',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.3',
          comment: ''
        }, //元素
        {
          professionicon: 'Dark-icon-weaver',
          bdname: 'Freshweaver',
          skill_1: '32px-Glyph_of_Elemental_Harmony',
          skill_1_name: '',
          skill_2: '32px-Twist_of_Fate',
          skill_2_name: '',
          skill_3: '32px-Lightning_Flash',
          skill_3_name: '',
          skill_4: '32px-Arcane_Blast',
          skill_4_name: '',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          skill_5_name: '',
          weapon_1: 'Sc/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',

          rune: '32px-Superior_Rune_of_the_Scholar',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '3.4',
          comment: ''
        }
      ],
      tableData_test: [
        // 盗贼
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: 'Marauder Staff',
          skill_1: '32px-Withdraw',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Signet_of_Agility',
          skill_2_name: '32px-Legendary_Dragon_Stance',
          skill_3: '32px-Shadowstep',
          skill_3_name: '32px-Legendary_Dragon_Stance',
          skill_4: '32px-Skill',
          skill_4_name: '32px-Legendary_Dragon_Stance',
          skill_5: '32px-Dagger_Storm',
          skill_5_name: '32px-Legendary_Dragon_Stance',
          weapon_1: 'Staff',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Compounding',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'SB',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Eagle',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        },
        // //工程
        // {
        //   professionicon: 'Dark-icon-engineer',
        //   bdname: 'Inspector Gadget',
        //   skill_1: '32px-Med_Kit',
        //   skill_1_name: '',
        //   skill_2: '32px-Rocket_Boots',
        //   skill_2_name: '',
        //   skill_3: '32px-Utility_Goggles',
        //   skill_3_name: '',
        //   skill_4: '32px-Slick_Shoes',
        //   skill_4_name: '',
        //   skill_5: '32px-Elite_Mortar_Kit',
        //   skill_5_name: '',
        //   weapon_1: 'Staff',
        //   weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
        //   weapon_1sigil_1_name: '上海',
        //   weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
        //   weapon_1sigil_2_name: '上海',
        //   rune: '32px-Superior_Rune_of_Resistance',
        //   runename: '',
        //   amulet: '32px-Celestial_Amulet',
        //   amuletname: '',
        //   rate: 'N/A',
        //   comment: ''
        // },
        //死灵
        {
          professionicon: 'Dark-icon-necromancer',
          bdname: 'Well Bunker',
          skill_1: '32px-Well_of_Blood',
          skill_1_name: '',
          skill_2: '32px-Well_of_Power',
          skill_2_name: '',
          skill_3: '32px-Spectral_Walk',
          skill_3_name: '',
          skill_4: '32px-Spectral_Wall',
          skill_4_name: '',
          skill_5: '32px-Lich_Form',
          skill_5_name: '',
          weapon_1: 'D/Wh',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Staff',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Purging',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Dolyak',
          runename: '',
          amulet: "32px-Paladin's_Amulet",
          amuletname: '',
          rate: '4',
          comment: ''
        },
        // 游侠
        {
          professionicon: 'Dark-icon-ranger',
          bdname: 'Core Bunker',
          skill_1: '32px-Troll_Unguent',
          skill_1_name: '',
          skill_2: '32px-_Protect_Me',
          skill_2_name: '',
          skill_3: '32px-Quickening_Zephyr',
          skill_3_name: '',
          skill_4: '32px-Lightning_Reflexes',
          skill_4_name: '',
          skill_5: '32px-_Strength_of_the_Pack',
          skill_5_name: '',
          weapon_1: 'A/A',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Revocation',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Courage',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'GS',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Dolyak',
          runename: '',
          amulet: "32px-Paladin's_Amulet",
          amuletname: '',
          rate: '4.7',
          comment: ''
        },
        //死灵
        {
          professionicon: 'Dark-icon-scourge',
          bdname: 'PowerScourge',
          skill_1: '32px-Well_of_Blood',
          skill_1_name: '',
          skill_2: '32px-Signet_of_Undeath',
          skill_2_name: '',
          skill_3: '32px-Well_of_Suffering',
          skill_3_name: '',
          skill_4: '32px-Spectral_Armor',
          skill_4_name: '',
          skill_5: '32px-Ghastly_Breach',
          skill_5_name: '',
          weapon_1: 'D/Wh',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Battle',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'A/T',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Battle',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Chronomancer',
          runename: '',
          amulet: "32px-Demolisher's_Amulet",
          amuletname: '',
          rate: '4',
          comment: ''
        },
        //工程
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Might Scrapper',
          skill_1: '32px-Healing_Turret',
          skill_1_name: '',
          skill_2: '32px-Elixir_Gun',
          skill_2_name: '',
          skill_3: '32px-Elixir_B',
          skill_3_name: '',
          skill_4: '32px-Elixir_U',
          skill_4_name: '',
          skill_5: '32px-Elite_Mortar_Kit',
          skill_5_name: '',
          weapon_1: 'Ham',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Escape',
          weapon_1sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Strength',
          runename: '',
          amulet: "32px-Demolisher's_Amulet",

          amuletname: '',
          rate: '4',
          comment: ''
        },
        // 游侠
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: 'Poisonbeast',
          skill_1: '32px-Healing_Spring',
          skill_1_name: '',
          skill_2: '32px-_Protect_Me',
          skill_2_name: '',
          skill_3: "32px-Viper's_Nest",
          skill_3_name: '',
          skill_4: '32px-Signet_of_Renewal',
          skill_4_name: '',
          skill_5: '32px-Entangle',
          skill_5_name: '',
          weapon_1: 'SB',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Separation',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Sw/D',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Resistance',
          runename: '',
          amulet: '32px-Rabid_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        },
        //战士
        {
          professionicon: 'Dark-icon-warrior',
          bdname: 'Chasing Whirlwind',
          skill_1: '32px-Mending',
          skill_1_name: '',
          skill_2: '32px-_Shake_It_Off_',
          skill_2_name: '',
          skill_3: "32px-Bull's_Charge",
          skill_3_name: '',
          skill_4: '32px-Frenzy',
          skill_4_name: '',
          skill_5: '32px-Battle_Standard',
          skill_5_name: '',
          weapon_1: 'GS',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'Sw/A',
          weapon_2sigil_1: '32px-Superior_Sigil_of_Cleansing',
          weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_Hoelbrak',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: 'N/A',
          comment: ''
        },
        //元素
        {
          professionicon: 'Dark-icon-weaver',
          bdname: 'CES Lightning Rod',
          skill_1: '32px-Signet_of_Restoration',
          skill_1_name: '',
          skill_2: '32px-Lightning_Flash',
          skill_2_name: '',
          skill_3: '32px-Signet_of_Air',
          skill_3_name: '',
          skill_4: '32px-Conjure_Earth_Shield',
          skill_4_name: '',
          skill_5: '32px-Weave_Self',
          skill_5_name: '',
          weapon_1: 'Sw/F',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Cleansing',
          weapon_1sigil_2_name: '上海',

          rune: '32px-Superior_Rune_of_Divinity',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '3.5',
          comment: ''
        }
      ],
      tableData_draft: [
        //工程
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Super Elite Mortar Kit Funtime',
          skill_1: '32px-Med_Kit',
          skill_1_name: '',
          skill_2: '32px-Elixir_U',
          skill_2_name: '',
          skill_3: '32px-Blast_Gyro',
          skill_3_name: '',
          skill_4: '32px-Elixir_S',
          skill_4_name: '',
          skill_5: '32px-Elite_Mortar_Kit',
          skill_5_name: '',
          weapon_1: 'Ham',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exploitation',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Energy',
          weapon_1sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Chronomancer',
          runename: '',
          amulet: '32px-Berserker_Amulet',
          amuletname: '',
          rate: '',
          comment: ''
        }
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
          type: 'pvp',
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
  height: 19rem;
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
</style>
