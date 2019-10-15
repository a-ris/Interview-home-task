
const SKey='SKey';



class Store{
    getItems(){
        let data = localStorage.getItem(SKey);
        data = JSON.parse(data)||[];
        return data;
    }
    addItems(note){
        let data = this.getItems();
        data.push(note);
        localStorage.setItem(SKey,JSON.stringify(data));
    }
    removeItem(note){
        
    }

}
let inst = new Store();
export default inst;