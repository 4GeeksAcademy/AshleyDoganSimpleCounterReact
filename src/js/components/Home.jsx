import React from "react";

import '../../styles/index.css'
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondCounter from "./SecondsCounter";

//create your first component

const Home = ({FirstNumber,SecondNumber,ThirdNumber,FourthNumber,FifthNumber,SixthNumber}) => {
	return (
		<div className="container">
			<div className="row">
        		<div className="box1"><i class="fa-regular fa-clock"></i></div>
				<SecondCounter number={SixthNumber % 10}/>
				<SecondCounter number={FifthNumber % 10} />
				<SecondCounter number={FourthNumber % 10} />
				<SecondCounter number={ThirdNumber % 10} />
				<SecondCounter number={SecondNumber % 10} />
				<SecondCounter number={FirstNumber % 10} />
			</div>
		</div>
	);
};




export default Home;