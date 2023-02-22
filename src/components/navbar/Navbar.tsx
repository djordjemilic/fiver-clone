import { useEffect, useState } from "react";
import "./Navbar.scss";

interface User {
  id: number;
  username: string;
  isSeller: boolean;
}

const Navbar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentUser: User = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const handleIsActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsActive);

    return () => {
      window.removeEventListener("scroll", handleIsActive);
    };
  }, []);

  return (
    <header className={active ? "nav active" : "nav"}>
      <div className="container">
        <div className="nav__logo">
          {/* <Link to=""> */}
          <span className="logo__text">fiverr</span>
          <span className="logo__dot">.</span>
          {/* </Link> */}
        </div>
        <nav className="nav__links">
          <ul className="nav__list">
            <li className="list__item">Fiverr Business</li>
            <li className="list__item">Explore</li>
            <li className="list__item">English</li>
            <li className="list__item">Sign in</li>
            {!currentUser?.isSeller && <li className="list__item">Become a seller</li>}
          </ul>
          {!currentUser && <button className="nav__btn">Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setIsOpen(!isOpen)}>
              <img src="/src/assets/images/george-profile-photo.png" alt="user" />
              <span>{currentUser?.username}</span>
              {isOpen && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>

      {active ? (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Navbar;
