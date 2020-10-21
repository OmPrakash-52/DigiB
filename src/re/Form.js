import React, { Component } from 'react'
import './CSS/todo.css'

import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:"",
            phoneno: "",
            firstName: "",
            lastName: "",
            balance: "",
            
        
            

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    //  changeHandler = (e) => {
    //      this.setState({[e.target.firstName]:e.target.value})
    // }
         idhandler=(event)=>{
        this.setState({
        id:event.target.value
        })
    }
    phonenohandler=(event)=>{
        this.setState({
           phoneno:event.target.value
        })
    }

    firsthandler=(event)=>{
        this.setState({
        firstName:event.target.value
        })
    }
    lasthandler=(event)=>{
        this.setState({
            lastName:event.target.value
        })
    }
    balancehandler=(event)=>{
        this.setState({
        balance:event.target.value
        })
    }
    

    submitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state)
        
    axios.post('http://192.168.43.239:8080/api/v1/account',
    {
        "id": this.state.id,
        "balance": this.state.balance,
        "phoneno": this.state.phoneno,
        "customer": {
            "id": this.state.id,
            "phoneno": this.state.phoneno,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName
        }
    }

        )
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    handleSubmit=(event)=>{
        alert("Registered Successfully !!!!")
        console.log(this.state);
        this.setState({
            id:" ",
            phoneno:" ",
            firstName:" ",
            lastName:" ",
            balance:" "
            
            
        })
        event.preventDefault()
    }




    render() {
        const { id,phoneno, firstName, lastName,balance} = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>User Registration</h1>
                    <label>id :</label> <input type="text" value={id} onChange={this.idhandler} placeholder="Customerid..." /><br/>
                   <label>FirstName :</label> <input type="text" value={firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br/>
                   <label>LastName :</label> <input type="text"  value={lastName} onChange={this.lasthandler} placeholder="LastName..." /><br/>
                   <label>phoneno :</label> <input type="text" value={phoneno}  onChange={this.phonenohandler} placeholder="Phoneno..." /><br/>
                   <label>Amount :</label> <input type="text" value={balance}  onChange={this.balancehandler} placeholder="balance" /><br/>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form