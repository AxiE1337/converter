import React, { useState } from 'react'
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
  const currencyData = [
    'USD',
    'RUB',
    'AED',
    'NAD',
    'JPY',
    'AUD',
    'EUR',
    'CAD',
    'MXN',
    'NZD',
    'PLN',
  ]
  const [select1, setSelect1] = useState('RUB')
  const [select2, setSelect2] = useState('USD')
  const [inputData1, setInputData1] = useState('')
  const [inputData2, setInputData2] = useState('')

  async function getData1(value1, select1) {
    try {
      const currencyDataAPI = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select1.toLowerCase()}/${select2.toLowerCase()}.json`
      )
      setInputData2(
        (currencyDataAPI.data[select2.toLowerCase()] * value1).toFixed(2)
      )
    } catch (e) {
      console.log(e.message)
    }
  }
  async function getData2(value2, select2) {
    try {
      const currencyDataAPI = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${select2.toLowerCase()}/${select1.toLowerCase()}.json`
      )
      setInputData1(
        (currencyDataAPI.data[select1.toLowerCase()] * value2).toFixed(2)
      )
    } catch (e) {
      console.log(e.message)
    }
  }

  const selectHandler1 = (e) => {
    setSelect1(e.target.value)
    getData1(inputData1, e.target.value)
  }

  const selectHandler2 = (e) => {
    setSelect2(e.target.value)
    getData2(inputData2, e.target.value)
  }

  return (
    <div className={styles.currency}>
      <Typography variant='h2'>Currency converter</Typography>
      <section>
        <FormControl>
          <TextField
            variant='outlined'
            type='number'
            label={select1}
            value={inputData1}
            onChange={(e) => {
              setInputData1(e.target.value)
              getData1(e.target.value, select1)
            }}
          />
          <Select variant='outlined' value={select1} onChange={selectHandler1}>
            {currencyData.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <Typography variant='h1'>=</Typography>
        <FormControl>
          <TextField
            variant='outlined'
            type='number'
            label={select2}
            value={inputData2}
            onChange={(e) => {
              setInputData2(e.target.value)
              getData2(e.target.value, select2)
            }}
          />
          <Select variant='outlined' value={select2} onChange={selectHandler2}>
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
