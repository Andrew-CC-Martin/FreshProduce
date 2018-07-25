import React from "react";
import './Footer.css';
class Footer extends React.Component {
    render() {
        return (
        <div>
            {/* <div className="footerheader">
                <h1> Footer </h1>
            </div> */}
            <div className= "footercontent">
            <div>
                <h5 className="hours">
                Trading hours
                Mon-Thu: 8am – 6:30pm
                Fri: 7.30am-9pm
                Sat-Sun: 7.30am-6pm
                </h5>
            </div>
                <div className="contact">
                    <h5> Shop MM07 level 2
                    Westfield Belconnen ACT 2617
                    Phone 02 6251 0366</h5>
                </div>

           </div>
        </div>
        )
    }
}

export default Footer
