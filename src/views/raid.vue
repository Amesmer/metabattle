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
                     Section revised on: <i>June 18, 2020</i>
                    </div>
                  
                    </div>
              <div class="gamemode">
           <div class="title"><span>Recommended</span></div>
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
        // 症状插旗战士
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Condition Mallyx',
          skill_1: '32px-Legendary_Demon_Stance',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Dragon_Stance',
          skill_2_name: '',
           skill_3: '32px-Legendary_Dragon_Stance',
          skill_3_name: '',
           skill_4: '32px-Legendary_Dragon_Stance',
          skill_4_name: '',
           skill_5: '32px-Legendary_Dragon_Stance',
          skill_5_name: '',
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
          comment: '',
          traits_1:'Arms',
           traits_2:'Discipline',
            traits_3:'Berserker',

        }, //威能战士
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
        }, //直伤幻术
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
        }, //增益幻术
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
        }, //增益贼
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
        //dps贼
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
        //dps猎龙
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
        //德鲁伊
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
        //症状守护
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
        //增益守护
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
        //工程
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
        //剑工程
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
        //症状元素
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
        //增益破法
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
        //增益破法
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
        //直伤破法
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
        //直伤游侠
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
        //症状元素
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
        //直伤编织
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
        },
        //燃火
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
          weapon_1: 'L/B',
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }

      ],
      tableData_good: [
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
        },
        //燃火
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
          weapon_1: 'L/B',
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
        ,
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
          weapon_2sigil_2: '32px-Superior_Sigil_of_Revocation',
          weapon_2sigil_2_name: '上海',
          rune: '32px-Superior_Rune_of_the_Lynx',
          runename: '',
          amulet: '32px-Marauder_Amulet',
          amuletname: '',
          rate: '4.5',
          comment: ''
        }
      ],
      tableData_test: [
        // 魂武
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Condition Mallyx',
          skill_1: '32px-Legendary_Demon_Stance',
          skill_1_name: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Demon_Stance',
          skill_2_name: '32px-Legendary_Dragon_Stance',
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
          weapon_1: 'D/P',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'S/P',
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
        }, //元素
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'D/F Auramancer',
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
          weapon_1: 'D/P',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'S/P',
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
        }, //盗贼
        {
          professionicon: 'Dark-icon-thief',
          bdname: 'Core P/D Condition',
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
          weapon_1: 'D/P',
          weapon_1sigil_1: '32px-Superior_Sigil_of_Exposure',
          weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '32px-Superior_Sigil_of_Doom',
          weapon_1sigil_2_name: '上海',
          weapon_2: 'S/P',
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
        }
      ],
      tableData_draft: [
       
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
          bd: bdname
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
.traits{
  width: 4.2rem;
  display: flex;
  justify-content: space-evenly;

}
.equipment .traits span {
    width: 140px;
    justify-content: center;
    font-size: 16px;
}


</style>
