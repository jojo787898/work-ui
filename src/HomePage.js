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
    TableRow
} from "@material-ui/core"

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state={};
    }

    componentDidMount(){
        this.getWork();
    }
  
    async getWork() {
        let schedule = await getWork();
        this.setState({schedule});
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
                <TableCell align="right"> Pump </TableCell>
                <TableCell align="right"> {work.equipmentId}</TableCell>
                <TableCell align="right"> {work.priority}</TableCell>
                <TableCell align="right"> {work.timeComplete} </TableCell>
                <TableCell align="right"> {work.submission} </TableCell>
            </TableRow>
        )
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
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.renderSchedule()}
                    </TableBody>
                </Table>
            </TableContainer>
            </form>
        );
    }

}
