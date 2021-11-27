import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Doctors from './Components/Doctors/Doctors';
// import Doctors from './Components/Doctors/Doctors';


function App() {
  return (
    <div >
      <AuthProvider>

      <BrowserRouter>
              <Header></Header>

          <Switch>
            <Route exact path="/">
                     <Home></Home>

            </Route>
            <Route path="/home">
                  <Home></Home>
            </Route>
        
            
            <PrivateRoute path="/services/:bonus">
                    <Services></Services>
            </PrivateRoute>
            
            <PrivateRoute path="/aboutUs">
                   <AboutUs></AboutUs>
            </PrivateRoute>
            
          <Route path="/login">
            <Login></Login>

          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
         
          </PrivateRoute>
           
           
            <Route path="*">
                      <PageNotFound></PageNotFound>
            </Route>
          </Switch>

          
          <Footer></Footer>
          </BrowserRouter>



      </AuthProvider>
     
     
        
        
        
        
       
     


     
      

     

    </div>
  );
}

export default App;
