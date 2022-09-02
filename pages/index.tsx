import type { NextPage } from 'next'

import Meta from '@/components/Common/Meta'
import Container from '@/components/Common/Container'
import Top from '@/components/Top/index'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Meta />
        <Top />
      </Container>
    </>
  )
}

export default Home
