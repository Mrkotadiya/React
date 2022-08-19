import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  
  // :- eject code
  // state={
  //   show:true
  // }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({show:false});
  //   },5000);  
  // }

  render () {
    return (
      <div>
        <Layout>
         <BurgerBuilder /> 
         {/* {this.state.show ?  <BurgerBuilder /> : null}   :- eject code*/   } 
        </Layout>
      </div>
    );
  }
}

export default App;
