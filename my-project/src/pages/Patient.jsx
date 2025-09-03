import React from 'react'
import Container from '../component/Container'
import Pagination from '../component/Pagination'

const Patient = () => {
  return (
    <div className='py-11'>
        <Container className="">
            <div className='  '>
              <Pagination itemsPerPage={6}></Pagination>
            </div>
            
        </Container>
    </div>
  )
}

export default Patient