import React, { useState } from "react";
import { Container } from "react-bootstrap";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleClick = (e) => {
    setActiveTab(e.target.id);
  };
  return (
    <React.Fragment>
      <Container className="py-5">
        {/* here is you nav buttons */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
              onClick={handleClick}
              id="tab1"
            >
              Tab 1
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
              onClick={handleClick}
              id="tab2"
            >
              Tab 2
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
              onClick={handleClick}
              id="tab3"
            >
              Tab 3
            </button>
          </li>
        </ul>
        {/* here is you data of all tabs */}
        <div className="tab-content">
          <div className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}>
            <p className="fs-2 text-success fw-bold">Tab 1 content</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa deserunt vitae ducimus qui quibusdam voluptas repellendus
              hic veniam ex autem, facere cumque explicabo nostrum minus natus
              libero maiores velit!
            </p>
          </div>
          <div className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}>
            <p className="fs-2 text-success fw-bold">Tab 2 content</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa deserunt vitae ducimus qui quibusdam voluptas repellendus
              hic veniam ex autem, facere cumque explicabo nostrum minus natus
              libero maiores velit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa deserunt vitae ducimus qui quibusdam voluptas repellendus
              hic veniam ex autem, facere cumque explicabo nostrum minus natus
              libero maiores velit!
            </p>
          </div>
          <div className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}>
            <p className="fs-2 text-success fw-bold">Tab 3 content</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa deserunt vitae ducimus qui quibusdam voluptas repellendus
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              culpa deserunt vitae ducimus qui quibusdam voluptas repellendus
            </p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default NavTabs;
