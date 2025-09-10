# Dynamic Dashboard with Widgets

This project is a React application using Redux Toolkit for state management.
It allows users to dynamically manage a dashboard with multiple categories and widgets.

Features

1 Dynamically build the dashboard UI from a JSON file containing categories and widgets.

2 Users can dynamically:
                     Add a widget to any category by specifying widget name and widget text.
                     Remove a widget from a category using a cross (X) button.

3 Each widget displays random text for demonstration purposes.

4 Users can search across all widgets using a search bar.

5 The entire state is managed via Redux and persisted in localStorage so data remains on page reload.

Tech Stack
 React
 Redux Toolkit (for state management)
 LocalStorage (for persistence)
 CSS (for styling)
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

npm install

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



