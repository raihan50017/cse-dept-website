import React, { useEffect } from 'react';
import './App.css';
import Cse from './Cse';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import { auth } from './firebaseConfig';
import { useStateValue } from './StateProvider';
import NoticeBoard from './NoticeBoard';
import Notice from './Notice';
import AdminDashboard from './AdminDashboard';
import PrivateRoute from './PrivateRoute';
import AddNoticeDashboard from './AddNoticeDashboard';
function App() {

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])

  console.log(user);

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/cse">
          <Cse></Cse>
        </Route>
        <Route path="/noticeboard">
          <NoticeBoard></NoticeBoard>
        </Route>
        <PrivateRoute path="/admin">
          <AdminDashboard></AdminDashboard>
        </PrivateRoute>
        <PrivateRoute path="/add-notice-dashboard">
          <AddNoticeDashboard></AddNoticeDashboard>
        </PrivateRoute>
        <Route path="/notice/:notice_id">
          <Notice></Notice>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
