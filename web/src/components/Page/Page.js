import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../Navbar';
import {Login} from '../../pages/Login';
import {Register} from '../../pages/Register';
import {BidsOwner} from '../../pages/BidsOwner';
import BidsCaretaker from '../../pages/BidsCaretaker';
import Leaves from '../../pages/Leaves';
import PetsPage from '../../pages/Pets';
import Salary from '../../pages/Salary';
import style from './Page.module.css';

const Page = () => {
  const authState = useSelector(state => state.auth);
  const homePage = () => <p>Home Page</p>;
  return (
    <div className={style.page}>
      <Navbar isLoggedIn={authState.isLoggedIn} />

      <div className={style.content}>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/owner-bids" component={BidsOwner} />
          <Route exact path="/caretaker-bids" component={BidsCaretaker} />
          <Route exact path="/pets" component={PetsPage} />
          <Route exact path="/leaves" component={Leaves} />
          <Route exact path="/salary" component={Salary} />
        </Switch>
      </div>
    </div>
  );
};

export default Page;
