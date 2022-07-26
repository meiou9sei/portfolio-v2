import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <div className="nav-left">
                        <li><Link to="/">CameronA.vvampa.to</Link></li>
                    </div>
                    <div className="nav-right">
                        <li><Link to="/s/blog">Blog</Link></li>
                        <li><Link to="/s/resume">Resume</Link></li>
                        <li><Link to="/s/contact">Contact</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;