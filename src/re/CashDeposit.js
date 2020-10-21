import React, { Component } from 'react'
import './CSS/todo.css'
import axios from 'axios'

class CashDeposit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:"",
            balance: "",
        
            

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
        idhandler=(event)=>{
        this.setState({
        id:event.target.value
        })
    }

    
    balancehandler=(event)=>{
        this.setState({
            balance:event.target.value
        })
    }
    
    submitHandler = (event) =>{
      const { id, balance} = this.state
      event.preventDefault()
      console.log(this.state)
      axios.put('http://192.168.43.239:8080/api/v1/account/'+id+'/deposit/'+balance)
      .then(response =>{
          console.log(response)
      })
      .catch(error => {
          console.log(error)
      })
      
  }


    handleSubmit=(event)=>{
        alert("Deposit Successfully !!!!")
        console.log(this.state);
        this.setState({
            id:"",
            balance:"",
            
        })
        event.preventDefault()
    }




    render() {
      const { id, balance} = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>CashDeposit</h1>
                    <label>id :</label> <input type="text" value={id} onChange={this.idhandler} placeholder="id..." /><br/>
                    <label>Amount :</label> <input type="text"  value={balance} onChange={this.balancehandler} placeholder="Amount..." /><br/>
                    <button type="submit">Submit</button>
                </form>
                 </div>
        )
    }
}

export default CashDeposit