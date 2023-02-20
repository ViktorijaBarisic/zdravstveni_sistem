function Pacijent() {
    return (
      
      <div>
      <div class="header-blue">
          <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
              <div class="container"><a class="navbar-brand" href="#">Company Name</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse"
                      id="navcol-1">
                      <ul class="nav navbar-nav">
                          <li class="nav-item" role="presentation"><a class="nav-link active" href="/login">Link</a></li>
                          {/* <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true" href="">Dropdown </a> */}
                              {/* <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="/doktor">First Item</a><a class="dropdown-item" role="presentation" href="/administrator">Second Item</a><a class="dropdown-item" role="presentation" href="/administrator">Third Item</a></div> */}
                          <li class="nav-item"> Pretraži <select class="dropdown dropdown-toggle nav-link dropdown-toggle menu"  > 
                            <option value="/login" > Dijagnoze </option>
                            <option value="/login" > Terapije </option>
                            <option value="/login" > Preglede </option>



                          </select>
                          </li>
                          {/* </li> */}
                      </ul>
                      <form class="form-inline mr-auto" target="_self">
                          <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><p class="form-control search-field"  id="search-field"> </p></div>
                      </form><span class="navbar-text"> <a href="#" class="login">Log In</a></span><a class="btn btn-light action-button" role="button" href="#">Sign Up</a></div>
              </div>
          </nav>
          <div class="container hero">
              <div class="row">
                  <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                      <h1>The revolution is here.</h1>
                      <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p><button class="btn btn-light btn-lg action-button" type="button">Learn More</button></div>
                  <div
                      class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                      {/* <div class="iphone-mockup"><img src="assets/img/iphone.svg" class="device"> */}
                          <div class="screen"></div>
                      </div>
              </div>
          </div>
      </div>
  </div>
  //  </div> 
  
  
  
      
  
    
    );
  }
  
  export default Pacijent;