import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// Import { Link } here //

const Navigation = () => {
    const navStyle = {
      }
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/" style={navStyle}></Link>
                        {/* Add Link here */}
                    </li>
                    <li className="nav-list-item">
                        <Link to="/" style={navStyle}></Link>
                        {/* Add Link here */}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation