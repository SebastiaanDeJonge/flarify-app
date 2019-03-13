import React, { Component } from 'react';
import ClassificationInfo from './components/ClassificationInfo';
import Controls from './components/Controls';
import Footer from './components/Footer';
import Summary from "./components/Summary";
import DateHelper from './utilities/DateHelper';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      summary: {
        startDate: 'January 1st 2016',
        endDate: 'January 1st 2017'
      }
    };

    this.updateRange = this.updateRange.bind(this);
    this.updateRange(DateHelper.simpleDateToObject('2016-01-01'), DateHelper.simpleDateToObject('2017-01-01'));
  }

  updateRange(startDate, endDate) {

    let formattedStartDate = DateHelper.objectToSimpleDate(startDate),
        formattedEndDate = DateHelper.objectToSimpleDate(endDate);

    fetch('http://localhost:8081/summary/between/' + formattedStartDate + '/and/' + formattedEndDate)
        .then(response => response.json())
        .then(data => this.setState({ summary: data }));
  }

  render() {
    return (
        <div className="animation-container">
          <div className="container">
            <header>
              <div className="logo">Flarify</div>
              <div className="controls" id="controls">
                <Controls startDate={this.state.summary.startDate}
                          endDate={this.state.summary.endDate}
                          updateHandler={this.updateRange}/>
              </div>
            </header>

            <div className="content">

              <div className="row">
                <div className="col col-sm-12 col-lg-6" id="summary">
                  <Summary summary={this.state.summary} refresh={this.updateRange}/>
                </div>
                <div className="col col-sm-12 col-lg-6" id="classifiction-info">
                    <ClassificationInfo/>
                </div>
              </div>

              <div className="row">
                <div className="col col-12" id="footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
