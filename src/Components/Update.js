import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Update extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container-1'>
                    <img src='images/ixpe.jpg' width='100%' height='100vh'></img>
                    <div className='bottom-left1'>
                        <p >
                            RECENT LAUNCH

                        </p>

                        <h2 className='c1' style={{ fontWeight: 'bold' }}>
                        IMAGING X-RAY 
                        POLARIMETRY EXPLORER 
                        (IXPE) MISSION
                        </h2>
                        <br></br>
                        <a href='#space'>  <button className="btn btn-outline-light btn-lg">RECENT LAUNCH</button></a>

                    </div>
                </div>
                <div className='container' id='space'>
                    <div className='col-12  '>
                        <p className='text-left'>
                            On Thursday, December 9 at 1:00 a.m. EST, Falcon 9 launched NASA’s Imaging X-ray Polarimetry Explorer (IXPE) to 
                            low Earth orbit from historic Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida. This was the 
                            fifth flight for NASA’s Launch Service Program.

                            This was the fifth flight for this Falcon 9’s first stage booster, which previously supported launch of Crew-1, Crew-2, 
                            sSXM-8, and CRS-23. This mission marked SpaceX’s 130th flight of Falcon 9 and its 90th successful landing.</p>
                    </div>
                    <div className="col-12 col-sm-5 offset-sm-2">
              <img
                src="images/NASA.jpg"
                className='logoimg'
                alt="falcon"
              ></img>
            </div>
            <div className='col-12 col-sm-11  offset-sm-1  ' >
              <h1 className='fheading'>IXPE MISSION SET TO LAUNCH</h1>
                <iframe width='820' height='445'
                src="https://www.youtube.com/embed/sj9IJcETQT0?autoplay=1&mute=1"></iframe>
            </div>
                <img src="images/F9_AUTONOMOUS_DRONESHIP.jpg" style={{ height: "100vh" }}  alt='ixpe'></img>
         </div>
    
        </React.Fragment>
        );

            }
}

export default Update;