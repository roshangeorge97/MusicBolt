import React from 'react';
import { Link } from 'react-router-dom';


function Landing(){
    return (
        <div className="hero-gradient">
			<section className="container">
				<div className="row py-5">
					<div className="col-lg-6 col-md-12 text-white">
						<div className="row tagline">Music, that matches your GROOVE</div>
						<div className="row tagline-helper my-5">Anywhere. Everywhere</div>
						<div className="row cta-grp">
							<a href="/users/register" className="col cta">Get Started</a>
							<div className="col cta">Learn more</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 py-5">
						{/* <img src="./img/music-bg-1.jpg" className="img-fluid"></img> */}
						{/* <img src="./img/music-person-1.jpg" className="img-fluid"></img> */}
						<img src="./img/music-person-1-nobg.png" alt="bg" className="img-fluid"></img>
					</div>
				</div>
			</section>
		</div>
    )
}

export default Landing