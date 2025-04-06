🧾 Employee Record System
This is a simple CRUD-based Employee Record Management system built using React, Redux, React Router, and React-Bootstrap. It allows you to:

Add new employees

View a list of employees

Edit employee details

Delete employees

Persist data using local storage

🛠️ Tech Stack
⚛️ React – Frontend framework

🌐 React Router DOM – For client-side routing

📦 Redux – State management

🧰 Redux Thunk – Middleware for async actions (future-ready)

💾 LocalStorage – Data persistence

🎨 Bootstrap – UI styling

📁 Project Structure
bash
Copy
Edit
src/
├── Emp/
│   ├── AddEmp.js          # Add new employee form
│   ├── UpdateEmp.js       # Edit existing employee
│   ├── ViewEmp.js         # Display employee list
│   └── Header.js          # Navigation bar
├── redux/
│   ├── Action.js          # Redux action types & creators
│   ├── EmpReducer.js      # Redux reducer
│   ├── Store.js           # Configured redux store with localStorage
│   └── utils/
│       └── LocalStorage.js  # Helpers to load/save to local storage
├── App.js                 # Main application with routing
└── index.js               # Entry point
🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/employee-record-system.git
cd employee-record-system
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm start
🔧 Features
✅ Add employee with name, age, email, password, gender, and hobbies

✅ Edit employee details from the list

✅ Delete employee entries

✅ State managed with Redux

✅ Persistent data using localStorage

✅ Bootstrap styled components

📸 Screenshots
Add Employee	View Employees	Edit Employee
⚙️ Customization
You can update the initial employee data inside EmpReducer.js:

js
Copy
Edit
const initialState = {
  employee: [
    { name: 'saloni', age: 18 },
    { name: 'sam', age: 20 },
  ],
}
📄 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Saloni Kahar
GitHub: salonikahar