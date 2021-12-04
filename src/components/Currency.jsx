import React, { useState, useEffect } from 'react'
import styles from '../styles/currency.module.css'
import axios from 'axios'
import {
  Typography,
  TextField,
  Select,
  FormControl,
  MenuItem,
} from '@mui/material'

const Currency = () => {
  const currencyData = ['USD', 'RUB', 'AED', 'NAD', 'JPY']
  const [select1, setSelect1] = useState('RUB')
  const [select2, setSelect2] = useState('USD')
  const [inputData1, setInputData1] = useState('')
  const [inputData2, setInputData2] = useState('')

  useEffect(() => {
    getData1(inputData1)
  }, [select1])

  useEffect(() => {
    getData2(inputData2)
  }, [select2])

  async function getData1(value) {
    try {
      const currencyDataAPI = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select1.toLowerCase()}/${select2.toLowerCase()}.json`
      )
      setInputData2(
        (currencyDataAPI.data[select2.toLowerCase()] * value).toFixed(2)
      )
    } catch (e) {
      console.log(e.message)
    }
  }
  async function getData2(value) {
    try {
      const currencyDataAPI = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select2.toLowerCase()}/${select1.toLowerCase()}.json`
      )
      setInputData1(
        (currencyDataAPI.data[select1.toLowerCase()] * value).toFixed(2)
      )
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className={styles.currency}>
      <Typography variant='h2'>Currency</Typography>
      <section>
        <FormControl>
          <TextField
            variant='outlined'
            label={select1}
            value={inputData1}
            onChange={(e) => {
              setInputData1(e.target.value)
              getData1(e.target.value)
            }}
          />
          <Select
            variant='outlined'
            value={select1}
            onChange={(e) => {
              setSelect1(e.target.value)
            }}
          >
            {currencyData.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <FormControl>
          <TextField
            variant='outlined'
            label={select2}
            value={inputData2}
            onChange={(e) => {
              setInputData2(e.target.value)
              getData2(e.target.value)
            }}
          />
          <Select
            variant='outlined'
            value={select2}
            onChange={(e) => {
              setSelect2(e.target.value)
            }}
          >
            {currencyData.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </section>
    </div>
  )
}

export default Currency
