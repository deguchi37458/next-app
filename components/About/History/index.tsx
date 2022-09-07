import BreadCrumb from '@/components/Common/BreadCrumb'

import Accordion from '@/components/Common/Accordion'

export default function History(): JSX.Element {
  return (
    <>
      <BreadCrumb 
        lists={[
          {
            name: "ホーム",
            path: "/",
          },
          {
            name: "About",
            path: "/about",
          },
          {
            name: "History",
          },
        ]}
      />
      <h1>HistoryContents</h1>
      <Accordion heading="1994">
        <p>1994テキスト</p>
      </Accordion>
      <Accordion heading="1995">
        <p>1995テキスト</p>
      </Accordion>
      <Accordion heading="1996">
        <p>1996テキスト</p>
      </Accordion>
    </>
  )
}