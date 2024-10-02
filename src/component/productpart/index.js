import React from 'react'
import Container from '../container/Container'
import HomeTopBar from '../homepart/hometopbar'
import FooterElements from '../homepart/footerelements'
import Productdetails from './productdetails'
import Productbottompart from './productbottompart'
import './responsivepart.css'

function ProductPart() {
  return (
    <div>      
        <Container>
            <HomeTopBar/>
            <Productdetails/>
            <Productbottompart/>
        </Container>
        <FooterElements/>
    </div>
  )
}

export default ProductPart
