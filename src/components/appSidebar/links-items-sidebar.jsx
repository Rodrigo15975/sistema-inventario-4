import React from 'react'
import { linksGeneral } from './paths-sidebar'
import { Menu, MenuItem } from 'react-pro-sidebar'
import { NavLink, useLocation } from 'react-router-dom'

const LinksItemSidebar = () => {
  const location = useLocation()
  const menuItemStyles = {
    icon: {
      fontSize: 20,
    },
    button: {
      ':hover': {
        transition: 'all .5s ease',
        background: `linear-gradient(225deg, rgba(50,50,50,0) 0%, rgba(28,24,24,0.07594756652661061) 100%);`,
      },
      borderRadius: '.5rem',
      transition: 'all .2s ease',
      marginTop: 5,
    },
  }

  return (
    <>
      <Menu
        menuItemStyles={{
          ...menuItemStyles,
        }}
      >
        <p className="mb-2 px-2 text-neutral-400 font-medium">Menu</p>
        {linksGeneral.map((link, index) => (
          <MenuItem
            icon={link.icon}
            component={
              <NavLink
                to={link.path}
                className={`w-full text-primary  ${
                  location.pathname === link.path && '!text-black'
                }  `}
              ></NavLink>
            }
            key={index}
            className={`font-semibold px-1 `}
          >
            {link.label}
          </MenuItem>
        ))}
        <p className="my-4 px-2 text-neutral-400 font-medium">General</p>
      </Menu>
    </>
  )
}

export default LinksItemSidebar
