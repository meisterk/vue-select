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
            for(i in this.auswahlmoeglichkeiten){
                if(this.auswahlmoeglichkeiten[i].name === this.ausgewaehlt){
                    return this.auswahlmoeglichkeiten[i].einheit;
                }
            }
            return 'x';
        }
    }
};
Vue.createApp(SelectApp).mount('#app');