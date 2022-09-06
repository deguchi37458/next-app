import BreadCrumb from '@/components/Common/BreadCrumb'

export default function Work(): JSX.Element {
  return (
    <>
      <BreadCrumb 
        lists={[
          {
            name: "ホーム",
            path: "/",
          },
          {
            name: "Work",
          },
        ]}
      />
      <h1>WorkContents</h1>
    </>
  )
}