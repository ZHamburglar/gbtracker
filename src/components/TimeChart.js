import React, { Component } from 'react';
import Rickshaw from 'rickshaw';
import '../App.css';


class TimeChart extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }




    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        console.log('resizing', window.innerWidth, window.innerHeight)
      // set up our data series with 50 random data points

var seriesData = [ [], [], [] ];
var random = new Rickshaw.Fixtures.RandomData(150);

for (var i = 0; i < 150; i++) {
	random.addData(seriesData);
}

// instantiate our graph!

var graph = new Rickshaw.Graph( {
	element: document.querySelector("#chart_container"),
	width: 960,
	height: 500,
	renderer: 'line',
	series: [
		{
			color: "#c05020",
			data: seriesData[0],
			name: 'Item 1'
		}, {
			color: "#30c020",
			data: seriesData[1],
			name: 'Item 2'
		}, {
			color: "#6060c0",
			data: seriesData[2],
			name: 'Item 3'
		}
	]
} );
  
      graph.render();

      var hoverDetail = new Rickshaw.Graph.HoverDetail( {
        graph: graph
    } );
    
    var legend = new Rickshaw.Graph.Legend( {
        graph: graph,
        element: document.getElementById('legend')
    
    } );
    
    var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
        graph: graph,
        legend: legend
    } );
    
    var axes = new Rickshaw.Graph.Axis.Time( {
        graph: graph
    } );
    axes.render();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    renderItemGraph = () => {
        console.log(' we are now rendering this graph')
    }



  
    render() {
      return(
          <div>
            {this.renderItemGraph()}
            <div id="chart_container" />
            <div id="legend" />
        </div>
      );
    }
  }

  export default TimeChart;
