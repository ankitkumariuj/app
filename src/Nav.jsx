import React from 'react'

export default function Nav() {

   
  return (
    <nav class={"navbar navbar-expand-lg navbar-dark bg-dark"}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Moviesearches</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="from-control me-2" type="search" placeholder="search" aria-label="search"></input>
        <button class="btn btn-outline-success" type="submit" >search</button>
      </form>
    </div>
  </div>
</nav>

)
}

