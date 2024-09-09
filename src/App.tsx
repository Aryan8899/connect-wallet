//new

import logo from './logo.svg';
import React, { useCallback } from 'react';
import './App.css';
import { WagmiConfig, createConfig} from 'wagmi';
import { mainnet, polygon, optimism} from 'wagmi/chains'
import { arbitrum } from 'viem/chains'
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi/react';
import { Web3Button, Web3Modal } from '@web3modal/react';
import { useWeb3Modal } from '@web3modal/wagmi/react'



// 1. Get projectId
const projectId = '023a4616f3bb8987407f5c86490dc9f9';
if(!projectId){
  throw new Error("pls provide project id");
}

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  
};

const chains = [mainnet, polygon, optimism, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains ,  themeVariables: {
  '--w3m-color-mix': '#00308F',
  '--w3m-color-mix-strength': 40
}});







function App() {
  return (
    <div className='w3m-button'>
  <WagmiConfig config={wagmiConfig} >
      <w3m-button />

    </WagmiConfig>

    </div>
    
  );
}

export default App;






