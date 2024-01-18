"use client"

import React, { useEffect } from 'react'
// GA 4 Implement
import TagManager from 'react-gtm-module'
// GA 4 Implement

export default function DashboardPage() {
  useEffect(() => {
    console.log("Running Google Tag manager !");

    TagManager.initialize({ gtmId: 'GTM-5S4T4Q4M' });
}, []);
  return (
    <div>Dashboard page</div>
  )
}
