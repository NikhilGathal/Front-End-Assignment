# Dynamic Dashboard with Widgets

A React application using Redux Toolkit for state management, allowing users to dynamically manage a dashboard with multiple categories and widgets. Users can add, remove, and search widgets, with state persisted in localStorage.

Features
1 Dynamic Dashboard
Build the dashboard UI from a JSON file containing categories and widgets.
2 Add Widgets
Users can add a widget to any category by specifying the widget name and widget text.
3 Remove Widgets
Each widget has a cross (X) button to remove it from its category.
4 Search Widgets
Users can search across all widgets using a search bar.
5 State Management & Persistence
All state is managed via Redux and persisted in localStorage to maintain data across page reloads.

Tech Stack
React
Redux Toolkit (state management)
LocalStorage (persistence)
CSS (styling)
Vite (build tool)


JSON Structure (Sample)
{
  "categories": [
    {
      "id": "cspm",
      "name": "CSPM Executive Dashboard",
      "widgets": [
        { "id": "w1", "name": "Cloud Accounts", "text": "Random text for Cloud Accounts" }
      ]
    },
    {
      "id": "cwpp",
      "name": "CWPP Dashboard",
      "widgets": []
    }
  ]
}


To Run Locally
git clone https://github.com/NikhilGathal/Front-End-Assignment.git
cd your-repo-name
npm instal
npm run dev

Project Structure
/src
  ├── /components
  │    ├── Category.jsx
  │    ├── Widget.jsx
  │    ├── AddWidgetModal.jsx
  │    ├── SearchBar.jsx
  │    └── ...
  ├── /redux
  │    ├── dashboardSlice.js
  │    └── store.js
  ├── App.jsx
  ├── index.jsx
  └── dashboard.json

🚀 Live Demo
Check out the live site [here](https://front-end-assignment-1.netlify.app/)

