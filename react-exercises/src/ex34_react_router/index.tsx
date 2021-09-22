import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Color } from './Color';
import { Contact } from './Contact';
import { Header } from './Header';
import { Home } from './Home';

const Ex34 = () => {
return <div>
    <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/color/:r/:g/:b' component={Color} />
            <Route path='/contact'>
                <Contact />
            </Route>
            <Route render={() => <Redirect to='/' />} />
        </Switch>
    </Router>

</div>
}

export {Ex34}