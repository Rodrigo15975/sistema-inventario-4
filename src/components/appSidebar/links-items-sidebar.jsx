import React from "react"
import { linksGeneral } from "./paths-sidebar"
import { Menu, MenuItem } from "react-pro-sidebar"
import { NavLink, useLocation } from "react-router-dom"

const LinksItemSidebar = () => {
  const location = useLocation()

  const menuItemStyles = {
    icon: {
      fontSize: 20,
    },
    button: {
      ":hover": {
        transition: "all .5s ease",
        background:
          "linear-gradient(0deg, rgba(59,109,250,0.4064797794117647) 0%, rgba(113,196,255,0.41208202030812324) 100%);",
        // color: "white",
        // background: `linear-gradient(225deg, rgba(50,50,50,0) 0%, rgba(28,24,24,0.07594756652661061) 100%);`,
      },
      borderRadius: ".5rem",
      transition: "all .2s ease",
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
        <p className="mb-2 px-2 text-neutral-400 font-light">Menu</p>
        {linksGeneral.map((link, index) => (
          <MenuItem
            icon={
              <span
                className={`text-blue-600 ${
                  location.pathname === link.path && "!text-white"
                }`}
              >
                {link.icon}
              </span>
            }
            component={<NavLink to={link.path} className={`w-full`}></NavLink>}
            key={index}
            className={`font-semibold px-1  bg-gradient-to-tl from-slate-800/20 via-blue-600 to-sky-500 bg-clip-text text-transparent`}
          >
            {link.label}
          </MenuItem>
        ))}
        <p className="my-4 px-2 text-neutral-400 font-light">General</p>
      </Menu>
    </>
  )
}

export default LinksItemSidebar
