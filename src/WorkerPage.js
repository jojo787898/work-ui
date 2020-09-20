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

export default class WorkerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            schedule: props.location.state.schedule,
            technician: props.location.state.technician
        };
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

    handleClick = async (event) => {
        this.props.history.push({
            pathname: "/",
            state: {
                schedule: this.state.schedule ,
            },
        });
    }

    renderSchedule() {
        const {schedule} = this.state
        if (schedule) {
            console.log(schedule)
            return (
                schedule.map(work => work.technician == this.state.technician ? 
                    this.renderWork(work) : null)
            );
        }
    }

    render() {

        return(
            <form className="workerPage" style={{backgroundColor:"white"}}>
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
                Back
            </Button>
            </form>
        );
    }
}