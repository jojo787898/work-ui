import React from 'react'
import { Grid, Paper, TextField } from "@material-ui/core";
import { putWork } from "./api/report";

export default class Insert extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            facility:"",
            equipmentId:"",
            priority:0,
            timeComplete:0,
        };
    }

    handleChange = (name) => (event) => {
        this.setState({[name] : event.target.value})
    }

    handleSubmit = async (event) => {
        const {facility, equipmentId, priority, timeComplete} = this.state;
        let response = await putWork(facility, equipmentId, priority, timeComplete);
        console.log(response);
    }

    render() {
        return (
            <Paper>
                <Grid>
                    <TextField
                    required
                    id="facility"
                    label="Facility"
                    InputProps={{ disableUnderline: false }}
                    InputLabelProps={{ shrink: true }}
                    onChange={this.handleChange("facility")}
                    />
                </Grid>
                <Grid>
                    <TextField
                    required
                    id="EquipmentId"
                    label="Equipment Id"
                    InputProps={{ disableUnderline: false }}
                    InputLabelProps={{ shrink: true }}
                    onChange={this.handleChange("equipmentId")}
                    />
                </Grid>
                <Grid>
                    <TextField
                    required
                    id="Priority"
                    label="Priority"
                    InputProps={{ disableUnderline: false }}
                    InputLabelProps={{ shrink: true }}
                    onChange={this.handleChange("priority")}
                    />
                </Grid>
                <Grid>
                    <TextField
                    required
                    id="timeComplete"
                    label="Time to Complete"
                    InputProps={{ disableUnderline: false }}
                    InputLabelProps={{ shrink: true }}
                    onChange={this.handleChange("timeComplete")}
                    />
                </Grid>
                <div>
                    <input
                    id="submitButton"
                    type="button"
                    value="Submit"
                    onClick={this.handleSubmit}
                    />
                </div>
            </Paper>
        );
    }
}