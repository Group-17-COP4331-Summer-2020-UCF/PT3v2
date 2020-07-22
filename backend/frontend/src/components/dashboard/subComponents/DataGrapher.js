import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/dashboard/subComponents/DataGrapher.css';
import React from 'react';
import { Row } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2';
import Cookie from '../../general/Cookie'

const BASE_URL = 'https://large-project-2020.herokuapp.com/';

const passCount = 0;
const failCount = 0;
const searchTests = async event => {
    var endpoint = null;
    switch (Cookie.getCookie("username")) {
        case "army":
            endpoint = "ArmyTests/searchArmyTest"
            break;
        case "navy":
            endpoint = "NavyTests/searchNavyTest"
            break;
        case "marine":
            endpoint = "MarineTests/searchMarineTest"
            break;
        case "airforce":
            endpoint = "AirForceTests/searchAirForceTest"
            break;
        default:
            console.log("invalid submission: wrong username");
            return;
    }
    var search = '{"username": "' + Cookie.getCookie("username") + '"}';
    const response = await fetch(BASE_URL + endpoint,
        { method: 'POST', body: search, headers: { 'Content-Type': 'application/json' } });
    var res = JSON.parse(await response.text());
    var temp;
    while(res.hasNext()){
        temp = res.next();
        if(temp.passed == "true"){
            passCount++;
        }else if(temp.passed == "false"){
            failCount++;
        }
    }
    return;
};

const state = {
    labels: ['pass', 'fail'],
    datasets: [
        {
            borderColor: 'black',
            backgroundColor: [
                '#00ab66',
                '#cf142b'
            ],
            data: [passCount, failCount]
        }
    ]
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Pie
                    data={state}
                    options={{
                        layout: {
                            padding: {
                                top: 30,
                                bottom: 10
                            }
                        },
                        title: {
                            display: true,
                            text: 'Pass Rate',
                            fontSize: 30,
                            fontColor: '#000000'
                        },
                        legend: {
                            position: 'bottom',
                            stokeStyle: 'black',
                            labels: {
                                fontColor: '#000000',
                                fontSize: 15
                            }
                        }
                    }}
                />
            </div>
            
        );
    }
}