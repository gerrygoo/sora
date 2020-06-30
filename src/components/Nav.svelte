<style>
  nav {
    position: fixed;
    top: 0;
    background-color: white;
    width: 100vw;
    margin-left: 2em;
    font-weight: 300;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  a {
    text-decoration: none;
    padding-right: 1em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a href=".">blue</a>
    </li>
    <li>
      <a preload href="archive">archive</a>
    </li>
  </ul>
</nav>
