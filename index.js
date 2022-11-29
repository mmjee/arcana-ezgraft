import { AuthProvider } from '@arcana/auth'

async function main () {
  const ap = new AuthProvider(process.env.ARCANA_APP_ADDRESS, {
    network: 'dev',
    alwaysVisible: true,
    theme: 'light',
    position: 'right'
  })
  await ap.init()
  await ap.connect()
  window.ethereum = ap.provider
  window.ethereum.enable = () => {
    return window.ethereum.request({
      method: 'eth_requestAccounts'
    })
  }
}

main().catch(e => console.error(e))
