import React, { useState, useContext } from 'react';
import { ThemeContext } from '../theme-context';
import { Grid, Box, Link } from '@material-ui/core';
import { footerHeight, footerMargin } from '../shared/WindowUtils';

export default function Footer(props) {
    const [version] = useState(props.version)
    const theme = useContext(ThemeContext);

    const footerZone = {
        backgroundColor : theme.background,
        minHeight: footerHeight,
        maxHeight: footerHeight
    };
    const footerStyle = {
        color: theme.textColor,
        margin: footerMargin
    }
    
    return(
        <Grid className={"app-footer"} container style={footerZone}>
            <Grid container style={footerStyle} spacing={2}>
                <Grid item >
                    <Box>Version: {version}</Box>
                </Grid>
                <Grid item >
                    <Link href="https://financialmodelingprep.com/developer/docs/companies-key-stats-free-api/">API</Link>
                </Grid>
            </Grid>
        </Grid>
    );
}