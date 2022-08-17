import React, { Component } from "react";
import Aux from "../../hoc/Aux1";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
    // showSideDrawer: true, first value
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer  
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

// const layout = ( props ) => (
//     <Aux>
//         <Toolbar />
//         <SideDrawer/>
//         {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
//         <main className={classes.Content}>
//             {props.children}
//         </main>
//     </Aux>
// );

export default Layout;
