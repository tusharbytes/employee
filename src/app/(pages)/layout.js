import React from 'react'
import Container from '../common/Container'
import Footer from '../components/Footer'

function layout({ children }) {
    return (
   
          <>
             {children}
             <Footer/>
              
      </>    
    )
}

export default layout