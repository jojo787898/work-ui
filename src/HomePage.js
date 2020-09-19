import React from 'react';
import { getWork } from "./api/report";
import Paper from "@material-ui/core"

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
            <h1>{work.workOrder}</h1>
        )
    }

    render() {
        return (

                <h1> {this.renderSchedule()} </h1>
        );
    }

}
