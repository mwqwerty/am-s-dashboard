import React, {Component} from 'react'
import axios from 'axios';
import {Pie} from 'react-chartjs-2';

export class Barchart extends Component {
    constructor(props) {
        super(props);
        this.state = {Data: {}};
    }

    componentDidMount() {

        axios.get(`https://api.npms.io/v2/search?q=react`)

            .then(res => {
                // console.log(res);
                const ipl = [
                    { y: 20, label: "Airfare" },
                    { y: 24, label: "Food & Drinks" },
                    { y: 20, label: "Accomodation" },
                    { y: 14, label: "Transportation" },
                    { y: 12, label: "Activities" },
                    { y: 10, label: "Misc" }
                ];
                let playername = [];
                let runscore = [];
                ipl.forEach(record => {
                    playername.push(record.label);
                    runscore.push(record.y);
                });
                this.setState({
                    Data: {
                        labels: playername,
                        datasets: [
                            {
                                label: 'IPL 2018/2019 Top Run Scorer',
                                data: runscore,
                                backgroundColor: [
                                    "#3cb371",
                                    "#0000FF",
                                    "#9966FF",
                                    "#4C4CFF",
                                    "#00FFFF",
                                    "#f990a7",
                                    "#aad2ed",
                                    "#FF00FF",
                                    "Blue",
                                    "Red"
                                ]

                            }
                        ]
                    }
                });

            })
    }

    render() {
        return (
            <div>
                <Pie data={this.state.Data}
                     options={{maintainAspectRatio: false}}/>
            </div>
        )
    }

}

export default Barchart;

