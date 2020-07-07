<template>
    <div>
        <h3>Meta</h3>
        <div>
            <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="professionicon"
      label="专精图标"
      width="50">
    </el-table-column>
    <el-table-column
      prop="bdname"
      label="bd名称"
      width="50">
    </el-table-column>
    <el-table-column
      prop="skill_1"
      label="skill_1">
    </el-table-column>
      <el-table-column
      prop="skill_1_name"
      label="skill_1name">
    </el-table-column>
        <el-table-column
      prop="skill_2"
      label="skill_2">
    </el-table-column>
          <el-table-column
      prop="skill_2_name"
      label="skill_2name">
    </el-table-column>
        <el-table-column
      prop="skill_3"
      label="skill_3">
    </el-table-column>
          <el-table-column
      prop="skill_3_name"
      label="skill_3name">
    </el-table-column>
        <el-table-column
      prop="skill_4"
      label="skill_4">
    </el-table-column>
          <el-table-column
      prop="skill_4_name"
      label="skill_4name">
    </el-table-column>
        <el-table-column
      prop="skill_5"
      label="skill_5">
    </el-table-column>
          <el-table-column
      prop="skill_5_name"
      label="skill_5name">
    </el-table-column>
      <el-table-column
      prop="weapon_1"
      label="武器1">
    </el-table-column>
      <el-table-column
      prop="weapon_1sigil_1"
      label="法印1">
    </el-table-column>
       <el-table-column
      prop="weapon_1sigil_1_name"
      label="法印name">
    </el-table-column>
      <el-table-column
      prop="weapon_1sigil_2"
      label="法印2">
    </el-table-column>
        <el-table-column
      prop="weapon_1sigil_2_name"
      label="法印2name">
    </el-table-column>
      <el-table-column
      prop="weapon_2"
      label="武器2">
    </el-table-column>
      <el-table-column
      prop="weapon_2sigil_1"
      label="法印1">
    </el-table-column>
         <el-table-column
      prop="weapon_2sigil_1_name"
      label="法印1name">
    </el-table-column>
      <el-table-column
      prop="weapon_2sigil_2"
      label="法印2">
    </el-table-column>
         <el-table-column
      prop="weapon_2sigil_2_name"
      label="法印2name">
    </el-table-column>
      <el-table-column
      prop="rune"
      label="符文">
    </el-table-column>
       <el-table-column
      prop="runename"
      label="符文name">
    </el-table-column>
      <el-table-column
      prop="amulet"
      label="项链">
    </el-table-column>
      <el-table-column
      prop="amuletname"
      label="项链name">
    </el-table-column>
      <el-table-column
      prop="rate"
      label="评分">
    </el-table-column>
      <el-table-column
      prop="comment"
      label="评论">
    </el-table-column>
       <el-table-column align="center" label="操作">
         <template slot-scope="scope">
           <el-button type="text"
           size="mini"
           @click="changeInfo(scope.$index,scope.row,2)">修改</el-button>
                <el-button type="text"
           size="mini"
           @click="deleteInfo(scope.$index,scope.row,3)">删除</el-button>
         </template>
    </el-table-column>
  </el-table>
        </div>
        <h3>Great</h3>
        <h3>Good</h3>
        <h3>Test</h3>
        <h3>Draft</h3>

        <!-- metadialog -->
        
<el-dialog
  title="提示"
  :visible.sync="metadialogVisible"
  width="30%"
  :before-close="Closemetamodify">
    <el-input  v-model="modifydata.professionicon" placeholder="专精图标"></el-input>
    <el-input v-model="modifydata.bdname" placeholder="bd名称"></el-input>
    <el-input v-model="modifydata.skill_1" placeholder="skill_1"></el-input>
    <el-input v-model="modifydata.skill_1_name" placeholder="skill_1_name"></el-input>
    <el-input v-model="modifydata.skill_2" placeholder="skill_2"></el-input>
    <el-input v-model="modifydata.skill_2_name" placeholder="skill_2_name"></el-input>
    <el-input v-model="modifydata.skill_3" placeholder="skill_3"></el-input>
    <el-input v-model="modifydata.skill_3_name" placeholder="skill_3_name"></el-input>
    <el-input v-model="modifydata.skill_4" placeholder="skill_4"></el-input>
    <el-input v-model="modifydata.skill_4_name" placeholder="skill_4_name"></el-input>
    <el-input v-model="modifydata.skill_5" placeholder="skill_5"></el-input>
    <el-input v-model="modifydata.skill_5_name" placeholder="skill_5_name"></el-input>
    <el-input v-model="modifydata.weapon_1" placeholder="weapon_1"></el-input>
    <el-input v-model="modifydata.weapon_1sigil_1" placeholder="weapon_1sigil_1"></el-input>
    <el-input v-model="modifydata.weapon_1sigil_1_name" placeholder="weapon_1sigil_1_name"></el-input>
    <el-input v-model="modifydata.weapon_1sigil_2" placeholder="weapon_1sigil_2"></el-input>
    <el-input v-model="modifydata.weapon_1sigil_2_name" placeholder="weapon_1sigil_2_name"></el-input>
    <el-input v-model="modifydata.weapon_2" placeholder="weapon_2"></el-input>
    <el-input v-model="modifydata.weapon_2sigil_1" placeholder="weapon_2sigil_1"></el-input>
    <el-input v-model="modifydata.weapon_2sigil_1_name" placeholder="weapon_2sigil_1_name"></el-input>
    <el-input v-model="modifydata.weapon_2sigil_2" placeholder="weapon_2sigil_2"></el-input>
    <el-input v-model="modifydata.weapon_2sigil_2_name" placeholder="weapon_2sigil_2_name"></el-input>
    <el-input v-model="modifydata.rune" placeholder="符文"></el-input>
    <el-input v-model="modifydata.runename" placeholder="符文name"></el-input>
    <el-input v-model="modifydata.amulet" placeholder="项链"></el-input>
    <el-input v-model="modifydata.amuletname" placeholder="项链name"></el-input>
    <el-input v-model="modifydata.rate" placeholder="评分"></el-input>
    <el-input v-model="modifydata.comment" placeholder="评论"></el-input>

  <span slot="footer" class="dialog-footer">
    <el-button @click="metadialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </span>
</el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      metadialogVisible:false,
      modifydata:{
         professionicon: '',
          bdname: '',
          skill_1: '',
           skill_1_name: '',
          skill_2: '',
          skill_2_name: '',
          skill_3: '',
          skill_3_name: '',
          skill_4: '',
          skill_4_name: '',
          skill_5: '',
          skill_5_name: '',
          weapon_1: '',
          weapon_1sigil_1: '',
           weapon_1sigil_1_name: '',
          weapon_1sigil_2: '',
          weapon_1sigil_2_name: '',
            weapon_2: '',
          weapon_2sigil_1: '',
           weapon_2sigil_1_name: '',
          weapon_2sigil_2: '',
          weapon_2sigil_2_name: '',
          rune:'',
          runename:"",
          amulet:"",
          amuletname:"",
          rate:'',
          comment:""
      },
      tableData: [
        {
          professionicon: '魂武',
          bdname: '王小虎',
          skill_1: '上海',
           skill_1_name: '上海',
          skill_2: '上海',
          skill_2_name: '上海',
          skill_3: '上海',
          skill_3_name: '上海',
          skill_4: '上海',
          skill_4_name: '上海',
          skill_5: '上海',
          skill_5_name: '上海',
          weapon_1: '上海',
          weapon_1sigil_1: '上海',
           weapon_1sigil_1_name: '上海',
          weapon_1sigil_2: '上海',
          weapon_1sigil_2_name: '上海',
            weapon_2: '上海',
          weapon_2sigil_1: '上海',
           weapon_2sigil_1_name: '上海',
          weapon_2sigil_2: '上海',
          weapon_2sigil_2_name: '上海',
          rune:'',
          runename:"",
          amulet:"",
          amuletname:"",
          rate:'',
          comment:""
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市'
        }
      ]
    }
  },
  methods: {
    confirm(){
    console.log(this.tableData)
    },
    Closemetamodify(){
      this.metadialogVisible=false;
    },
    changeInfo(index, row, type) {
      this.metadialogVisible=true
      console.log(index)
      console.log(row)
      this.modifydata=row
    },
    deleteInfo(index, row, type) {
      console.log(index)
      console.log(row)
    }
  }
}
</script>
<style lang="less" scoped>
h3 {
  font-size: 24px;
}
</style>
