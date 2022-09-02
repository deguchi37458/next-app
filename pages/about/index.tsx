import Meta from '@/components/Common/Meta/'
import Container from '@/components/Common/Container/'
import AboutComponents from '@/components/About'

export default function About(): JSX.Element {
  return (
    <>
      <Container>
        <Meta
          pageTitle = "About"
          pageDesc = "Aboutページ" 
        />
        <AboutComponents />
      </Container>
    </>
  )
}