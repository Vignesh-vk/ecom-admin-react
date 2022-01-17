import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/layouts/sidebar';
import Navbar from './components/layouts/navbar'
import Footer from './components/layouts/footer';
import addFaqs from './components/faq/addFaq'
import Dashboard from './components/layouts/dashboard';
import ListFaq from './components/faq/listFaq';
import addPages from './components/pages/addPages';
import listPages from './components/pages/listPages';
import listCountry from './components/country/listCountry';
import addCountry from './components/country/addCountry';
import editFaq from './components/faq/editfaq'
import editCountry from './components/country/editCountry'
import editPage from './components/pages/editPage'
import viewFaq from './components/faq/viewFaq';
import viewPage from './components/pages/viewPage';
import viewCountry from './components/country/viewCountry';
import addImage from './components/image/addImage';
import listImage from './components/image/listImage';
function App() {
  return (
    <Router>
    <div class="container-scroller">
      <Navbar/>
      <div class="container-fluid page-body-wrapper">
      <Sidebar/>
      <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/add-faq" component={addFaqs}/>
      <Route exact path="/list-faq" component={ListFaq}/>
      <Route exact path="/add-page" component={addPages}/>
      <Route exact path="/list-page" component={listPages}/>
      <Route exact path="/add-country" component={addCountry}/>
      <Route exact path="/list-country" component={listCountry}/>
      <Route exact path='/editFaq/:id' component={editFaq}/>
      <Route exact path='/viewFaq/:id' component={viewFaq}/>
      <Route exact path='/editCountry/:id' component={editCountry}/>
      <Route exact path='/editPage/:id' component={editPage}/>
      <Route exact path='/viewPage/:id' component={viewPage}/>
      <Route exact path='/viewCountry/:id' component={viewCountry}/>
      <Route exact path="/addImage" component={addImage}/>
      <Route exact path="/listImage" component={listImage}/>
      <Route exact path="/" component={Dashboard}/>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
