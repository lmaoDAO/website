import logo from "./logo.svg";
import "./App.css";

import ClaimLmaoButton from "./ClaimLmaoButton";

function App() {
  const onClickLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="App">
      <header className="App-header bg-black">
        <img
          className="max-w-md w-1/2 p-8 md:p-16"
          src="https://embed.filekitcdn.com/e/vTXpSa3VuMSrSVnc4sEZpe/swMSCfNiMBiSdXLUiRpuLr/email"
        ></img>
        <h1 class="font-mono text-5xl font-bold">lmaoDAO</h1>
        <div className="grid grid-cols md:grid-cols-3 p-8 md:p-16 w-screen md:w-auto">
          <ClaimLmaoButton />
          <button
            onClick={() => onClickLink("https://discord.gg/dPwGdZJJpk")}
            className="font-mono bg-orange-600 p-6 mr-6 mb-6 w-full md:w-11/12 rounded"
          >
            Join Discord
          </button>
          <button
            onClick={() => onClickLink("https://vote.lmaodao.io")}
            className="font-mono bg-orange-600 p-6 mr-6 mb-6 w-full md:w-11/12 rounded"
          >
            Vote
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
