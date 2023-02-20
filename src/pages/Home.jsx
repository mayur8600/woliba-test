import React from 'react'
import CommingSoon from '../component/CommingSoon'
import Layout from '../component/Layout'

function Home() {
  return (
    <Layout children={<CommingSoon />} />
  )
}

export default Home