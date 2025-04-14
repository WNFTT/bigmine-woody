
import { usePrivy } from "@privy-io/react-auth";

export default function App() {
  const { ready, authenticated, login, logout, user } = usePrivy();

  if (!ready) return <div>🔄 Loading...</div>;

  return (
    <div style={{ padding: 40 }}>
      {!authenticated ? (
        <button onClick={login}>🔐 Connect Wallet</button>
      ) : (
        <>
          <p>✅ Connected as {user?.wallet?.address}</p>
          <button onClick={logout} style={{ marginTop: 20 }}>🚪 Disconnect</button>
        </>
      )}
    </div>
  );
}
