import React, { Component } from 'react'
import axios from 'axios';
class CheckBalance extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:" ",
            
            
        
            

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
   

    
    
    

    submitHandler = (event) =>{

      const { id } = this.state
        
        event.preventDefault()
        console.log(this.state)
        
        axios.get('http://192.168.43.239:8080/api/v1/account/'+id)
            .then(response => {
                console.log(response.data);
                alert('you current balance is'+response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    handleSubmit=(event)=>{
        alert("Successfully !!!!")
        console.log(this.state);
        this.setState({
            id:" ",
            
            
            
        })
        event.preventDefault()
    }




    render() {
        const { id } = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler.bind(this)}>
                    <h1>Chech Balance</h1>
                    <label>Customer_id :</label> <input type="text" value={id} onChange={this.idhandler} placeholder="Customerid..." /><br/>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default CheckBalance