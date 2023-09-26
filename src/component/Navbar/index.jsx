import React, { useContext, useState } from 'react'
import "./index.css"
import { Links } from '../../assets/Data'
import { NavLink } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import { NavContext } from '../../hook/NavContext'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const { NavEnabled, ToggleNavEnabled } = useContext(NavContext);

  return (
    <div className='nav'>
      <div className={`nav__menu ${showMenu && 'nav__menu show-menu'}`}
        style={{zIndex:NavEnabled && 100}}
      >
        <ul className='nav__list'>
          {Links.map((item) => {
            return (
              <li className='nav__item' key={item.id}>
                <NavLink onClick={() => {
                  setShowMenu(!showMenu)
                  ToggleNavEnabled()
                }


                } to={item.path} className={'nav__link'}>
                  {item.icon}
                  <h3 className='nav__name'>{item.name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        className={` ${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'} `}
        cursor={'pointer'}
        zIndex={NavEnabled && 100}
        onClick={() => {
          setShowMenu(!showMenu)
          ToggleNavEnabled()
        }
        }
      >
        <span></span>
        <span></span>
        <span></span>

      </Flex>
    </div>
  )
}
