import "./sidebar.css";
import {Link, useLocation} from "react-router-dom";

const Sidebar= ({sidebar, closeSidebar}) =>{
    const location = useLocation();
    function HeaderView() {
        console.log(location.pathname);
        location.pathname ==='/bar'? console.log('is /bar'):console.log("Not /bar");
    }

    return(
      <div className={sidebar ? "sidebar-responsive collapse" : ""} id='sidebar'>
          <div className="sidebar__title">
              <div className='sidebar_img'>
                  <img src="" alt="logo"/>
                  <h1>CollegeName</h1>
              </div>
              <i
                className="fa fa-times"
              id='sidebarIcon'
              onClick={()=>closeSidebar()}/>
          </div>
          <div className='sidebar_menu'>
              <div className="sidebar_link active_menu_link">
                  <Link to="/main"><i className="fa fa-home"/> DashBoard</Link>
              </div>
              <h2>MNG</h2>
              <div className="sidebar_link" >
                  <i className="fa fa-user-secret"/>
                  <Link  to={"/chart"} >Admin Mgmt</Link>
              </div>
              <div className="sidebar_link">
                  <i className="fa fa-building-o"/>
                  <Link onClick={path=>HeaderView() } to="/bar">Company Mgmt</Link>
              </div>
              <div className="sidebar_link">
                  <i className="fa fa-wrench"/>
                  <Link to="#">Employee Mgmt</Link>
              </div>
              <div className="sidebar_link">
                  <i className="fa fa-archive"/>
                  <Link to="#">Warehouse</Link>
              </div>
              <div className="sidebar_link">
                  <i className="fa fa-handshake-o"/>
                  <Link to="#">Contracts</Link>
              </div>
              <h2>LEAVE</h2>
              <div className="sidebar_link">
                  <i className="fa fa-question"/>
                  <Link to="#">Requests</Link>
              </div>
              <div className="sidebar_link">
                  <i className="fa fa-sign-out"/>
                  <Link to="#">Leave Policy</Link>
              </div>
              <div className="sidebar_link">
                  <i className="fa fa-calendar-check-o"/>
                  <Link to="#">Days</Link>
              </div>
              <div className="sidebar_logout">
                  <i className="fa fa-power-off"/>
                  <Link to="#">LogOut </Link>
              </div>
          </div>
      </div>
    );
}



export default Sidebar;