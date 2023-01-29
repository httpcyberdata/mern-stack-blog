import './sidebar.css';
export default function Sidebar() {
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
                <li className="sidebarListItem">
                    Life
                </li>
                <li className="sidebarListItem">
                    Music
                </li>
                <li className="sidebarListItem">
                    Style
                </li>
                <li className="sidebarListItem">
                    Sport
                </li>
                <li className="sidebarListItem">
                    Tech
                </li>
                <li className="sidebarListItem">
                    Cinema
                </li>
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
