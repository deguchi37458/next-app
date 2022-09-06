import BreadCrumb from '@/components/Common/BreadCrumb'

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
    </>
  )
}