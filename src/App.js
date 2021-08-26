import React from 'react' 
// the way we can use our Header component is that we also need to import it 
import Sidebar from './Sidebar'
import AverageRating from './AverageRating.js'
import Review from './Reviews'
import SentimentAnalysis from './SentimentAnalysis'
import WebsiteVisitors from "./WebsiteVisitors"
//import CSS
import "./App.css"
// App is going to be our Parent Component 
class App extends React.Component {
  // class Animal 
  // class Pet extends class Animal


  render () {
    return(
      <div id ="app">
        <Sidebar />       
        <Review />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    )
  }
}
export default App;
