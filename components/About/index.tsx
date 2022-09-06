import BreadCrumb from '@/components/Common/BreadCrumb'

export default function About(): JSX.Element {
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
          },
        ]}
      />
      <h1>AboutContents</h1>
    </>
  )
}