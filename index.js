import { AuthProvider } from '@arcana/auth'

async function main () {
  const ap = new AuthProvider(process.env.ARCANA_APP_ADDRESS, {
    network: 'dev',
    alwaysVisible: true,
    theme: 'light',
    position: 'right'
  })
  const ep = ap.provider
  window.ethereum = ep
  window.ethereum.enable = () => {
    return ep.request({
      method: 'eth_requestAccounts'
    })
  }
  await ap.init()
  await ap.connect()
}

main().catch(e => console.error(e))
