import logo from '@/modules/login/img/logo.png'
import { Image } from 'primereact/image'
import { Sidebar } from 'react-pro-sidebar'
import LinksItemSidebar from './links-items-sidebar'
const AppSidebar = () => {
  return (
    <>
      <div className="px-4 h-screen max-xl:hidden xl:fixed w-80  border-r ">
        <div className="text-center my-4 border-b gap-2 items-center h-20 m-auto flex justify-center ">
          <Image loading="eager" width={60} height={60} src={logo} alt="logo" />
          <p className="text-3xl font-bold text-primary tracking-wider ">VP</p>
        </div>

        <Sidebar
          backgroundColor="white"
          rootStyles={{
            border: 'none',
          }}
        >
          <LinksItemSidebar />
        </Sidebar>
      </div>
    </>
  )
}

export default AppSidebar
