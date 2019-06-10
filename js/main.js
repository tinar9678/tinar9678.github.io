'use strict';
/** @jsx React.DOM */

const navElement = (
  <nav class="navbar custom-navbar">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainnav" aria-controls="mainnav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="mainnav">
      <ul class="nav nav-pills nav-stacked">
        <li class="nav-item"><a href="#">tina</a></li>
        <li class="nav-item"><a class="nav-link" href="#projects" onclick="click()">projects</a></li>
        <li class="nav-item"><a class="nav-link" href="#resources" onclick="click()">resources</a></li>
        <li class="nav-item"><a class="nav-link" href="#conferences" onclick="click()">conferences</a></li>
        <li class="nav-item"><a class="nav-link" href="#symposium" onclick="click()">symposium</a></li>
      </ul>
    </div>
  </nav>
);
class Navbar extends React.Component {
  render(
        navElement,
        document.getElementById("topnav")
  );
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
