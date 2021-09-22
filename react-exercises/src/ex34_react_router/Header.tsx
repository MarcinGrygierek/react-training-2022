import { Link } from "react-router-dom"

const Header = () =>  <header style={{
    backgroundColor: '#eee',
    display: 'flex',
    padding: 20,
    justifyContent: 'space-between'
}}>
    <strong>Lorem ipsum</strong>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/color/255/10/86'>Color (255, 10, 86)</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>        
    <button>Log out</button>
</header>

export {Header}