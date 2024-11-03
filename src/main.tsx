import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import '@mantine/core/styles.css';
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import './i18n'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
  </StrictMode>
);
