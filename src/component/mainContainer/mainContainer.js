import {Route, Switch} from "react-router-dom";
import ChartComponent from "../chart/chartComponent";
import Barchart from "../chart/BarChart";
import {useEffect, useState} from "react";
import axios from "axios";
import "./mainContainer.css";

const MainContainer=()=>{
    const [num, setNum] = useState('');

    const fetch = async () => {
        const data = await axios.get("http://localhost:5000/user");
        if (data.status === 200) {
            console.log(data.data.length);
            setNum(data.length);
            return data.data.length;
        } else
            console.log("Error :" + data.status);
    }

    useEffect(() => {
        let isMounted = true;
        fetch().then(data => {
            if (isMounted) setNum(data);    // add conditional check
        })
        return () => {
            isMounted = false
        };
    }, []);

    return(
        <main>
            <div className="main_container">
                <div className="main_title">
                    <img src="" alt="hello"/>
                    <div className="main_greeting">
                        <h1>Hello Everyone</h1>
                        <p>Welcome Admin Dashboard</p>
                    </div>
                </div>
                <div className="main_cards">

                    <div className="cards">
                        {/*<i className='fa fa-user-o fa-2x text-lightblue'/>*/}
                        <div className="card_inner">
                            <p className='text-primary-p'>Number of Departments :</p>
                            <span className='font-bold text-title'>123</span>
                        </div>
                    </div>

                    <div className="cards">
                        <i className='fa fa-calendar fa-2x text-red'/>
                        <div className="card_inner">
                            <p className='text-primary-p'>Times of</p>
                            <span className='font-bold text-title'>123</span>
                        </div>
                    </div>

                    <div className="cards">
                        <i className='fa fa-video-camera fa-2x text-yellow'/>
                        <div className="card_inner">
                            <p className='text-primary-p'>Number of</p>
                            <span className='font-bold text-title'>123</span>
                        </div>
                    </div>

                    <div className="cards">
                        <i className='fa fa-thumbs-up fa-2x text-green'/>
                        <div className="card_inner">
                            <p className='text-primary-p'>Number of</p>
                            <span className='font-bold text-title'>{num}</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='charts'>
                <div className='chart_left'>
                    <div className='chart_left_title'>
                        <div>
                            <h1>Daily Reports</h1>
                            <p>California, USA</p>
                        </div>
                        <i className='fa fa-usd'/>
                    </div>
                    <Switch>
                        <Route path='/chart'>
                            <ChartComponent/>
                        </Route>
                        <Route path='/bar' component={Barchart}/>
                    </Switch>
                </div>
            </div>
        </main>
    );
}

export default MainContainer;