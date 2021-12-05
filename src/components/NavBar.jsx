import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select, MenuItem } from '@mui/material'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  const [selectData, setSelectData] = useState('/')
  const navigate = useNavigate()
  const selectHandler = (e) => {
    setSelectData(e.target.value)
    navigate(e.target.value)
  }
  return (
    <div className={styles.navbar}>
      <Select
        className={styles.select}
        value={selectData}
        onChange={selectHandler}
      >
        <MenuItem value='/'>Currency</MenuItem>
        <MenuItem value='/length'>Length</MenuItem>
      </Select>
    </div>
  )
}

export default NavBar
