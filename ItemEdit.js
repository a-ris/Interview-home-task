import React, {Component} from 'react';
import NewItem from './NewItem';
import Store from './Store';

class ItemEdit extends Component {

    constructor(props){
        super(props);

        this.ref = React.createRef();

        this.state={
            isEdit: false,
            title: '',
            text:''

        }
       
    }

    componentDidMount(){
        document.addEventListener('click', this.handleGlobalClick);
    }

    handleGlobalClick=(e)=>{
        console.log(this.ref);
        console.log('handGlobalClick',e)
        if(this.ref&& this.ref.current &&this.ref.current.contains(e.target)){
            this.startEdit();
        } else{
            this.stopEdit();
        }
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleGlobalClick);

    } 

    startEdit=()=>{
        this.setState({isEdit: true});
    }

    stopEdit=()=>{
        let{onChange}=this.props;
        let{title,text}=this.state;
        if(title || text){
            Store.addItems({
                title: title,
                text:text          
           
            });

            onChange && onChange();
        }
        
        this.setState({isEdit: false, title: '',text: ''});
    }

    handleClick=(e)=>{
        e.nativeEvent.stopImmediatePropagation();
        this.startEdit();
    }

    handleChange =(e, field)=>{

        this.setState({
            [field]:e.target.value
        });
    }

    

    renderEdit(){
        let{isEdit} = this.state;
        if(isEdit){
             return (
        <div className ="itemEdit" ref={this.ref}>
            <div className="itemEditTitle">
                <input type ="text" placeholder="Title" onChange={e=>this.handleChange(e,'title')}/> 
            </div>
            <div className="itemEditBody">
                <textarea placeholder="Text" onChange={e=>this.handleChange(e,'text')}/>
            </div>
            

         </div>
            );
        }
        return null;
    }


    render(){
       
       return(
           <div>
               <NewItem onClick ={this.handleClick}/>
               {this.renderEdit()}
           
           </div>   

        )
    }
  
}

export default ItemEdit;
