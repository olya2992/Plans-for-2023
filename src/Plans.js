import { Component } from "react";
import goal from './goal.png'
import heart from './ukraine.png'


export class Plans extends Component{
    state={
        userInput:'',
        planList:[]

    }
onChangeEvent(e){
   this.setState({userInput:e})
   console.log(e)
}
addItem(input){
    if (input === ''){
        alert('please type something')
    }
    else{
    let listArray = this.state.planList;
    listArray.push(input)
    this.setState({planList:listArray, userInput: ''})
    console.log(listArray)
}}

croccedWord(event){
    const li = event.target;
    li.classList.toggle('crossed')
}
deleteItem(){
    let listArray= this.state.planList;
    listArray = []
    this.setState({planList:listArray})
}
onSubmitEvent=(e)=>{
    e.preventDefault();
}
render(){
    return(
        <div>
            <form onSubmit={this.onSubmitEvent}>
<div className="container">
    <input 
    type='text'
    placeholder="Type your plans here..."
    onChange={(e) =>{this.onChangeEvent(e.target.value)}}
    value={this.state.userInput}/>
</div>

<div className="container">
    <button className="add" onClick={() =>this.addItem(this.state.userInput)}>Add</button>
</div>

<div className="container" >
    <ul>
        {this.state.planList.map((item,index) =>(
            <li onClick={this.croccedWord}  key={index}>
                <img src={goal} width='30px' alt="goal"/> 
                {item}
                </li>
        ))}
        <li><img src={heart} width='30px' alt="star"/> Praying for Ukraine</li>
    </ul>
</div>

<div className="container"> 
    <button className="delete" onClick={() => this.deleteItem()}>Delete</button>
    </div>
    </form>
</div>

    )

}

}


