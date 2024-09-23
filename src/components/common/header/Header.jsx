import { Sidebar as SidebarMobile } from 'primereact/sidebar'
import { useState } from 'react'

import LinksItemSidebar from '@/components/appSidebar/links-items-sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Image } from 'primereact/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '@/modules/login/img/logo.png'
import avatarDefault from "./default.avif";

const Header = () => {
  const [visible, setVisible] = useState(false)
  const openSidebarMobile = () => setVisible(!visible)

  return (
    <div className="flex border-b items-center gap-3 xl:justify-end max-xl:justify-between">
      <div className="xl:hidden pl-4 ">
        <Button onClick={openSidebarMobile} className="rounded">
          <GiHamburgerMenu />
        </Button>
        <SidebarMobile
          style={{
            fontFamily: '"Poppins", sans-serif',
          }}
          visible={visible}
          onHide={openSidebarMobile}
          header={
            <Image
              loading="lazy"
              width={40}
              className="mx-auto"
              height={40}
              src={logo}
              alt="icon"
            />
          }
        >
          <LinksItemSidebar />
        </SidebarMobile>
      </div>

      <div className="flex lg:pr-6 py-3 pr-4 items-center flex-col gap-2">
        <Avatar>
          <AvatarImage
            loading="eager"
            src={avatarDefault}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge>Jokabel</Badge>
      </div>
    </div>
  )
}

export default Header
