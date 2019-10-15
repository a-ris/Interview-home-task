import React, {Component} from 'react';
import Store from './Store';



class Item extends Component {

    constructor(props){
        super(props);

        this.ref = React.createRef();

        this.state={
            isEdit: false,
            title: '',
            text:''

        }
       
    }

    

     handleClickD(e) {
    if(window.confirm("Are you sure you want to delete this note?")){
        } 
     }
    

    render(){
        let { item } = this.props;
        if(item){
            let {title, text} = item;
           
            return (                              
             
                <div className ="item">
                
                 <button className="removeB"
                   onClick={(e) => {this.handleClickD(e)
                 }}>
                  
                    x
                  </button>
                   
                  <p className="itemTitle">{title} </p>
                <p>{text}</p>
                </div>       
            );
       
    
        }
    
        return null;
    
    }
  
}

export default Item;
