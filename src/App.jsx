import React from 'react';
import logo from './nonja.png';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            newItem:"",
            list :[]
        }
    }   

    addItem(todoValue){
        if(todoValue!==""){
            const newItem ={
                id: Date.now(),
                value:todoValue,
                isDone:false    
            };

            const list= [...this.state.list];
            list.push(newItem);

            this.setState({
                list,
                newItem:""
            });
        }
    }

    deleteItem(id){
        const list=[...this.state.list];
        const updatedlist = list.filter(item=>item.id !== id);
        this.setState({list:updatedlist})
    }

    updateInput(input){
        this.setState({newItem:input})
    }
    render(){
           return(
            <div>
                <img src={logo} width="100" height="100" className="logo"/>
                <h1 className ="app-title">Suraj ToDo App</h1>

                <div className="container">
                        Add An item...<br/><br/>
                        <div id="namer">
                            <div id="namer-input">
                    <input type="text" className="input-text" placeholder="write ToDo"
                    required value={this.state.newItem}
                    onChange={e => this.updateInput(e.target.value)}/>
                        <br/><br/>
                    <button     
                    onClick={()=>this.addItem(this.state.newItem)}
                    disabled={!this.state.newItem.length}
                    className="add-btn"
                    >
                        Add ToDo</button>  
                        </div>
                        </div>
                        <br/><br/><br/>
                        <div className="list">
                            <br/>
                            
                                {this.state.list.map(item =>{
                                    return(
                                      <ul>
                                        <  li key={item.id}>
                                         
                                           <input type="checkbox" 
                                           name="idDone"
                                           checked={item.isDone}
                                           onChange={()=>{}}
                                           />
                                           {item.value}
                                           &nbsp;&nbsp;&nbsp;<button 
                                           className="btn"
                                           onClick={()=>this.deleteItem(item.id)}> Delete</button>
                                        
                                        </li>
                                        <br/>
                                     </ul>
                                        
                                    );
                                })}
                               
                              
                                </div>                                                                              
                </div>
            </div>
           );

           
       }
}

export default App