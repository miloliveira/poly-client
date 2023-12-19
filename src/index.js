// Import React and ReactDOM for rendering the application
import React from "react";
import ReactDOM from "react-dom/client";
// Import the main App component and performance reporting function
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import BrowserRouter for handling routing, AuthProviderWrapper for authentication context
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
// Redux store, Provider for connecting React with Redux, and TimeAgo for time formatting
import store from "./redux/store";
import { Provider } from "react-redux";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
// Configure default locales for time formatting
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

// Create a root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the application within a strict mode
root.render(
  <React.StrictMode>
    {/* Use BrowserRouter for routing */}
    <Router>
      {/* Wrap the entire application with AuthProviderWrapper for authentication context */}
      <AuthProviderWrapper>
        {/* Connect the application with the Redux store */}
        <Provider store={store}>
          {/* Render the main App component */}
          <App />
        </Provider>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
