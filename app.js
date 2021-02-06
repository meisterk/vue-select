const SelectApp = {
    data() {
        return {            
            auswahlmoeglichkeiten: [
                 {name: 'Käse', einheit: '100g'},
                 {name: 'Milch', einheit: 'l'},
                 {name: 'Eier', einheit: 'Stück'}
                ],
            ausgewaehlt:'Milch'       
        }
    },
    
    computed: {
        einheit(){
            for(let i=0; i<this.auswahlmoeglichkeiten.length; i++){
                if(this.auswahlmoeglichkeiten[i].name === this.ausgewaehlt){
                    return this.auswahlmoeglichkeiten[i].einheit;
                }
            }
            return 'x';
        }
    }
};
Vue.createApp(SelectApp).mount('#app');