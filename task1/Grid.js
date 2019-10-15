import React, {Component} from 'react';
import Item from './Item';
import ItemEdit from './ItemEdit';

import Store from './Store';

class Grid extends Component {
    constructor(props){
        super(props);

        this.state={
            items:[]
        }
    }

    getData =()=>{
         let items = Store.getItems();
        this.setState({
            items: items
        })
    }

    componentDidMount(){
       this.getData();
      }

    render(){

        let{items} = this.state;

         return (
        <div>
            <ItemEdit onChange={this.getData}/>
            
            { <div className="grid">
                {
                    items.map((item,ix)=>{
                        return <Item key={ix} item ={item}/>
                    })
                } 
                
            </div> }
            
        </div>

        
        );
    }
  
}

export default Grid;
