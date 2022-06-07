import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { ThemeProvider } from "@mui/system";
import { themeOptions } from "./style/material-themes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "47b69eb399e840fa8202a3316e1bd891",
  clientSecret: "e2378a61c66844758c042e6f206c92ca",
  redirectUri: "http://localhost:3000/",
});
const store = configureStore(spotifyApi);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={themeOptions}>
          <App spotifyApi={spotifyApi} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
