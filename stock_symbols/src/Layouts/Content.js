import React, { useContext } from 'react';
import { CalcContentHeight } from '../shared/WindowUtils';
import { ThemeContext } from '../theme-context';
import { Grid } from '@material-ui/core';


export default function Content() {
    const theme = useContext(ThemeContext)
    const height = CalcContentHeight();

    const canvas = {
        color: theme.textColor,
        backgroundColor: theme.foreground,
        minHeight: height,
        border: '3px solid white'
    }

    return(
        <Grid style={canvas} container>
            <Grid item>
            </Grid>
        </Grid>
    );
}