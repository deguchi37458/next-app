import Meta from '@/components/Common/Meta'
import Container from '@/components/Common/Container'
import WorkComponents from '@/components/Work'

export default function Work(): JSX.Element {
  return (
    <>
      <Container>
        <Meta
          pageTitle = "Work"
          pageDesc = "Workページ" 
        />
        <WorkComponents />
      </Container>
    </>
  )
}