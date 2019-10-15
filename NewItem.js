import React, {Component} from 'react';

class NewItem extends Component {
    handleClick=(e)=>{
        let{onClick}= this.props;
        onClick && onClick(e);
    }
    render(){
         return (
        <div className ="newItem" onClick ={this.handleClick}>
             <div className="newItemInput">Add new note</div> 
        </div>
        );
    }
  
}

export default NewItem;