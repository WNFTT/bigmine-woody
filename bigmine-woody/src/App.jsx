
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { ethers } from "ethers";

const mineAddress = "0xdc5F7aEd25A04D5004Efcb0D61175924424479c4";
const bigAddress = "0x09ee83d8fa0f3f03f2aefad6a82353c1e5de5705";

export default function App() {
  const { ready, authenticated, login, logout } = usePrivy();
  const { wallets } = useWallets();
  const smartWallet = wallets.find(w => w.walletClientType === "privy");

  const claimBoth = async () => {
    if (!smartWallet) return alert("請先登入 AGW 錢包");

    const iface = new ethers.utils.Interface(["function claimRewards()"]);
    try {
      const tx1 = await smartWallet.sendTransaction({
        to: mineAddress,
        data: iface.encodeFunctionData("claimRewards"),
      });
      await tx1.wait?.();

      const tx2 = await smartWallet.sendTransaction({
        to: bigAddress,
        data: iface.encodeFunctionData("claimRewards"),
      });
      await tx2.wait?.();

      alert("領取完成！");
    } catch (err) {
      console.error(err);
      alert("交易失敗：" + err.message);
    }
  };

  if (!ready) return <div style={{ padding: 20 }}>🔄 載入中...</div>;

  return (
    <div style={{ padding: 40 }}>
      {!authenticated ? (
        <button onClick={login}>🔐 登入 AGW 錢包</button>
      ) : (
        <>
          <p>✅ 已登入 AGW 錢包</p>
          <button onClick={claimBoth}>🎁 一鍵領取 MINE & BIG</button><br />
          <button onClick={logout} style={{ marginTop: 20 }}>🚪 登出</button>
        </>
      )}
    </div>
  );
}
