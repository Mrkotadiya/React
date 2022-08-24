import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    {/* <div>LOGO</div> */}
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
      {/* <ul> */}
      {/* <li>...</li> */}
      {/* </ul> */}
    </nav>
  </header>
);

export default toolbar;
