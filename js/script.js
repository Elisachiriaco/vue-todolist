const app = new Vue({
    el: '#app',
    data: {
        viaggio: [
            {   
                done : false,
                toDo: 'documenti di viaggio',
            },
            {   
                done : false,
                toDo: 'valigia',
            },
            {
                done : false,
                toDo: "informazioni per l'arrivo",
            },
            {   
                done : false,
                toDo: 'soldi',
            },
            {   
                done : false,
                toDo: 'tecnologia',
            },
        ],
        newToDo: '',
    },
    methods: {
        addToDo(){
            const item = {
                done: false,
                toDo: this.newToDo,
            }
            this.viaggio.push(item),
            this.newToDo = ''
        },
        removeToDo(i){
            this.viaggio.splice(i,1)
        }
    }
})

