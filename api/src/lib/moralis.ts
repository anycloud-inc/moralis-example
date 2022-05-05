import Moralis from 'moralis/node'
;(async () => {
  Moralis.start({
    serverUrl: process.env.MORALIS_SERVER_URL,
    appId: process.env.MORALIS_APP_ID,
    masterKey: process.env.MORALIS_MASTER_KEY,
  })
})()

export async function verifySessionToken(
  sessionToken: string
): Promise<boolean> {
  const query = new Moralis.Query('_Session')
  query.equalTo('sessionToken', sessionToken)
  const result = await query.find({ useMasterKey: true })
  return result.length !== 0
}
