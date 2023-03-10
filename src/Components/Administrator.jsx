function Administrator() {
    return (
      
  <div class="nav-side-menu">
      <div class="brand">Zdravstveni sistem</div>
      <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
    
          <div class="menu-list">
    
              <ul id="menu-content" class="menu-content collapse out">
                  <li>
                    <a href="*">
                    <i class="fas fa-tachometer-alt fa-lg"></i> Dodaj doktora
                    </a>
                  </li>
  
                  <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                    <a href="*"><i class="fab fa-studiovinari fa-lg"></i> Dodaj pacijenta <span class="arrow"></span></a>
                  </li>
                  <ul class="sub-menu collapse" id="products">
                      <li class="active"><a href="#">Obriši</a></li>
                      <li><a href="#">General</a></li>
                      <li><a href="#">Buttons</a></li>
                      <li><a href="#">Tabs & Accordions</a></li>
                      <li><a href="#">Typography</a></li>
                      <li><a href="#">FontAwesome</a></li>
                      <li><a href="#">Slider</a></li>
                      <li><a href="#">Panels</a></li>
                      <li><a href="#">Widgets</a></li>
                      <li><a href="#">Bootstrap Model</a></li>
                  </ul>
  
  
                  <li data-toggle="collapse" data-target="#service" class="collapsed">
                    {/* <a href="#"> */}
                      <i class="fab fa-fort-awesome-alt fa-lg"></i> Obriši <span class="arrow"></span>
                      {/* </a> */}
                  </li>  
                  <ul class="sub-menu collapse" id="service">
                    <li>New Service 1</li>
                    <li>New Service 2</li>
                    <li>New Service 3</li>
                  </ul>
  
  
                  <li data-toggle="collapse" data-target="#new" class="collapsed">
                    <a href="#"><i class="fab fa-pagelines fa-lg"></i> New <span class="arrow"></span></a>
                  </li>
                  <ul class="sub-menu collapse" id="new">
                    <li>New New 1</li>
                    <li>New New 2</li>
                    <li>New New 3</li>
                  </ul>
  
  
                   <li>
                    <a href="#">
                    <i class="fas fa-user-tie fa-lg"></i> Profile
                    </a>
                    </li>
  
                   <li>
                    <a href="#">
                    <i class="fa fa-users fa-lg"></i> Users
                    </a>
                  </li>
              </ul>
       </div>
  </div>
    
    );
  }
  
  export default Administrator;