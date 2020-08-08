<template>
<div class="container">
    <navigation></navigation>
           <!-- title -->
    <div class="content">
               <h2 class="pagetitle">{{bdname}}</h2>
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
<!--     
<iframe id="my-iframe" width="1115" height="3400"
frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" 
 src="./bds/Herald - Condition Mallyx.html"></iframe> -->

<iframe id="my-iframe" width="1115" height="8800"
frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" 
 :src="`./bds/${bdpage}`" ></iframe>


 <!-- <div data-armory-embed="skills" data-armory-ids="5507,5508,5510,5515"></div> -->

</div>
    
    
</template>

<script>
import navigation from '@/components/navigation.vue'

// import '@/plugins/Embed_.js'
export default {
  data() {
    return {
      bdname: '',
      bdpage: '',
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
        }, //元素
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
      ]
    }
  },
  created() {
    let parms = this.parseUrl()
    this.bdname = parms.bd
    console.log(parms)

    // pvp部分
    if (parms.type == 'pvp' && parms.scope == 'meta') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'pvp_meta_1.html'
          break
        case '1':
          this.bdpage = 'pvp_meta_2.html'
          break
        case '2':
          this.bdpage = 'pvp_meta_3.html'
          break
        case '3':
          this.bdpage = 'pvp_meta_4.html'
          break
        case '4':
          this.bdpage = 'pvp_meta_5.html'
          break
        case '5':
          this.bdpage = 'pvp_meta_6.html'
          break
      }
    } //此处开始 ike
    if (parms.type == 'pvp' && parms.scope == 'great') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'pvp_great_1.html'
          break
        case '1':
          this.bdpage = 'pvp_great_2.html'
          break
        case '2':
          this.bdpage = 'pvp_great_3.html'
          break
        case '3':
          this.bdpage = 'pvp_great_4.html'
          break
        case '4':
          this.bdpage = 'pvp_great_5.html'
          break
        case '5':
          this.bdpage = 'pvp_great_6.html'
          break
      }
    }
    if (parms.type == 'pvp' && parms.scope == 'good') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'pvp_good_1.html'
          break
        case '1':
          this.bdpage = 'pvp_good_2.html'
          break
        case '2':
          this.bdpage = 'pvp_good_3.html'
          break
        case '3':
          this.bdpage = 'pvp_good_4.html'
          break
        case '4':
          this.bdpage = 'pvp_good_5.html'
          break
        case '5':
          this.bdpage = 'pvp_good_6.html'
          break
        case '6':
          this.bdpage = 'pvp_good_7.html'
          break
        case '7':
          this.bdpage = 'pvp_good_8.html'
          break
        case '8':
          this.bdpage = 'pvp_good_9.html'
          break
        case '9':
          this.bdpage = 'pvp_good_10.html'
          break
        case '10':
          this.bdpage = 'pvp_good_11.html'
          break
        case '11':
          this.bdpage = 'pvp_good_12.html'
          break
        case '12':
          this.bdpage = 'pvp_good_13.html'
          break
        case '13':
          this.bdpage = 'pvp_good_14.html'
          break
        case '14':
          this.bdpage = 'pvp_good_15.html'
          break
        case '15':
          this.bdpage = 'pvp_good_16.html'
          break
        case '16':
          this.bdpage = 'pvp_good_17.html'
          break
      }
    }
    if (parms.type == 'pvp' && parms.scope == 'test') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'pvp_test_1.html'
          break
        case '1':
          this.bdpage = 'pvp_test_2.html'
          break
        case '2':
          this.bdpage = 'pvp_test_3.html'
          break
        case '3':
          this.bdpage = 'pvp_test_4.html'
          break
        case '4':
          this.bdpage = 'pvp_test_5.html'
          break
        case '5':
          this.bdpage = 'pvp_test_6.html'
          break
        case '6':
          this.bdpage = 'pvp_test_7.html'
          break
        case '7':
          this.bdpage = 'pvp_test_8.html'
          break
      }
    }
    if (parms.type == 'pvp' && parms.scope == 'draft') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'pvp_draft_1.html'
          break
      }
    }
    // 碎层部分
    if (parms.type == 'fractal' && parms.scope == 'recommended') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'fractal_recommended_1.html'
          break
        case '1':
          this.bdpage = 'fractal_recommended_2.html'
          break
        case '2':
          this.bdpage = 'fractal_recommended_3.html'
          break
        case '3':
          this.bdpage = 'fractal_recommended_4.html'
          break
        case '4':
          this.bdpage = 'fractal_recommended_5.html'
          break
        case '5':
          this.bdpage = 'fractal_recommended_6.html'
          break
        case '6':
          this.bdpage = 'fractal_recommended_7.html'
          break
        case '7':
          this.bdpage = 'fractal_recommended_8.html'
          break
        case '8':
          this.bdpage = 'fractal_recommended_9.html'
          break
      }
    }
    if (parms.type == 'fractal' && parms.scope == 'great') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'fractal_great_1.html'
          break
        case '1':
          this.bdpage = 'fractal_great_2.html'
          break
        case '2':
          this.bdpage = 'fractal_great_3.html'
          break
        case '3':
          this.bdpage = 'fractal_great_4.html'
          break
        case '4':
          this.bdpage = 'fractal_great_5.html'
          break
        case '5':
          this.bdpage = 'fractal_great_6.html'
          break
        case '6':
          this.bdpage = 'fractal_great_7.html'
          break
        case '7':
          this.bdpage = 'fractal_great_8.html'
          break
        case '8':
          this.bdpage = 'fractal_great_9.html'
          break
        case '9':
          this.bdpage = 'fractal_great_10.html'
          break
      }
    }
    if (parms.type == 'fractal' && parms.scope == 'viable') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'fractal_viable_1.html'
          break
        case '1':
          this.bdpage = 'fractal_viable_2.html'
          break
        case '2':
          this.bdpage = 'fractal_viable_3.html'
          break
        case '3':
          this.bdpage = 'fractal_viable_4.html'
          break
        case '4':
          this.bdpage = 'fractal_viable_5.html'
          break
        case '5':
          this.bdpage = 'fractal_viable_6.html'
          break
        case '6':
          this.bdpage = 'fractal_viable_7.html'
          break
        case '7':
          this.bdpage = 'fractal_viable_8.html'
          break
        case '8':
          this.bdpage = 'fractal_viable_9.html'
          break
        case '9':
          this.bdpage = 'fractal_viable_10.html'
          break
        case '10':
          this.bdpage = 'fractal_viable_11.html'
          break
        case '11':
          this.bdpage = 'fractal_viable_12.html'
          break
        case '12':
          this.bdpage = 'fractal_viable_13.html'
          break
        case '13':
          this.bdpage = 'fractal_viable_14.html'
          break
        case '14':
          this.bdpage = 'fractal_viable_15.html'
          break
        case '15':
          this.bdpage = 'fractal_viable_16.html'
          break
        case '16':
          this.bdpage = 'fractal_viable_17.html'
          break
      }
    }
    if (parms.type == 'fractal' && parms.scope == 'test') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'fractal_test_1.html'
          break
        case '1':
          this.bdpage = 'fractal_test_2.html'
          break
        case '2':
          this.bdpage = 'fractal_test_3.html'
          break
        case '3':
          this.bdpage = 'fractal_test_4.html'
          break
        case '4':
          this.bdpage = 'fractal_test_5.html'
          break
        case '5':
          this.bdpage = 'fractal_test_6.html'
          break
        case '6':
          this.bdpage = 'fractal_test_7.html'
          break
        case '7':
          this.bdpage = 'fractal_test_8.html'
          break
        case '8':
          this.bdpage = 'fractal_test_9.html'
          break
        case '9':
          this.bdpage = 'fractal_test_10.html'
          break
        case '10':
          this.bdpage = 'fractal_test_11.html'
          break
      }
    }
    if (parms.type == 'fractal' && parms.scope == 'draft') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'fractal_draft_1.html'
          break
      }
    }
    // 团本部分
    if (parms.type == 'raid' && parms.scope == 'recommended') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'raid_recommended_1.html'
          break
        case '1':
          this.bdpage = 'raid_recommended_2.html'
          break
        case '2':
          this.bdpage = 'raid_recommended_3.html'
          break
        case '3':
          this.bdpage = 'raid_recommended_4.html'
          break
        case '4':
          this.bdpage = 'raid_recommended_5.html'
          break
        case '5':
          this.bdpage = 'raid_recommended_6.html'
          break
        case '6':
          this.bdpage = 'raid_recommended_7.html'
          break
        case '7':
          this.bdpage = 'raid_recommended_8.html'
          break
        case '8':
          this.bdpage = 'raid_recommended_9.html'
          break
        case '9':
          this.bdpage = 'raid_recommended_10.html'
          break
        case '10':
          this.bdpage = 'raid_recommended_11.html'
          break
        case '11':
          this.bdpage = 'raid_recommended_12.html'
          break
        case '12':
          this.bdpage = 'raid_recommended_13.html'
          break
        case '13':
          this.bdpage = 'raid_recommended_14.html'
          break
        case '14':
          this.bdpage = 'raid_recommended_15.html'
          break
        case '15':
          this.bdpage = 'raid_recommended_16.html'
          break
        case '16':
          this.bdpage = 'raid_recommended_17.html'
          break
        case '17':
          this.bdpage = 'raid_recommended_18.html'
          break
      }
    }
    if (parms.type == 'raid' && parms.scope == 'great') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'raid_draft_1.html'
          break
        case '1':
          this.bdpage = 'raid_draft_2.html'
          break
        case '2':
          this.bdpage = 'raid_draft_3.html'
          break
        case '3':
          this.bdpage = 'raid_draft_4.html'
          break
        case '4':
          this.bdpage = 'raid_draft_5.html'
          break
        case '5':
          this.bdpage = 'raid_draft_6.html'
          break
        case '6':
          this.bdpage = 'raid_draft_7.html'
          break
        case '7':
          this.bdpage = 'raid_draft_8.html'
          break
        case '8':
          this.bdpage = 'raid_draft_9.html'
          break
        case '9':
          this.bdpage = 'raid_draft_10.html'
          break
        case '10':
          this.bdpage = 'raid_draft_11.html'
          break
        case '11':
          this.bdpage = 'raid_draft_12.html'
          break
        case '12':
          this.bdpage = 'raid_draft_13.html'
          break
      }
    }
    if (parms.type == 'raid' && parms.scope == 'viable') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'raid_viable_1.html'
          break
        case '1':
          this.bdpage = 'raid_viable_2.html'
          break
        case '2':
          this.bdpage = 'raid_viable_3.html'
          break
        case '3':
          this.bdpage = 'raid_viable_4.html'
          break
        case '4':
          this.bdpage = 'raid_viable_5.html'
          break
        case '5':
          this.bdpage = 'raid_viable_6.html'
          break
        case '6':
          this.bdpage = 'raid_viable_7.html'
          break
        case '7':
          this.bdpage = 'raid_viable_8.html'
          break
        case '8':
          this.bdpage = 'raid_viable_9.html'
          break
        case '9':
          this.bdpage = 'raid_viable_10.html'
          break
        case '10':
          this.bdpage = 'raid_viable_11.html'
          break
        case '11':
          this.bdpage = 'raid_viable_12.html'
          break
        case '12':
          this.bdpage = 'raid_viable_13.html'
          break
      }
    }
    if (parms.type == 'raid' && parms.scope == 'test') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'raid_test_1.html'
          break
        case '1':
          this.bdpage = 'raid_test_2.html'
          break
        case '2':
          this.bdpage = 'raid_test_3.html'
          break
        case '3':
          this.bdpage = 'raid_test_4.html'
          break
        case '4':
          this.bdpage = 'raid_test_5.html'
          break
      }
    }
    if (parms.type == 'raid' && parms.scope == 'draft') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'raid_draft_1.html'
          break
      }
    }
    // 战场部分
    if (parms.type == 'wvw' && parms.scope == 'meta') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'wvw_zerg_meta_1.html'
          break
        case '1':
          this.bdpage = 'wvw_zerg_meta_2.html'
          break
        case '2':
          this.bdpage = 'wvw_zerg_meta_3.html'
          break
        case '3':
          this.bdpage = 'wvw_zerg_meta_4.html'
          break
        case '4':
          this.bdpage = 'wvw_zerg_meta_5.html'
          break
        case '5':
          this.bdpage = 'wvw_zerg_meta_6.html'
          break
  
      }
    }
    if (parms.type == 'wvw' && parms.scope == 'great') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'wvw_zerg_great_1.html'
          break
        case '1':
          this.bdpage = 'wvw_zerg_great_2.html'
          break
        case '2':
          this.bdpage = 'wvw_zerg_great_3.html'
          break
        case '3':
          this.bdpage = 'wvw_zerg_great_4.html'
          break
        case '4':
          this.bdpage ='wvw_zerg_great_5.html'
          break
        case '5':
          this.bdpage = 'wvw_zerg_great_6.html'
          break
        case '6':
          this.bdpage = 'wvw_zerg_great_7.html'
          break
        case '7':
          this.bdpage = 'wvw_zerg_great_8.html'
          break
        case '8':
          this.bdpage = 'wvw_zerg_great_9.html'
          break
        case '9':
          this.bdpage = 'wvw_zerg_great_10.html'
          break
        case '10':
          this.bdpage = 'wvw_zerg_great_11.html'
          break
        case '11':
          this.bdpage = 'wvw_zerg_great_12.html'
          break
        case '12':
          this.bdpage = 'wvw_zerg_great_13.html'
          break
      }
    }
    if (parms.type == 'wvw' && parms.scope == 'good') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'wvw_zerg_good_1.html'
          break
        case '1':
          this.bdpage =  'wvw_zerg_good_2.html'
          break
        case '2':
          this.bdpage =  'wvw_zerg_good_3.html'
          break
        case '3':
          this.bdpage =  'wvw_zerg_good_4.html'
          break
        case '4':
          this.bdpage =  'wvw_zerg_good_5.html'
          break
         case '5':
          this.bdpage =  'wvw_zerg_good_6.html'
          break
      }
    }
    if (parms.type == 'wvw' && parms.scope == 'test') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'wvw_zerg_test_1.html'
          break

      }
    }
    if (parms.type == 'wvw' && parms.scope == 'draft') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'wvw_zerg_draft_1.html'
          break
        case '1':
          this.bdpage =  'wvw_zerg_draft_1.html'
          break
 
      }
    }
    if (parms.type == 'wvw' && parms.scope == 'greatbuilds') {
      switch (parms.id) {
         case '0':
          this.bdpage = 'wvw_small_great_1.html'
          break
        case '1':
          this.bdpage = 'wvw_small_great_2.html'
          break
        case '2':
          this.bdpage = 'wvw_small_great_3.html'
          break
        case '3':
          this.bdpage = 'wvw_small_great_4.html'
          break
        case '4':
          this.bdpage ='wvw_small_great_5.html'
          break
        case '5':
          this.bdpage = 'wvw_small_great_6.html'
          break
        case '6':
          this.bdpage = 'wvw_small_great_7.html'
          break
        case '7':
          this.bdpage = 'wvw_small_great_8.html'
          break
        case '8':
          this.bdpage = 'wvw_small_great_9.html'
          break
        case '9':
          this.bdpage = 'wvw_small_great_10.html'
          break
      }
    }
    if (parms.type == 'wvw' && parms.scope == 'goodbuilds') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'wvw_small_good_1.html'
          break
        case '1':
          this.bdpage = 'wvw_small_good_2.html'
          break
        case '2':
          this.bdpage = 'wvw_small_good_3.html'
          break
        case '3':
          this.bdpage = 'wvw_small_good_4.html'
          break
        case '4':
          this.bdpage ='wvw_small_good_5.html'
          break
        case '5':
          this.bdpage = 'wvw_small_good_6.html'
          break
        case '6':
          this.bdpage = 'wvw_small_good_7.html'
          break
        case '7':
          this.bdpage = 'wvw_small_good_8.html'
          break
        case '8':
          this.bdpage = 'wvw_small_good_9.html'
          break
        case '9':
          this.bdpage = 'wvw_small_good_10.html'
          break
        case '10':
          this.bdpage = 'wvw_small_good_11.html'
          break
        case '11':
          this.bdpage = 'wvw_small_good_12.html'
          break
      }
    }
    if (parms.type == 'wvw' && parms.scope == 'testbuilds') {
      switch (parms.id) {
           case '0':
          this.bdpage = 'wvw_small_test_1.html'
          break
        case '1':
          this.bdpage = 'wvw_small_test_2.html'
          break
        case '2':
          this.bdpage ='wvw_small_test_3.html'
          break
        case '3':
          this.bdpage ='wvw_small_test_4.html'
          break
        case '4':
          this.bdpage ='wvw_small_test_5.html'
          break
        case '5':
          this.bdpage ='wvw_small_test_6.html'
          break
        case '6':
          this.bdpage = 'wvw_small_test_7.html'
          break
        case '7':
          this.bdpage ='wvw_small_test_8.html'
          break
      }
    }
    if (parms.type == 'wvw' && parms.scope == 'draftbuilds') {
      switch (parms.id) {
        case '0':
          this.bdpage = 'Herald - Condition Mallyx.html'
          break
     
      }
    }
  },
  components: {
    navigation
  },
  methods: {
    // 获取url中的参数
    parseUrl() {
      var url = decodeURIComponent(location.href)
      console.log(url)
      var i = url.indexOf('?')
      if (i == -1) return
      var querystr = url.substr(i + 1)
      var arr1 = querystr.split('&')
      var arr2 = new Object()
      for (i in arr1) {
        var ta = arr1[i].split('=')
        arr2[ta[0]] = ta[1]
      }
      return arr2
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
  height: 92rem;
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

#my-iframe {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  // z-index: 9999;
  background-color: #111;
}
</style>
