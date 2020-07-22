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
          bdname: 'Power Bannerslave',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Banner_of_Strength',
          skill_3: '32px-Banner_of_Discipline',
          skill_4: '32px-Signet_of_Might',
          skill_5: '32px-Head_Butt',
          traits_1: 'Strength',
          traits_2: 'Discipline',
          traits_3: 'Berserker',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-dragonhunter',
          bdname: 'Power DPS',
          skill_1: '32px-Litany_of_Wrath',
          skill_2: '32px-Procession_of_Blades',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Bane_Signet',
          skill_5: "32px-Dragon's_Maw",
          traits_1: 'Zeal',
          traits_2: 'Radiance',
          traits_3: 'Dragonhunter',
          rate: '4.9',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: 'Condi DPS',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Flame',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Signet_of_Wrath',
          skill_5: '32px-Renewed_Focus',
          traits_1: 'Zeal',
          traits_2: 'Radiance',
          traits_3: 'Firebrand',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: 'Quickness Support Power\n DPS (Fractal)',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Sword_of_Justice',
          skill_3: '32px-Mantra_of_Potence',
          skill_4: '32px-Bane_Signet',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: 'Zeal',
          traits_2: 'Radiance',
          traits_3: 'Firebrand',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: 'Power Rifle DPS',
          skill_1: '32px-A.E.D.',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Laser_Disk',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: 'Firearms',
          traits_2: 'Explosives',
          traits_3: 'Holosmith',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: 'Power Sword DPS',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Rifle_Turret',
          skill_4: '32px-Laser_Disk',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: 'Firearms',
          traits_2: 'Explosives',
          traits_3: 'Holosmith',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: 'Boon Support Power DPS\n (Fractal)',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Dwarf_Stance',
          skill_3: '32px-_We_Heal_As_One',
          skill_4: '32px-Signet_of_the_Wild',
          skill_5: "32px-_Sic_'Em_",
          traits_1: 'Devastation',
          traits_2: 'Invocation',
          traits_3: 'Renegade',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: 'Power DPS',
          skill_1: '32px-Frost_Trap',
          skill_2: '32px-One_Wolf_Pack',
          skill_3: '32px-Glyph_of_Elemental_Harmony',
          skill_4: '32px-Primordial_Stance',
          skill_5: '32px-Glyph_of_Storms',
          traits_1: 'Skirmishing',
          traits_2: 'Beastmastery',
          traits_3: 'Soulbeast',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-weaver',
          bdname: 'Power DPS Sword',
          skill_1: '32px-Arcane_Blast',
          skill_2: '32px-Conjure_Fiery_Greatsword',
          skill_3: '32px-Blood_Reckoning',
          skill_4: '32px-Shattering_Blow',
          skill_5: '32px-Outrage',
          traits_1: 'Fire',
          traits_2: 'Air',
          traits_3: 'Weaver',
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
          bdname: 'Condi DPS',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Shattering_Blow',
          skill_3: '32px-Outrage',
          skill_4: '32px-Sundering_Leap',
          skill_5: '32px-Head_Butt',
          traits_1: 'Arms',
          traits_2: 'Discipline',
          traits_3: 'Berserker',
          rate: '4.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-berserker',
          bdname: 'Power DPS',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Wild_Blow',
          skill_3: '32px-Outrage',
          skill_4: '32px-Signet_of_Might',
          skill_5: '32px-Head_Butt',
          traits_1: 'Strength',
          traits_2: 'Discipline',
          traits_3: 'Berserker',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-daredevil',
          bdname: 'Power DPS (Fractal)',
          skill_1: '32px-Channeled_Vigor',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Fist_Flurry',
          skill_4: '32px-Skill',
          skill_5: '32px-Basilisk_Venom',
          traits_1: 'Deadly Arts',
          traits_2: 'Critical Strikes',
          traits_3: 'Daredevil',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: 'Support Healer',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Potence',
          skill_3: '32px-Bane_Signet',
          skill_4: '32px-Skill',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: 'Firebrand',
          traits_2: 'Radiance',
          traits_3: 'Honor',
          rate: '4.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-holosmith',
          bdname: 'Condi DPS',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Flamethrower',
          skill_5: '32px-Prime_Light_Beam',
          traits_1: 'Firearms',
          traits_2: 'Explosives',
          traits_3: 'Holosmith',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-mirage',
          bdname: 'Condi DPS Chaos (Fractal)',
          skill_1: '32px-False_Oasis',
          skill_2: '32px-Signet_of_Midnight',
          skill_3: '32px-Signet_of_Domination',
          skill_4: '32px-Crystal_Sands',
          skill_5: '32px-Jaunt',
          traits_1: 'Dueling',
          traits_2: 'Chaos',
          traits_3: 'Mirage',
          rate: '4.6',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: 'Boon Support Healer',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',
          traits_1: 'Salvation',
          traits_2: 'Devastation',
          traits_3: 'Renegade',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: 'Utility Condi DPS\n (Fractal)',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Blood_Is_Power',
          skill_3: '32px-Epidemic',
          skill_4: '32px-Trail_of_Anguish',
          skill_5: '32px-Plaguelands',
          traits_1: 'Curses',
          traits_2: 'Soul\n Reaping',
          traits_3: 'Scourge',
          rate: '4.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'Power DPS (Fractal)',
          skill_1: '32px-Glyph_of_Elemental_Harmony',
          skill_2: '32px-Signet_of_Fire',
          skill_3: '32px-Glyph_of_Storms',
          skill_4: '32px-Conjure_Lightning_Hammer',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: 'Air',
          traits_2: 'Arcane',
          traits_3: 'Tempest',
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-warrior',
          bdname: 'Power Bannerslave\n (Fractal)',
          skill_1: '32px-_To_the_Limit_',
          skill_2: '32px-Banner_of_Strength',
          skill_3: '32px-Banner_of_Discipline',
          skill_4: '32px-Throw_Bolas',
          skill_5: '32px-Rampage',
          traits_1: 'Strength',
          traits_2: 'Tactics',
          traits_3: 'Discipline',
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
          bdname: 'Power DPS (Fractal)',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Mantra_of_Pain',
          skill_3: '32px-Mirror_Images',
          skill_4: '32px-Phantasmal_Disenchanter',
          skill_5: '32px-Gravity_Well',
          traits_1: 'Dueling',
          traits_2: 'Domination',
          traits_3: 'Chronomancer',
          rate: '4.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: 'Boon Support Power DPS',
          skill_1: '32px-Malicious_Restoration',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Shadow_Flare',
          skill_4: '32px-Mercy',
          skill_5: '32px-Basilisk_Venom',
          traits_1: 'Deadly Arts',
          traits_2: 'Critical Strikes',
          traits_3: 'Deadeye',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-deadeye',
          bdname: 'Power DPS D/D (Fractal)',
          skill_1: '32px-Signet_of_Malice',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Shadow_Flare',
          skill_4: '32px-Skill',
          skill_5: '32px-Basilisk_Venom',
          traits_1: 'Deadly Arts',
          traits_2: 'Critical Strikes',
          traits_3: 'Deadeye',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-druid',
          bdname: 'Boon Support Healer\n (Fractal)',
          skill_1: '32px-Healing_Spring',
          skill_2: '32px-Sun_Spirit',
          skill_3: '32px-Frost_Spirit',
          skill_4: '32px-Storm_Spirit',
          skill_5: '32px-Spirit_of_Nature',
          traits_1: 'Skirmishing',
          traits_2: 'Nature\n Magic',
          traits_3: 'Druid',
          rate: '4.1',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-elementalist',
          bdname: 'Power DPS',
          skill_1: '32px-Glyph_of_Elemental_Harmony',
          skill_2: '32px-Glyph_of_Storms',
          skill_3: '32px-Conjure_Lightning_Hammer',
          skill_4: '32px-Conjure_Frost_Bow',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: 'Fire',
          traits_2: 'Water',
          traits_3: 'Arcane',
          rate: '2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-engineer',
          bdname: 'Power DPS',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Rifle_Turret',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: 'Explosives',
          traits_2: 'Firearms',
          traits_3: 'Tools',
          rate: '1.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-guardian',
          bdname: 'Power DPS',
          skill_1: '32px-Litany_of_Wrath',
          skill_2: '32px-_Retreat_',
          skill_3: '32px-Sword_of_Justice',
          skill_4: '32px-Bane_Signet',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: 'Zeal',
          traits_2: 'Radiance',
          traits_3: 'Virtues',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-mesmer',
          bdname: 'Power DPS',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Mantra_of_Pain',
          skill_3: '32px-Phantasmal_Defender',
          skill_4: '32px-Phantasmal_Disenchanter',
          skill_5: '32px-Signet_of_Humility',
          traits_1: 'Dueling',
          traits_2: 'Domination',
          traits_3: 'Illusions',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-necromancer',
          bdname: 'Well Support DPS',
          skill_1: '32px-Well_of_Blood',
          skill_2: '32px-Signet_of_Spite',
          skill_3: '32px-Well_of_Suffering',
          skill_4: '32px-Well_of_Corruption',
          skill_5: '32px-Summon_Flesh_Golem',
          traits_1: 'Spite',
          traits_2: 'Soul\n Reaping',
          traits_3: 'Blood Magic',
          rate: '2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-ranger',
          bdname: 'Power DPS',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Signet_of_the_Wild',
          skill_3: "32px-_Sic_'Em_",
          skill_4: '32px-Skill',
          skill_5: '32px-_Strength_of_the_Pack',
          traits_1: 'Marksmanship',
          traits_2: 'Skirmishing',
          traits_3: 'Beastmastery',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-reaper',
          bdname: 'Power DPS',
          skill_1: '32px-Signet_of_Vampirism',
          skill_2: '32px-Signet_of_Spite',
          skill_3: '32px-Well_of_Suffering',
          skill_4: '32px-Well_of_Darkness',
          skill_5: '32px-Summon_Flesh_Golem',
          traits_1: 'Spite',
          traits_2: 'Soul\n Reaping',
          traits_3: 'Reaper',
          rate: '4.2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-renegade',
          bdname: 'Condi DPS (Fractal)',
          skill_1: '32px-Legendary_Renegade_Stance',
          skill_2: '32px-Legendary_Demon_Stance',

          traits_1: 'Corruption',
          traits_2: 'Invocation',
          traits_3: 'Renegade',
          rate: '4.7',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scourge',
          bdname: 'Support Healer',
          skill_1: '32px-Sand_Flare',
          skill_2: '32px-Blood_Is_Power',
          skill_3: '32px-Desiccate',
          skill_4: '32px-Signet_of_Undeath',
          skill_5: '32px-Summon_Flesh_Golem',
          traits_1: 'Blood Magic',
          traits_2: 'Scourge',
          traits_3: 'Soul Reaping',
          rate: '4.1',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Healing Scrapper',
          skill_1: '32px-Med_Kit',
          skill_2: '32px-Bulwark_Gyro',
          skill_3: '32px-Elixir_Gun',
          skill_4: '32px-Purge_Gyro',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: 'Inventions',
          traits_2: 'Alchemy',
          traits_3: 'Scrapper',
          rate: '3.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-soulbeast',
          bdname: 'Condi DPS (Fractal)',
          skill_1: '32px-_We_Heal_As_One',
          skill_2: '32px-Sharpening_Stone',
          skill_3: '32px-Vulture_Stance',
          skill_4: "32px-Viper's_Nest",
          skill_5: '32px-One_Wolf_Pack',
          traits_1: 'Skirmishing',
          traits_2: 'Wilderness Survival',
          traits_3: 'Soulbeast',
          rate: '4.2',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-spellbreaker',
          bdname: 'Power Boonstrip\n Bannerslave (Fractal)',
          skill_1: '32px-_To_the_Limit_',
          skill_2: '32px-Banner_of_Strength',
          skill_3: '32px-Banner_of_Discipline',
          skill_4: '32px-Kick_(warrior_utility)',
          skill_5: '32px-Rampage',
          traits_1: 'Strength',
          traits_2: 'Discipline',
          traits_3: 'Spellbreaker',
          rate: '3.3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-thief',
          bdname: 'Power DPS',
          skill_1: '32px-Signet_of_Malice',
          skill_2: "32px-Assassin's_Signet",
          skill_3: '32px-Signet_of_Agility',
          skill_4: '32px-Skill',
          skill_5: '32px-Basilisk_Venom',
          traits_1: 'Deadly Arts',
          traits_2: 'Critical Strikes',
          traits_3: 'Trickery',
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
          bdname: 'Bannerzerker Power DPS',
          skill_1: '32px-Blood_Reckoning',
          skill_2: '32px-Kick_(warrior_utility)',
          skill_3: '32px-Banner_of_Strength',
          skill_4: '32px-Banner_of_Discipline',
          skill_5: '32px-Head_Butt',
          traits_1: 'Strength',
          traits_2: 'Discipline',
          traits_3: 'Berserker',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: 'Boon Support Healer',
          skill_1: '32px-Mantra_of_Recovery',
          skill_2: '32px-Signet_of_Inspiration',
          skill_3: '32px-Mimic',
          skill_4: '32px-Well_of_Action',
          skill_5: '32px-Signet_of_Humility',
          traits_1: 'Chaos',
          traits_2: 'Inspiration',
          traits_3: 'Chronomancer',
          rate: '0',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: 'Underwater Utility Boon\n Support',
          skill_1: '32px-Signet_of_the_Ether',
          skill_2: '32px-Signet_of_Inspiration',
          skill_3: '32px-Mimic',
          skill_4: '32px-Phantasmal_Disenchanter',
          skill_5: '32px-Time_Warp',
          traits_1: 'Chaos',
          traits_2: 'Inspiration',
          traits_3: 'Chronomancer',
          rate: '5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-chronomancer',
          bdname: 'Well Healsupport',
          skill_1: '32px-Well_of_Eternity',
          skill_2: '32px-Well_of_Precognition',
          skill_3: '32px-Signet_of_Inspiration',
          skill_4: '32px-Well_of_Recall',
          skill_5: '32px-Time_Warp',
          traits_1: 'Inspiration',
          traits_2: 'Dueling',
          traits_3: 'Chronomancer',
          rate: 'N/A',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-firebrand',
          bdname: 'Quickness Seraph DPS',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Mantra_of_Lore',
          skill_3: '32px-Mantra_of_Potence',
          skill_4: '32px-Signet_of_Wrath',
          skill_5: '32px-_Feel_My_Wrath_',
          traits_1: 'Radiance',
          traits_2: 'Honor',
          traits_3: 'Firebrand',
          rate: '4.7',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Boon Support Healer',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',

          traits_1: 'Salvation',
          traits_2: 'Devastation',
          traits_3: 'Herald',
          rate: '3.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-herald',
          bdname: 'Fractal Healer',
          skill_1: '32px-Legendary_Dragon_Stance',
          skill_2: '32px-Legendary_Centaur_Stance',

          traits_1: 'Salvation',
          traits_2: 'Devastation',
          traits_3: 'Herald',
          rate: '3.5',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-scrapper',
          bdname: 'Condi DPS',
          skill_1: '32px-Healing_Turret',
          skill_2: '32px-Grenade_Kit',
          skill_3: '32px-Bomb_Kit',
          skill_4: '32px-Flamethrower',
          skill_5: '32px-Elite_Mortar_Kit',
          traits_1: 'Firearms',
          traits_2: 'Explosives',
          traits_3: 'Scrapper',
          rate: '4',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'Boon Support Power DPS',
          skill_1: '32px-Arcane_Brilliance',
          skill_2: '32px-Signet_of_Fire',
          skill_3: '32px-Glyph_of_Storms',
          skill_4: '32px-Conjure_Lightning_Hammer',
          skill_5: '32px-Conjure_Fiery_Greatsword',
          traits_1: 'Fire',
          traits_2: 'Air',
          traits_3: 'Tempest',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'Healer and Boons',
          skill_1: '32px-_Wash_the_Pain_Away_',
          skill_2: '32px-_Feel_the_Burn_',
          skill_3: '32px-_Aftershock_',
          skill_4: '32px-_Flash-Freeze_',
          skill_5: '32px-_Rebound_',
          traits_1: 'Fire',
          traits_2: 'Water',
          traits_3: 'Tempest',
          traits_4: 'Air',
          rate: '3',
          skill_1_name: '',
          skill_2_name: '',
          skill_3_name: '',
          skill_4_name: '',
          skill_5_name: ''
        },
        {
          professionicon: 'Dark-icon-tempest',
          bdname: 'Underwater Power DPS',
          skill_1: '32px-Signet_of_Restoration',
          skill_2: '32px-Signet_of_Fire',
          skill_3: '32px-Arcane_Blast',
          skill_4: '32px-_Feel_the_Burn_',
          skill_5: '32px-_Rebound_',
          traits_1: 'Water',
          traits_2: 'Air',
          traits_3: 'Tempest',
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
          bdname: 'Healadin',
          skill_1: '32px-Mantra_of_Solace',
          skill_2: '32px-Smite_Condition',
          skill_3: '32px-Mantra_of_Lore',
          skill_4: '32px-Merciful_Intervention',
          skill_5: '32px-Signet_of_Courage',
          traits_1: 'Honor',
          traits_2: 'Valor',
          traits_3: 'Firebrand',
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
