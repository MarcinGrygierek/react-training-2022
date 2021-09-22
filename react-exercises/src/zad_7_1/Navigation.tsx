import { NavLink } from "react-router-dom";

const Navigation = () => <nav>
    <ul style={{
        listStyleType: 'none',
        display: 'flex',

    }}>
        <li>
            <NavLink 
            style={{
                border: '2px solid #fdfdfd',
                padding: 10
            }}
            activeStyle={{
                borderBottom: '2px solid #333'
            }} 
            to='/home'>Home</NavLink>
        </li>
        <li>
            <NavLink 
            style={{
                border: '2px solid #fdfdfd',
                padding: 10
            }}
            activeStyle={{
                borderBottom: '2px solid #333'
            }} 
            to='/news'>News</NavLink>
        </li>
        <li>
            <NavLink 
            style={{
                border: '2px solid #fdfdfd',
                padding: 10
            }}
            activeStyle={{
                borderBottom: '2px solid #333'
            }} 
            to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink 
            style={{
                border: '2px solid #fdfdfd',
                padding: 10
            }}
            activeStyle={{
                borderBottom: '2px solid #333'
            }} 
            to='/post/abc'>Abc</NavLink>
        </li>
    </ul>
</nav>

export {Navigation}