import React, { useState, useContext } from 'react';
import { ThemeContext } from '../theme-context';
import { Grid } from '@material-ui/core';
import { headerHeight, headerMargin } from '../shared/WindowUtils';

export default function Header(props) {
    const [title] = useState(props.title);
    const themes = useContext(ThemeContext);

    const headerZone = {
        backgroundColor : themes.background,
        minHeight: headerHeight,
        maxHeight: headerHeight
    };
    const headerStyle = {
        margin: headerMargin,
        color: themes.textColor,
    }
    
    return(
        <Grid className={"app-header"} container style={headerZone} >
            <Grid item style={headerStyle}>
                {title}
            </Grid>
        </Grid>
    );
}