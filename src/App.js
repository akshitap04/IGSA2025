import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './components/Header';
//import About from './components/About';
import Resume from './components/Resume';
import CardSlider from './components/CardSlider';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import newteam from './components/newteam';
import UDNews from './components/UDNews';
import About from './components/About';
class App extends Component {
  render() {
   return (
  <Router>
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Header resumeData={resumeData} />
           <About resumeData={resumeData}/>
          <CardSlider resumeData={resumeData} />
      
          <Footer resumeData={resumeData} />
        </div>
      </Route>
      <Route path="/newteam" component={newteam} />
        <Route path="/udnews" component={UDNews} />
    </Switch>
  </Router>
);
  }
}

export default App;

//    <Testimonials resumeData={resumeData} />