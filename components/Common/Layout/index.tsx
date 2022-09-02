import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'

export default function Layout({children}: any){
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}