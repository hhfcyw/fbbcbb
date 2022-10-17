export const mixindemo1 = {
    data(){
        return{
            show:true
        }
    },
    created(){
        console.log('我是mixindemo1')
    },
    methods:{
        changeshow(){
            this.show = !this.show
        }
    }
}

export const mixindemo2 = {
    created(){
        console.log('我是mixindemo2')
    },
}