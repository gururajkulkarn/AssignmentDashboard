import React from "react";
import { useState } from "react";
import { RiListUnordered, RiMoneyDollarCircleLine } from "react-icons/ri";
import { ResponsiveContainer } from "recharts";
import { MdOutlineAccountBalanceWallet,MdShoppingBag } from "react-icons/md";

import Sidebar from "../Sidebar";
import Header from "../Header";

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

      <main className="main-container">
        <div className="main-title">
    
        </div>

        <div className="main-cards">
        
          <div className="card">
            <div className="row align-items-center"> {/* Adjusted the row class to align items */}
              <div className="col-6">
                <div className="card-innertest">
                  <RiMoneyDollarCircleLine className="icon rounded" size={100} color="green" />

                </div>
              </div>
              <div className="col-6">
                <div className="card-text">
                  <span className="ml-2">Earning</span>
                  <h2 className="card-title">
                    <span className="ml-2">$198k</span>
                  </h2>
                  <span className="ml-2">37.82% this time</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row align-items-center"> {/* Adjusted the row class to align items */}
              <div className="col-6">
                <div className="card-innertest">
                <RiListUnordered className="icon rounded" size={100} color="green" />
                </div>
              </div>
              <div className="col-6">
                <div className="card-text">
                  <span className="ml-2">orders</span>
                  <h2 className="card-title">
                    <span className="ml-2">$2.4k</span>
                  </h2>
                  <span className="ml-2">2% this time</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row align-items-center"> {/* Adjusted the row class to align items */}
              <div className="col-6">
                <div className="card-innertest">
                <MdOutlineAccountBalanceWallet className="icon rounded" size={100} color="green" />
                </div>
              </div>
              <div className="col-6">
                <div className="card-text">
                  <span className="ml-2">Balance</span>
                  <h2 className="card-title">
                    <span className="ml-2">$2.4k</span>
                  </h2>
                  <span className="ml-2">2% this time</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row align-items-center"> {/* Adjusted the row class to align items */}
              <div className="col-6">
                <div className="card-innertest">
              <MdShoppingBag className="icon rounded" size={100} color="green" />
                </div>
              </div>
              <div className="col-6">
                <div className="card-text">
                  <span className="ml-2">Total sales</span>
                  <h2 className="card-title">
                    <span className="ml-2">$89k</span>
                  </h2>
                  <span className="ml-2">2% this time</span>
                </div>
              </div>
            </div>
          </div>



        </div>
      
        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            {/* Add your chart components here */}
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
}

export default Home;
