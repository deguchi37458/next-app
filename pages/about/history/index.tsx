import Meta from '@/components/Common/Meta/'
import Container from '@/components/Common/Container/'
import HistoryComponents from '@/components/About/History'

export default function History(): JSX.Element {
  return (
    <>
      <Container>
        <Meta
          pageTitle = "History"
          pageDesc = "Historyページ" 
        />
        <HistoryComponents />
      </Container>
    </>
  )
}