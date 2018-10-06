import React from 'react';
import Files from 'react-files'

export default class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jsonFile: []
		};
		this.fileReader = new FileReader();
		this.readfile();
	}

	readfile(){
		
		this.fileReader.onload = (event) => {
			this.setState({ jsonFile: JSON.parse(event.target.result) }, () => {
			});
			alert("Load successful");
		};
	}

	componentDidMount(){   
		let fetchData = () => {
			Promise.resolve(this.state.jsonFile).then(jsonFile => {
			this.setState({jsonFile})
			})
		}
		fetchData()
		this.update = setTimeout(fetchData, 1000)
	}
	  
	componentWillUnmount() {
		clearInterval(this.update)
	}

	function 
	render() {
		if (this.state.jsonFile.athlete){
			var cards=[];
			var totla_muscle_soreness = 0;
			var totla_sleep_quality = 0;

			for (var i = 0; i < this.state.jsonFile.athlete.length; i++) {
				var muscle_soreness_status ="";
				var sleep_quality_status ="";
				var athlete = this.state.jsonFile.athlete[i];
				var muscle_soreness = this.state.jsonFile["muscle-soreness"][i];
				var muscle_soreness_int =  parseInt(muscle_soreness, 10);

				if(muscle_soreness_int>=5 && muscle_soreness_int<=7){
					muscle_soreness_status = "levelorange"
					console.log("muscle_soreness:"+muscle_soreness_status)
				}
				else if(muscle_soreness_int >= 8){
					muscle_soreness_status = "levelred"
					console.log("muscle_soreness:"+muscle_soreness_status)
				}

				var sleep_quality = this.state.jsonFile["sleep-quality"][i];
				var sleep_quality_int =  parseInt(sleep_quality, 10);
				if(sleep_quality_int < 3){
					sleep_quality_status = "levelred"
					console.log("sleep_quality:"+sleep_quality_status)
				}
				else if(sleep_quality_int === 10){
					sleep_quality_status = "levelgreen"
					console.log("sleep_quality:"+sleep_quality_status)
				}

				totla_muscle_soreness = totla_muscle_soreness + muscle_soreness_int;
				totla_sleep_quality = totla_sleep_quality + sleep_quality_int;
				cards.push(
					<div key={athlete} className="col">
						<div className="card">
						<img className="card-img-top card-avatar" src="./profile.png" alt="profile pic"></img>
							<div className="card-body">
								<h3 className="card-name">{athlete}</h3>
								<div className="details">
									<div className={"row "+ muscle_soreness_status}>
										<div className="col-9 card-detail"><h3 className="card-detail ">Muscle Soreness:</h3></div>
										<div className="col-3 card-detail"><h3>{muscle_soreness}</h3></div>
									</div>
									<div className={"row " + sleep_quality_status}>
										<div className="col-9 card-detail"><h3 className="card-detail">Sleep Quality:</h3></div>
										<div className="col-3 card-detail"><h3>{sleep_quality}</h3></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
				
			}
			var total_Number = parseInt(this.state.jsonFile.athlete.length,10);
			var average_muscle_soreness = totla_muscle_soreness/total_Number;
			var average_sleep_quality = totla_sleep_quality/total_Number;
			cards.push(
				<div className="col-12 average-section">
					<div className="row">
						<div className="col">
							<h2><strong>Average Score</strong></h2>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<h3>Muscle Soreness:</h3>
						</div>
						<div className="col-6">
							<h3>Sleep Quality:</h3>
						</div>
					</div>		
					<div className="row average-scores">
						<div className="col-6">
							<h3 className="average-score">{average_muscle_soreness}</h3>
						</div>
						<div className="col-6">
							<h3 className="average-score">{average_sleep_quality}</h3>
						</div>
					</div>		
				</div>
			)
		}
		return (
			<div className="container">
				<div className="row title">
					<div className="col">
						<h1>Wellness Report</h1>
					</div>
				</div>
				<div className="row loadbutton">
					<div className="col">
						<button className='btn btn-info'>
						<Files fileTypes={'.json'}
							onChange={file => {
								this.fileReader.readAsText(file[0]);
							}}
							>
							Load Data
						</Files>
						</button>
					</div>
				</div>
				<div className="row">
					{cards}
				</div>
			</div>
		);
	}
}
