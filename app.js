const app = Vue.createApp({
    data(){
        return{
            books:[
                {id: 1, title: "goat matata", author: "fredrick"},
                {id: 2, title: "book of the wild", author: "tom"},
                {id: 3, title: "the ring", author: "jerry"}
            ],
            showBooks: true,
            title: 'OMRA Project',
            author:'Fredrick',
            age:20,
            x:0,
            y:0
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Another project'
        },
        toggleShowBooks(){
            this.showBooks =!this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        },
    }
})

app.mount('#app')