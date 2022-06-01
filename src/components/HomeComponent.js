import React, {useState} from 'react';
import BaseDialog from '../widgets/base-dialog'
import '../css/BaseCard.css'
import '../css/Button.css';
import '../css/ListItem'
import BaseBadge from "../widgets/base-badge";
import {Link} from "react-router-dom";

function Home(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // debugger
    const nameList = Object.keys(props.mentor.mentors).map(function (keyName, keyIndex) {
        const value = props.mentor.mentors[keyName];
        const field = props.mentor.mentors[keyName].areas.map((area) => {
            return (
                <div>
                    <BaseBadge key={area} type={area} title={area}/>
                </div>
            )
        })
        return (
            <div key={keyIndex}>

                <div className="card-border">
                    <h3>{value.firstName} {value.lastName}</h3>
                    <h4>{`$${value.hourlyRate}/hour`}</h4>
                    {field}
                    <div className="action">
                        <Link to={`/contact/${keyName}`}>Contact</Link>
                        <button>View Details</button>
                    </div>
                </div>
                {/*<ul>*/}
                {/*    <li>Nothing found</li>*/}
                {/*</ul>*/}
            </div>
        )
    })
    return (
        <div>
            <BaseDialog show="!!error" title="An error occurred!" onHide={handleClose}/>
            {/*<mentor-filter @change-filter="setFilters"></mentor-filter>*/}
            <div className="card">
                <div className="controls">
                    <button> Refresh</button>
                    {/*<button> Login to register as Mentor</button>*/}
                    <button> Register as Mentor</button>
                </div>
                {nameList}
            </div>
            <ul>

            </ul>
        </div>
    )
}

export default Home;
