function Doktor() {
    return (
      
  <div className='dashboard'>
      <div className="dashboard-nav">
          <header><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a><a href="#"
                      className="brand-logo"><i
                     className="fas fa-anchor"></i> <span>BRAND</span></a></header>
          <nav className="dashboard-nav-list"><a href="#" className="dashboard-nav-item"><i className="fas fa-home"></i>
              Home </a><a
                  href="#" className="dashboard-nav-item active"><i className="fas fa-tachometer-alt"></i> dashboard
          </a><a
                  href="#" className="dashboard-nav-item"><i className="fas fa-file-upload"></i> Upload </a>
              <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                      className="fas fa-photo-video"></i> Media </a>
                  <div className='dashboard-nav-dropdown-menu'><a href="#"
                                                              className="dashboard-nav-dropdown-item">All</a><a
                          href="#" className="dashboard-nav-dropdown-item">Recent</a><a
                          href="#" className="dashboard-nav-dropdown-item">Images</a><a
                          href="#" className="dashboard-nav-dropdown-item">Video</a></div>
              </div>
              <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                      className="fas fa-users"></i> Users </a>
                  <div className='dashboard-nav-dropdown-menu'><a href="#"
                                                              className="dashboard-nav-dropdown-item">All</a><a
                          href="#" className="dashboard-nav-dropdown-item">Subscribed</a><a
                          href="#"
                          className="dashboard-nav-dropdown-item">Non-subscribed</a><a
                          href="#" className="dashboard-nav-dropdown-item">Banned</a><a
                          href="#" className="dashboard-nav-dropdown-item">New</a></div>
              </div>
              <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                      className="fas fa-money-check-alt"></i> Payments </a>
                  <div className='dashboard-nav-dropdown-menu'><a href="#"
                                                              className="dashboard-nav-dropdown-item">All</a><a
                          href="#" className="dashboard-nav-dropdown-item">Recent</a><a
                          href="#" className="dashboard-nav-dropdown-item"> Projections</a>
                  </div>
              </div>
              <a href="#" className="dashboard-nav-item"><i class="fas fa-cogs"></i> Settings </a><a
                      href="#" className="dashboard-nav-item"><i class="fas fa-user"></i> Profile </a>
            <div className="nav-item-divider"></div>
            <a
                      href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
          </nav>
      </div>
      <div className='dashboard-app'>
          <header className='dashboard-toolbar'><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a></header>
          <div className='dashboard-content'>
              <div className='container'>
                  <div className='card'>
                      <div className='card-header'>
                          <h1>Welcome back Jim</h1>
                      </div>
                      <div className='card-body'>
                          <p>Your account type is: Administrator</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    
    );
  }
  
  export default Doktor;