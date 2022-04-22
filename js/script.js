const app = new Vue({
    el: '#app',
    data: {
        viaggio: [
            {
                toDo: 'documenti di viaggio',
                done : false
            },
            {
                toDo: 'valigia',
                done : false
            },
            {
                toDo: "informazioni per l'arrivo",
                done : false
            },
            {
                toDo: 'soldi',
                done : false
            },
            {
                toDo: 'tecnologia',
                done : false
            },
        ],
        newToDo: '',
    },
    methods: {
        addToDo(){
            const daFare = {
                toDo: this.newToDo,
                done: false
            }
            this.viaggio.push(daFare),
            this.newToDo = ''
        },
        removeToDo(i){
            this.viaggio.splice(i, 1)
        }
    }
})

