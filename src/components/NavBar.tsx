function NavBar(): JSX.Element {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list--item">
          <button>
            <i className="material-symbols-outlined">menu</i>
          </button>
        </li>
        <li className="navbar-list--item m-auto" style={{ paddingLeft: 32 }}>
          Documentación
        </li>
        <li className="navbar-list--item">
          <button>
            <i className="material-symbols-outlined">calendar_month</i>
          </button>
        </li>
        <li className="navbar-list--item">
          <button>
            <i className="material-symbols-outlined">chat_bubble</i>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
