
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrivyProvider } from "@privy-io/react-auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrivyProvider
    appId="cm9gixcd400cbl40myxijxpf3"
    config={{
      embeddedWallets: {
        createOnLogin: "users-without-wallets"
      }
    }}
  >
    <App />
  </PrivyProvider>
);
