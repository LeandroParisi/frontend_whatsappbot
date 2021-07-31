import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import logo from 'assets/images/logos/logo_transparent.png'
import { Squash as Hamburger } from 'hamburger-react'
import SideBar from 'components/SideBar/SideBar'
import { Button } from 'components'
import routes from 'libs/routes'
import styles from './Header.module.scss'

const Header = ({
  openMenu,
  setOpenMenu,
}) => {
  const history = useHistory()

  return (
    <header className={styles.header}>
      <Hamburger
        toggled={openMenu}
        toggle={() => setOpenMenu(!openMenu)}
      />
      <Button onClick={() => history.push(routes.dashboard)} className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Button>
      <SideBar isOpened={openMenu} />
    </header>
  )
}

Header.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
}

export default Header
