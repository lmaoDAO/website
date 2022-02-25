import web3 from 'web3'
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const ClaimLmaoButton = () => {

	async function openWallet() {

    const providerOptions = {
      /* See Provider Options Section */
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "86c0c2a8ec8e40c09910b657114d6ab7" // required
        }
      }
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });

    console.log("WEB 3 Modal", web3Modal);

    const provider = await web3Modal.connect();

    console.log("PROVIDER", provider);

    console.log('Requesting wallet to switch to network: Gnosis Chain');
    try {
        await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x64' }],
        });
    } catch (switchError) {
        // add network
        if (switchError.code === 4902) {
            try {
                await provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                      chainId: '0x64',
                      blockExplorerUrls: ['https://blockscout.com/xdai/mainnet/'],
                      chainName: 'Gnosis Chain',
                      nativeCurrency: {
                        name: 'xDai',
                        symbol: 'xDai',
                        decimals: 18
                      },
                      rpcUrls: ['https://rpc.xdaichain.com/']
                    }],
                });
            } catch (addError) {
                console.log('addError', addError);
            }
        } else {
            console.log('switchError', switchError);
        }
    }

    console.log("WALLET CONNECTED", provider, web3);

    setTimeout(() => {
          try {
      provider.sendAsync({
        jsonrpc: '2.0', 
        method: 'wallet_watchAsset',
        params: {
        type: 'ERC20', 
        options: {
            address: "0x7Be80D713b7097b802faCc6f6280273399aF8C63", 
            symbol: "LMAO", 
            decimals: 18,
            image: "https://cdn.discordapp.com/attachments/783803064582799370/944753837850361866/lmaodao_yellow.png", 
          },
        }, 
        id: new Date().getTime() 
      }, console.log);
    } catch(error) {
      console.error(error);
      alert(error);
    }
    }, 1000);

  }

	return (<button onClick={openWallet} className="font-mono bg-orange-600 p-6 mr-6 mb-6 w-full md:w-11/12 rounded">Get my LMAO</button>)
}

export default ClaimLmaoButton;