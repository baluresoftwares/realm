import React from 'react'
import Login from '@/components/Login/Login'
import { DefaultBranding } from '@/components/Login/Login'

export default function IndexPage({branding = DefaultBranding}) {
	return <Login branding={branding} />
}