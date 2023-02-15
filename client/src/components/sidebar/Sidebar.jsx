import './sidebar.css';
import { useState, useEffect} from 'react';
import axios from 'axios';

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data);
        };
        getCats();
    }, [])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <div className="sidebarTitle">ABOUT ME</div>
            <img src="../../profile_image.jpg" />
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, s
                ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="sidebarItem">
            <div className="sidebarTitle">CATEGORIES</div>
            <ul className="sidebarList">
                {cats.map(c => (
                    <li className="sidebarListitem">
                        {c.name}
                    </li>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa fa-facebook-square"></i>
                <i className="sidebarIcon fa fa-twitter-square"></i>
                <i className="sidebarIcon fa fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
