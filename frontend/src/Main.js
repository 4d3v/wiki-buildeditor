import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './screens/Home';
import Wiki from './screens/Wiki';
import WikiMechanic from './screens/WikiMechanic';
import WikiRunestone from './screens/WikiRunestone';
import WikiRunetrait from './screens/WikiRunetrait';
import WikiSephirot from './screens/WikiSephirot';
import WikiRunetraitDetails from './screens/WikiRunetraitDetails';
import WikiArchSkill from './screens/WikiArchSkill';
import WikiSkill from './screens/WikiSkill';
import Editor from './screens/Editor';
import Login from './screens/Login';
import Faq from './screens/Faq';
import Donate from './screens/Donate';
import Log from './screens/Log';
import NotFound from './screens/NotFound';

const Main = () => {
  return (
    <main className='main py-3'>
      <ScrollToTop />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/wiki' component={Wiki} exact />
        <Route path='/wiki/mechanics' component={WikiMechanic} exact />
        <Route path='/wiki/runestones' component={WikiRunestone} exact />
        <Route path='/wiki/runetraits' component={WikiRunetrait} exact />
        <Route path='/wiki/sephirots' component={WikiSephirot} exact />
        <Route
          path='/wiki/runetraits/:runetrait'
          component={WikiRunetraitDetails}
          exact
        />
        <Route path='/wiki/:archetype' component={WikiArchSkill} exact />
        <Route path='/wiki/skills/:skill' component={WikiSkill} exact />
        <Route path='/editor/:link?' component={Editor} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/faq' component={Faq} exact />
        <Route path='/credits' component={NotFound} exact />
        <Route path='/donate' component={Donate} exact />
        <Route path='/logs' component={Log} exact />
        <Redirect to='/' />
      </Switch>
    </main>
  );
};

export default Main;
