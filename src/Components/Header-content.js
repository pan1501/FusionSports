import React from 'react';
import ReactFileReader from 'react-file-reader';

export default class Headercontent extends React.Component {
    state = {
        athlete: '',
        muscle_soreness:'',
        sleep_quality:''
    };
    handleFiles = files => {
        var reader = new FileReader();
		reader.onload = function (e) {
            var fileResult = JSON.parse(reader.result);
            var athlete_json = fileResult.athlete;
            var muscle_soreness_json =  fileResult["muscle-soreness"];
            var sleep_quality_json =  fileResult["sleep-quality"];
            console.log(athlete_json);
            console.log(muscle_soreness_json);
            console.log(sleep_quality_json);
            console.log(fileResult);
            reader.onload = () => this.setState({ athlete:athlete_json })
            // this.setState({ athlete:athlete_json.toString()});
            // this.state.athlete = athlete_json;
            // this.state.muscle_soreness = muscle_soreness_json;
            // this.state.sleep_quality = sleep_quality_json;

        }
        reader.readAsText(files[0]);
		alert("Load successful!");
      }

    render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Wellness Report</h1>
                    {/* <p>{this.state.athlete}</p> */}
                </div>
                <div className="col">
                    <form onSubmit={this.handleSubmit}>
                        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.json'}>
                            <button className='btn btn-info'>Load Data</button>
                        </ReactFileReader>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }