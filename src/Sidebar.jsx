import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  BsGrid1X2Fill,
} from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";
import { TbSettings2 } from "react-icons/tb";
import { IoChevronForwardOutline } from "react-icons/io5";
import { GrProductHunt } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { MdLiveHelp } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { GiStarProminences } from "react-icons/gi";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [showpSubMenu, setShowpSubMenu] = useState(false);
  const [showcSubMenu, setShowcSubMenu] = useState(false);
  const [showiSubMenu, setShowiSubMenu] = useState(false);
  const [showprSubMenu, setShowprSubMenu] = useState(false);
  const [showhSubMenu, setShowhSubMenu] = useState(false);

  const handleClickproducts = () => {
    setShowpSubMenu(!showpSubMenu);
  };
  const handleClickincome = () => {
    setShowiSubMenu(!showiSubMenu);
  };
  const handleClickpromote = () => {
    setShowprSubMenu(!showprSubMenu);
  };
  const handleClickcustomers = () => {
    setShowcSubMenu(!showcSubMenu);
  };
  const handleClickhelp = () => {
    setShowhSubMenu(!showhSubMenu);
  };
  return (
    <>
      <aside
        id="sidebar"
        className={openSidebarToggle ? "sidebar-responsive" : ""}
      >
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <TbSettings2 className="icon_header" /> Dashboard
          </div>

          <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <Link to="#">
            <VscDashboard className="icon"/>  Dashboard
            
            </Link>
          </li>

          <li className="sidebar-list-item">
            <Link to="#" onClick={handleClickproducts}>
            <GrProductHunt  className="icon"/>  Products{" "}
              <IoChevronForwardOutline />
            </Link>
            {showpSubMenu && (
              <ul className="submenu">
                <li className="sidebar-submenu-item">
                  <Link to="#"> Demo</Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link to="#">Demo</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-list-item">
            <Link to="#" onClick={handleClickcustomers}>
            <RxAvatar className="icon"/> Customers
              <IoChevronForwardOutline />
            </Link>
            {showcSubMenu && (
              <ul className="submenu">
                <li className="sidebar-submenu-item">
                  <Link to="#"> Demo</Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link to="#">Demo</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-list-item">
            <Link to="#" onClick={handleClickincome}>
            <GrMoney className="icon"/>  Income
              <IoChevronForwardOutline />
            </Link>
            {showiSubMenu && (
              <ul className="submenu">
                <li className="sidebar-submenu-item">
                  <Link to="#"> Demo</Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link to="#">Demo</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-list-item">
            <Link to="#" onClick={handleClickpromote}>
            <GiStarProminences className="icon" />     Promote
              <IoChevronForwardOutline />
            </Link>
            {showprSubMenu && (
              <ul className="submenu">
                <li className="sidebar-submenu-item">
                  <Link to="#"> Demo</Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link to="#">Demo</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-list-item">
            <Link to="#" onClick={handleClickhelp}>
            <MdLiveHelp  className="icon"/> Help
              <IoChevronForwardOutline />
            </Link>
            {showhSubMenu && (
              <ul className="submenu">
                <li className="sidebar-submenu-item">
                  <Link to="#"> Demo</Link>
                </li>
                <li className="sidebar-submenu-item">
                  <Link to="#">Demo</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      <Outlet />
    </>
  );
}

export default Sidebar;
