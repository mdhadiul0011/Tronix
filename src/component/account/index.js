import React from 'react'
import Container from '../container/Container'
import HomeTopBar from '../homepart/hometopbar'
import FooterElements from '../homepart/footerelements'
import './style.css'
import './responsive.css'
import MyAccounts from './MyAccounts'

function MyAccountPage() {
  return (
    <div>
      <Container>
        <HomeTopBar/>
        <MyAccounts/>
      </Container>
      <FooterElements/>
    </div>
  )
}

export default MyAccountPage
