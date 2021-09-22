import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { Navigation } from "./Navigation"
import { News } from "./News"
import { Post } from "./Post"

const Zad71 = () => {
    return <Router>
        <Navigation />
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route path='/home' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/contact' component={Contact} />
            <Route path='/post/:postId' component={Post} />
            <Route render={() => <Redirect to='/home' />} />
        </Switch>
    </Router>
}

export { Zad71 }