import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from "./ContactData.css";
import axios from '../../../axios-order';
import Spinner from '../../../components/Spinner/Spinner';

export class ContactData extends Component {

    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false        
    }

     orderHandler=(event)=>{
        event.preventDefault(); 
        // console.log(this.props.ingredients);
        this.setState({ loading: true });
        const order = {
          ingredients: this.props.ingredients,
          price: this.props.price,
          customer: {
            name: "Vinay",
            address: {
              street: "Teststreet 1",
              zipCode: "562314",
              country: "India",
            },
            email: "vinay123@gmail.com",
          },
          deliveryMethod: "fastest",
        };
        axios
          .post("/orders.json", order)
          .then((response) => {
            this.setState({ loading: false});
            this.props.history.push('/');
          })
          .catch((error) => {
            this.setState({ loading: false });
            // console.log(error);
          });
         }   

  render() {
    let form=(
        <form action="">
            <input className={classes.Input} type="text" name="name" id="" placeholder='your name'/>
            <input className={classes.Input} type="email" name="email" id="" placeholder='your emial'/>
            <input className={classes.Input} type="text" name="street" id="" placeholder='street'/>
            <input className={classes.Input} type="text" name="postal" id="" placeholder='Postal Code'/>
            <Button btnType="Success" clicked={this.orderHandler}> ORDER</Button>
        </form> 
    );
    if(this.state.loading){
        form = <Spinner/>
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact data</h4>
        {form}
      </div>

    )
  }
}

export default ContactData;