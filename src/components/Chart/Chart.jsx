// src/App.jsx
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
// var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Chart extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Simple Column Chart with Index Labels"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					{ x: 110, y: 21 },
					{ x: 120, y: 49 },
					{ x: 130, y: 36 }
				]
			}]
		}
		
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-100">
				<div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
					<h1 className="text-2xl font-bold text-center mb-6">Simple Column Chart with Index Labels</h1>
					<CanvasJSChart options={options} />
				</div>
			</div>
		);
	}
}
 
export default Chart;
