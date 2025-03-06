import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '96%',
        transform: 'translateX(-50%)',
        backgroundColor: theme === 'light' ? '#333' : '#f0f0f0',
        color: theme === 'light' ? '#fff' : '#333',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '20px',
        cursor: 'pointer',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <span
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    fontSize: "24px",
    transition: "transform 0.3s ease-in-out",
    transform: theme === "light" ? "rotate(360deg)" : "rotate(0deg)",
  }}
>
  {theme === "light" ? "🌙" : "🌞"}
</span>

    </button>
  );
}

export default ThemeToggle;
