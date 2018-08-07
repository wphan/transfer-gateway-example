import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Main from './components/main'
import Home from './components/home'
import EthCards from './components/eth_cards'
import DAppChainCards from './components/dappchain_cards'
import EthAccountManager from './eth_account_manager'
import EthCardManager from './eth_card_manager'
import DAppChainAccountManager from './dc_account_manager'
import DAppChainCardManager from './dc_card_manager'
import GatewayManager from './gateway_manager'
;(async () => {
  const ethCardManager = await EthCardManager.createAsync()
  const ethAccountManager = await EthAccountManager.createAsync()
  const dcAccountManager = await DAppChainAccountManager.createAsync()
  const dcCardManager = await DAppChainCardManager.createAsync()
  const gatewayManager = await GatewayManager.createAsync()

  const BuildMain = () => (
    <Main
      ethAccountManager={ethAccountManager}
      ethCardManager={ethCardManager}
      dcAccountManager={dcAccountManager}
      dcCardManager={dcCardManager}
    />
  )

  const BuildHome = () => (
    <Home
      ethAccountManager={ethAccountManager}
      ethCardManager={ethCardManager}
      dcAccountManager={dcAccountManager}
      dcCardManager={dcCardManager}
    />
  )

  const BuildEthCards = () => (
    <EthCards
      ethAccountManager={ethAccountManager}
      ethCardManager={ethCardManager}
      dcAccountManager={dcAccountManager}
      dcCardManager={dcCardManager}
    />
  )

  const BuildDAppChainCards = () => (
    <DAppChainCards
      ethAccountManager={ethAccountManager}
      ethCardManager={ethCardManager}
      dcAccountManager={dcAccountManager}
      dcCardManager={dcCardManager}
      gatewayManager={gatewayManager}
    />
  )

  ReactDOM.render(
    <Router>
      <div>
        <header>
          <BuildMain />
        </header>

        <main role="main" style={{ marginTop: 100 }}>
          <div className="container">
            <Route exact path="/" component={BuildHome} />
            <Route path="/eth_cards" component={BuildEthCards} />
            <Route path="/dappchain_cards" component={BuildDAppChainCards} />
          </div>
        </main>
      </div>
    </Router>,
    document.getElementById('root')
  )
})()