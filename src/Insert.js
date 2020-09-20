import React from 'react'
import { Grid, Paper, TextField } from "@material-ui/core";

export default class Insert extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            schedule: props.location.state.schedule,
            facility:"",
            equipment:"",
            equipmentId:"",
            priority:0,
            timeComplete:0,
        };
    }

    handleChange = (name) => (event) => {
        this.setState({[name] : event.target.value})
    }

    handleSubmit = async (event) => {
        var {facility, equipmentId, priority, timeComplete, schedule, equipment} = this.state;
        let newWork = {
            workOrder : 0,
            facility : facility,
            equipment : equipment,
            equipmentId : equipmentId,
            priority : priority,
            submission : "22-11-2020",
            timeComplete : timeComplete,
            status : "open",
        }
        schedule.push(newWork);
        this.props.history.push({
            pathname: "/",
            state: {
                schedule: schedule,
            },
        });
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
                    id="Equipment"
                    label="Equipment"
                    InputProps={{ disableUnderline: false }}
                    InputLabelProps={{ shrink: true }}
                    onChange={this.handleChange("equipment")}
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