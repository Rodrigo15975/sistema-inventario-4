import AppSidebar from '@/components/AppSidebar/AppSidebar'
import Container from '@/components/common/Container'

const Layout = ({ children }) => {
  return (
    <>
      <main className="flex w-full">
        <AppSidebar />

        <Container>{children}</Container>
      </main>
    </>
  )
}

export default Layout
