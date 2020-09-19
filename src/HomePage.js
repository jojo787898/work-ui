import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import {
    TextField,
    InputLabel,
    FormControl,
    Select,
    Button,
    createMuiTheme,
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
  } from "@material-ui/core";
  import { ThemeProvider as MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
  import AddIcon from "@material-ui/icons/Add";
  import SearchBar from "material-ui-search-bar";
  import { getWork } from "./api/report";
  import moment from 'moment';

  export default class homePage extends React.Component{

    constructor(props) {
        super(props);
    
    }

    async componentDidMount(){
        await this.getWork();
    }

    async getWork() {
        let schedule = await getWork();
        console.log(schedule)
     }

  }
