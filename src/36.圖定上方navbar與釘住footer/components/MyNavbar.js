import React, { useState, useEffect } from 'react'

function MyNavbar(props) {
  return (
    <>
      <div className="container">
        <div className="row align-items-center header-height">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <a className="navbar-brand p-0 lll-distance-logo" href="#">
                <img
                  src="/img/lydia/SimpleMeal_LOGO.png"
                  className="lll-logo-square"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto align-items-center">
                  <li className="nav-item active">
                    <a className="txt-sub1 lll-header-list" href="#">
                      最新活動
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="txt-sub1 lll-header-list" href="#">
                      關於我們
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="dropdown-toggle txt-sub1 lll-header-list"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      菜單介紹
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="txt-sub1 lll-header-list lll-header-list-item"
                        href="#"
                      >
                        菜單介紹
                      </a>
                      <a
                        className="txt-sub1 lll-header-list lll-header-list-item"
                        href="#"
                      >
                        共享食譜
                      </a>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <a className="txt-sub1 lll-header-list" href="#">
                      驚喜廚房
                    </a>
                  </li>
                </ul>
              </div>

              <ul className="list-unstyled d-flex m-0 lll-disappear">
                <li id="blank-square-left-1"></li>
                <li id="blank-square-left-2">
                  <a className="lll-header-icon-style" href="#">
                    <span className="txt-sub1 lll-header-icon-distance">
                      購物車
                    </span>
                    <i className="fas fa-shopping-cart lll-icon-distance"></i>
                  </a>
                </li>
                <li id="blank-square-left-3">
                  <a className="lll-header-icon-style" href="#">
                    <span className="txt-sub1 lll-header-icon-distance">
                      我的成就
                    </span>
                    <i className="fas fa-medal lll-icon-distance"></i>
                  </a>
                </li>
                <li id="blank-square-left-4">
                  <a className="lll-header-icon-style" href="#">
                    <span className="txt-sub1 lll-header-icon-distance">
                      會員中心
                    </span>
                    <i className="fas fa-user"></i>
                  </a>
                </li>
                <li>
                  <a className="lll-header-icon-style lll-qa-distance" href="#">
                    <i className="far fa-question-circle"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyNavbar
