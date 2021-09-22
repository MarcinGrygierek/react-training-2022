import { Switch, Route, NavLink } from "react-router-dom"
import { About } from "./About"
import { Company } from "./Company"

const Contact = () => {
    return <div>
        <h1>Contact</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam tempora recusandae vero aspernatur vitae commodi, odit, officia dolorem voluptas rerum eveniet quos nulla molestiae, voluptatum necessitatibus hic unde soluta facilis.
        <ul>
            <li>
                <NavLink exact activeClassName='active' activeStyle={{fontWeight: 700}} to='/contact'>About us</NavLink>
           </li>
           <li>
                <NavLink activeClassName='active' activeStyle={{fontWeight: 700}} to='/contact/company'>About company</NavLink>
           </li>
        </ul>
        <Switch>
            <Route exact path='/contact' component={About} />
            <Route path='/contact/company' component={Company} />
        </Switch>
    </div>
}

export {Contact}