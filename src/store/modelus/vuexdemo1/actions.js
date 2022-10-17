// import axios from 'axios' 

// export default{
//     gettableList(context){
//         axios.get('/vuexdata.json')
//         .then(({data}) => {
//             context.commit('initdata',data)
//         })
//     },

//     // 触发全局的mutations
//     calltotalmutations(){
//         commit('全局的mutations',canshu,{root:true})
//     },
    
//     // 触发其他模块的mutations
//     callothermutations(){
//         commit(vuexdemo2/mutations,canshu,{root:true})
//     },

//     // 触发其他模块的action
//     calltotalactions(){
//         dispatch(vuexdemo2/action,canshu,{root:true})
//     },

//     //访问到全局的state 
//     gettotalstate(context){
//         context.rootState.state
//     },

//     //访问到全局的getter。
//     gettotalgetter(){
//         context.rootGetter.getter
//     }
// }