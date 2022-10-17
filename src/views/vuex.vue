<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-input @change="handleinputnChange" v-model="newValue"></el-input>
    <el-button type="primary" @click="add">添加</el-button>
    <p>---------------------</p>
    <el-button type="primary" @click="addstateobj">为state添加属性(registerModule动态注册)</el-button>
    <el-button type="primary" @click="addstateobj">为state添加属性(vue.set)</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      multipleSelection: [],
      newValue:''
    };
  },
  computed: {
    ...mapState("vuexdemo1", {
      tableList: (state) => state.tableList,
      inputValue: (state) => state.inputValue
    }),
    ...mapGetters(),
  },
  created() {
    this.gettableList();
  },
  methods: {
    ...mapMutations("vuexdemo1", ["addtabledata","deletetabledata","addstatedata"]),
    ...mapActions("vuexdemo1", ["gettableList"]),
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    handleinputnChange(e){
        console.log(e);
    },
    add(){
        this.addtabledata(this.newValue)
    },
    handleDelete(index, row){
        console.log(index,row.address)
        this.deletetabledata(index)
    },
    addstateobj(){
      // this.$store.registerModule(['vuexdemo1','child'],{
      //   state:{
      //     newdata:{

      //     }
      //   }                   
      // })

      this.$store.registerModule('vuexdemo1',{
        state:{
          newdata:{

          }
        }                   
      })
    },
    addstateobjtest(){
      // this.$store.registerModule(['vuexdemo1','child'],{
      //   state:{
      //     newdata:{

      //     }
      //   }                   
      // })

      this.$store.registerModule('vuexdemo1',{
        state:{
          newdata:{

          }
        }                   
      })
    }
  },
};
</script>