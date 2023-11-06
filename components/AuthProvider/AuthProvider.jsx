"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({children, pageProps}) => {
    return (
        <SessionProvider session={pageProps.session}>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider
