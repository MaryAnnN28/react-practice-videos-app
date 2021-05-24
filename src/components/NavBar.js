import React from 'react'

const NavBar = () => {
  return (
    <div class="navbar-menu ui labeled icon menu" style={{ backgroundColor: '#1B41A1' }}>
      {/* <a class="item" style={{ color: '#efefef'}}>
        <i class="gamepad icon"></i>
        Games
      </a>
      <a class="item" style={{ color: '#efefef'}}>
        <i class="video camera icon"></i>
        Channels
      </a> */}
      <a href="https://www.youtube.com" className="item" style={{ color: '#efefef'}}>
        <i class="video play icon"></i>
        Videos
      </a>

    </div>
  )
}

export default NavBar;
