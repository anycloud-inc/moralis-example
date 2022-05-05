import { Box } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { AppButton } from '../../components/AppButton'
import api from '../../lib/api'

export const Signin: React.VFC = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis()

  useEffect(() => {
    if (isAuthenticated) {
    }
  }, [isAuthenticated])

  const login = async () => {
    if (!isAuthenticated) {
      const user = await authenticate({
        signingMessage: 'Log in using Moralis',
      })

      const sessionToken = user!.getSessionToken()
      console.log(sessionToken)
      const result = await api.post('/signin', {
        sessionToken,
      })
    }
  }

  const logOut = async () => {
    await logout()
    console.log('logged out')
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <h1>Moralis Example</h1>
      <AppButton onClick={login}>Signin with Moralis</AppButton>
      <div style={{ marginTop: 16 }}>
        <AppButton onClick={logOut}>Signout</AppButton>
      </div>
    </Box>
  )
}
