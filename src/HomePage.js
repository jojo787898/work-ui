import React from 'react';
import { getWork } from "./api/report";
import {
    Paper,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Select,
    MenuItem,
    TextField
} from "@material-ui/core"

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            schedule: !props.location.state ? [
                {
                workOrder : 0,
                facility : "Fac1",
                equipment: "Pump",
                equipmentId : "P000",
                priority : 1,
                submission : "2020-11-21",
                timeComplete : 4,
                status : "open",
                },
                {
                workOrder : 1,
                facility : "Fac1",
                equipment : "Conveyor",
                equipmentId : "P000",
                priority : 1,
                submission : "2020-11-21",
                timeComplete : 4,
                status : "open",
                },
            ] : props.location.state.schedule,
            Technicians : [
                {
                    name : "Bob",
                    equipment :"Pump"
                },
                {
                    name : "Sam",
                    equipment : "Conveyor"
                }
            ]
        } 
    }

    renderSchedule() {
        const {schedule} = this.state
        if (schedule) {
            console.log(schedule)
            return (
                schedule.map(work => this.renderWork(work))
            );
        }
    }

    renderWork(work) {
        return (
            <TableRow>
                <TableCell > {work.workOrder}</TableCell>
                <TableCell align="right"> {work.facility}</TableCell>
                <TableCell align="right"> {work.equipment} </TableCell>
                <TableCell align="right"> {work.equipmentId}</TableCell>
                <TableCell align="right"> {work.priority}</TableCell>
                <TableCell align="right"> {work.timeComplete} </TableCell>
                <TableCell align="right"> {work.submission} </TableCell>
                <TableCell align="right"> {work.technician ? work.technician :
                    <Select
                    id="select-technician"
                    value=""
                    onChange={this.handleChange(work.workOrder)}
                    >
                    {this.state.Technicians.map(tech => this.renderTechnician(tech, work.equipment))}
                    </Select>
                }
                </TableCell>
            </TableRow>
        )
    }

    handleChange = (workOrder) => (event) => {
        var {schedule} = this.state;
        schedule[workOrder].technician = event.target.value
        this.setState({schedule})
    }

    renderTechnician(tech, equipment) {
        if (tech.equipment == equipment) {
            return (
                <MenuItem value={tech.name}>{tech.name}</MenuItem>
            );
        }
    }

    handleClick = async (event) => {
        this.props.history.push({
            pathname: "/insert",
            state: {
                schedule: this.state.schedule ,
            },
        });
    }

    render() {
        return (
            <form className="homePage" style={{backgroundColor:"white"}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell> Work Order </TableCell>
                            <TableCell align="right"> Facility </TableCell>
                            <TableCell align="right"> Equipment Type </TableCell>
                            <TableCell align="right"> Equipment Id </TableCell>
                            <TableCell align="right"> Priority </TableCell>
                            <TableCell align="right"> Time to Complete </TableCell>
                            <TableCell align="right"> Submission Timestamp </TableCell>
                            <TableCell align="right"> Technician</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.renderSchedule()}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={this.handleClick}>
                Add
            </Button>   
            </form>
        );
    }

}
