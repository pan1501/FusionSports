import React from 'react';

export default class Bodycontent extends React.Component {
	render() {
		return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h2>Athlete</h2>
				</div>
				<div className="col">
					<h2>Muscle Soreness</h2>
				</div>
				<div className="col">
					<h2>Sleep Quality</h2>
				</div>
			</div>
			<div className="row" id="details">
				<div className="col">
					<h2>Athlete</h2>
				</div>
				<div className="col">
					<h2>Muscle Soreness</h2>
				</div>
				<div className="col">
					<h2>Sleep Quality</h2>
				</div>
			</div>
		</div>
	  );
	}
  }