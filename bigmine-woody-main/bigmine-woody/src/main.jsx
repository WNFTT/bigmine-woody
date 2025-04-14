
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrivyProvider } from "@privy-io/react-auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrivyProvider
    appId="cm04asygd041fmry9zmcyn5o5"
    config={{
      embeddedWallets: {
        createOnLogin: "users-without-wallets"
      }
    }}
  >
    <App />
  </PrivyProvider>
);
