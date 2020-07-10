npm init -y
npm i react react-dom
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin

create a file => ".bablerc" add this => {"presets": ["@babel/preset-env", "@babel/preset-react"]}

npm i html-webpack-plugin html-loader --save-dev
npm i webpack-dev-server --save-dev

npm install style-loader css-loader sass-loader --save-dev

npm install node-sass --save-dev

npm install --save styled-components


webpack.config.dev.js
	const HtmlWebPackPlugin = require("html-webpack-plugin");
	const path = require('path');
	module.exports = {
	  devtool: 'source-map', // Webpack can map all the bundled source code back to the original source
	  mode: 'development',
	  entry: './src/app.js',
	  devtool: 'cheap-module-eval-source-map',
	  output: {
	    path: path.join(__dirname, 'public'),
	    filename: 'bundle.js'
	  },
	  module: {
	    rules: [
	      {
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
					  loader: "babel-loader"
					}
	      },
	      {
					test: /\.html$/,
					use: [
					  {
					    loader: "html-loader"
					  }
					]
	      },
				{    
				  test: /\.s[ac]ss$/i,   
				  use: [
				    'style-loader', // creates style nodes from JS strings      
				    'css-loader', // translates CSS into CommonJS
				    'sass-loader' // compiles Sass to CSS, using Node Sass by default
				  ],
				}
	    ]
	  },
	  plugins: [
	    new HtmlWebPackPlugin({
	      template: "./src/index.html",
	      filename: "./index.html"
	    })
	  ]
	};


index.html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="utf-8">
	    <title>How to set up React, Webpack, and Babel</title>
	</head>
	<body>
	<div id="root"></div>
	</body>
	</html>

src/index.js
	import React from 'react';
	import ReactDOM from 'react-dom';
	const App = () => (
		<div>
				<h1>Hello world!!</h1>
		</div>
	)
	ReactDOM.render(<App/>, document.getElementById('root'));



package.json
	"scripts": {
	  "start": "webpack-dev-server --open --mode development",
	  "build": "webpack --mode production"
	}

	or

	"scripts": {
	    "start": "webpack-dev-server --config ./webpack.dev.js",
	    "build": "webpack --config ./webpack.prod.js",
	    "test": "echo \"Error: no test specified\" && exit 0"
	 }

	or

	"scripts": {
	    "start": "webpack --mode=development",
	    "build": "webpack --mode=production"
	  }

npm start


























---------------
ref:
 https://www.valentinog.com/blog/babel/
 https://medium.com/@siddharthac6/getting-started-with-react-js-using-webpack-and-babel-66549f8fbcb8
 https://www.robinwieruch.de/webpack-advanced-setup-tutorial
 https://www.robinwieruch.de/minimal-react-webpack-babel-setup
 https://medium.com/swlh/a-complete-webpack-setup-for-react-e56a2edf78ae
 https://www.digitalocean.com/community/tutorials/settingup-reactjs-using-webpack-4-and-babel-7-the-definitive-guide
 https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph
 https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm

Webpack and Babel are dev dependencies

-S => main dependency
-D => Dev dependecy

React.js library itself insists you to make use of the latest JavaScript’s offerings for cleaner, less and more readable code. But unfortunately our browsers do not understands most of the syntax and this is where we need Babel’s help. It is responsible for converting the ES5 and ES6 code to browser understandable code, basically backward compatibility.

Learning webpack is valuable not only for working with React, but for configuring every frontend project as well. Here webpack will ingest raw React components for producing JavaScript code that (almost) every browser can understand.

Well, we don’t necessarily need webpack to work with React, other alternatives could be Browserify, Parsel, Brunch, etc, but honestly I don’t know how well they fit in with React.js. Webpack is most widely used and an accepted module bundler and task runner throughout React.js community. You will find solutions to most of the problems related to it, its community is vibrant. Also it's quite easy and minimal. So why not Webpack. We need its packages for the following reasons:

Webpack packages
	webpack: The main webpack plugin as an engine for its dependents.
	webpack-cli: To access some webpack commands through CLI like starting dev server, creating production build, etc.
	webpack-dev-server: A minimal server for client-side development purpose only.
	html-webpack-plugin: Will help in creating HTML templates for our application.

The Babal packages that we are gonna use are:
	babel-core: Well as the name suggests the main engine of babel plugin for its dependents to work.
	babel-preset-env: This is the ES5, ES6 supporting part
	babel-preset-react: Babel can be used in any framework that needs latest JS syntax support, in our case its “React”, hence this preset.
	babel-loader: Consider this as a bridge of communication between Webpack and Babel

html-webpack
	 This file will act as template file. Please remember React.js is best known for creating one-page applications. So you see, this is 		the main template HTML file and the content inside this file is supposed to change from time to time whenever needed or whenever a user 	requests for change in view. To achieve this concept, we are using the package html-webpack-plugin

	webpack-dev-server — mode development — open — hot
		This says: If we trigger npm start , webpack-dev-server is going to fire up the application in mode=development, then display 			( — open) it in your default browser automatically and keep watching for any changes made to the application ( — hot).

	npm install --save-dev clean-webpack-plugin
	const { CleanWebpackPlugin } = require('clean-webpack-plugin');

	plugins: [
    		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin()
	]
