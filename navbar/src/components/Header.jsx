import React from 'react'

function Header({ activeTab, setActiveTab, theme, toggleTheme }) {

  // navitems using custom keys
  const navItem = [
    { id: "home", label: "Home" },
    { id: "todos", label: "Todo List" },
    { id: "profile", label: "User Profile" },
    { id: "counter", label: "Counter" },
    { id: "fruits", label: "Fruit List" },
  ];

  const textColor = {

  }
  return (
    <>
      <header style={{
        width: "100%", padding: "10px 20px", backgroundColor: theme === 'light' ? '#f0f0f0' : '#3f3f3f',
        color: theme === 'light' ? '#000' : '#f0f0f0', position: "fixed", top: "0"
      }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <div className="logo" style={{ fontSize: "24px", fontWeight: "bold" }}>
            LOGO
          </div>

          {/* Navigation Items */}
          <div className="nav_items">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: "20px",
                margin: 0,
                padding: 0,
              }}
            >
              {navItem.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    backgroundColor: activeTab === item.id ? "#646cff" : "transparent",
                    color: activeTab === item.id ? "#fff" : "inherit",
                    transition: "background 0.3s",
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle Button */}
          <div className="toggleThemeButton">
            <button
              onClick={toggleTheme}
              style={{
                background: "#555",
                color: "#fff",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background 0.3s",
                marginRight: "40px"
              }}
            >
              {theme === "light" ? "🌙" : "🌞"}
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;