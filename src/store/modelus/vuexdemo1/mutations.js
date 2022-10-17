import Vue from "vue";

export default{
    initdata(state,list){
        state.tableList = list
    },
    addtabledata(state,newdata){
        let obj = {
            address:newdata
        }
        state.tableList.push(obj)
        console.log(state.tableList);
    },
    deletetabledata(state,index){
        state.tableList.splice(index-1,1)
    },
    addstatedata(state){
        Vue.set(state.inputValue,'xiaoming')
    }
}