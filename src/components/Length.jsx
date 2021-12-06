import React, { useState } from 'react'
import styles from '../styles/Length.module.css'
import {
  Typography,
  TextField,
  Select,
  FormControl,
  MenuItem,
  Button,
} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const Length = () => {
  const selectData = [
    'kilometers',
    'miles',
    'centimeter',
    'millimeter',
    'feet',
    'inch',
    'Meter',
  ]
  const [select1, setSelect1] = useState('kilometers')
  const [select2, setSelect2] = useState('miles')
  const [inputData1, setInputData1] = useState('')
  const [inputData2, setInputData2] = useState('')
  const [arrow, setArrow] = useState(true)

  function inputHandler1(value, select1) {
    setInputData1(value)
    setArrow(true)
    if (select1.includes('kilometers')) {
      if (select2.includes('kilometers')) {
        setInputData2(value)
      } else if (select2.includes('miles')) {
        setInputData2(value / 1.6)
      } else if (select2.includes('centimeter')) {
        setInputData2(value * 100000)
      } else if (select2.includes('millimeter')) {
        setInputData2(value * 1000000)
      } else if (select2.includes('feet')) {
        setInputData2(value * 3280.84)
      } else if (select2.includes('inch')) {
        setInputData2(value * 39370.08)
      } else if (select2.includes('Meter')) {
        setInputData2(value * 1000)
      }
    } else if (select1.includes('miles')) {
      if (select2.includes('miles')) {
        setInputData2(value)
      } else if (select2.includes('kilometers')) {
        setInputData2(value * 1.6)
      } else if (select2.includes('centimeter')) {
        setInputData2(value * 160935)
      } else if (select2.includes('millimeter')) {
        setInputData2(value * 1609350)
      } else if (select2.includes('feet')) {
        setInputData2(value * 5280)
      } else if (select2.includes('inch')) {
        setInputData2(value * 63360)
      } else if (select2.includes('Meter')) {
        setInputData2(value * 1609.344)
      }
    } else if (select1.includes('centimeter')) {
      if (select2.includes('centimeter')) {
        setInputData2(value)
      } else if (select2.includes('kilometers')) {
        setInputData2(value * 0.00001)
      } else if (select2.includes('miles')) {
        setInputData2(value * 0.000006213712)
      } else if (select2.includes('millimeter')) {
        setInputData2(value * 10)
      } else if (select2.includes('feet')) {
        setInputData2(value * 0.0328084)
      } else if (select2.includes('inch')) {
        setInputData2(value * 0.3937007992)
      } else if (select2.includes('Meter')) {
        setInputData2(value * 0.0100000002997)
      }
    } else if (select1.includes('millimeter')) {
      if (select2.includes('millimeter')) {
        setInputData2(value)
      } else if (select2.includes('kilometers')) {
        setInputData2(value * 0.000001)
      } else if (select2.includes('miles')) {
        setInputData2((value * 0.0000006213712).toFixed(10))
      } else if (select2.includes('centimeter')) {
        setInputData2(value * 0.1)
      } else if (select2.includes('feet')) {
        setInputData2(value * 0.00328084)
      } else if (select2.includes('inch')) {
        setInputData2(value * 0.03937008)
      } else if (select2.includes('Meter')) {
        setInputData2(value * 0.001)
      }
    } else if (select1.includes('feet')) {
      if (select2.includes('feet')) {
        setInputData2(value)
      } else if (select2.includes('kilometers')) {
        setInputData2(value * 0.0003048)
      } else if (select2.includes('miles')) {
        setInputData2((value * 0.0001893939).toFixed(10))
      } else if (select2.includes('centimeter')) {
        setInputData2(value * 30.48)
      } else if (select2.includes('millimeter')) {
        setInputData2(value * 304.8)
      } else if (select2.includes('inch')) {
        setInputData2(value * 12)
      } else if (select2.includes('Meter')) {
        setInputData2(value * 0.3048)
      }
    } else if (select1.includes('inch')) {
      if (select2.includes('inch')) {
        setInputData2(value)
      } else if (select2.includes('kilometers')) {
        setInputData2(value * 0.0000254)
      } else if (select2.includes('miles')) {
        setInputData2((value * 0.00001578283).toFixed(10))
      } else if (select2.includes('centimeter')) {
        setInputData2(value * 2.54)
      } else if (select2.includes('millimeter')) {
        setInputData2(value * 25.4)
      } else if (select2.includes('feet')) {
        setInputData2(value * 0.08333333)
      } else if (select2.includes('Meter')) {
        setInputData2(value * 0.0254)
      }
    } else if (select1.includes('Meter')) {
      if (select2.includes('Meter')) {
        setInputData2(value)
      } else if (select2.includes('kilometers')) {
        setInputData2(value * 0.001)
      } else if (select2.includes('miles')) {
        setInputData2((value * 0.0006213712).toFixed(10))
      } else if (select2.includes('centimeter')) {
        setInputData2(value * 100)
      } else if (select2.includes('millimeter')) {
        setInputData2(value * 1000)
      } else if (select2.includes('feet')) {
        setInputData2(value * 3.28084)
      } else if (select2.includes('inch')) {
        setInputData2(value * 3.28084)
      }
    }
  }

  function inputHandler2(value, select2) {
    setInputData2(value)
    setArrow(false)
    if (select2.includes('kilometers')) {
      if (select1.includes('kilometers')) {
        setInputData1(value)
      } else if (select1.includes('miles')) {
        setInputData1(value / 1.6)
      } else if (select1.includes('centimeter')) {
        setInputData1(value * 100000)
      } else if (select1.includes('millimeter')) {
        setInputData1(value * 1000000)
      } else if (select1.includes('feet')) {
        setInputData1(value * 3280.84)
      } else if (select1.includes('inch')) {
        setInputData1(value * 39370.08)
      } else if (select1.includes('Meter')) {
        setInputData1(value * 1000)
      }
    } else if (select2.includes('miles')) {
      if (select1.includes('miles')) {
        setInputData1(value)
      } else if (select1.includes('kilometers')) {
        setInputData1(value * 1.6)
      } else if (select1.includes('centimeter')) {
        setInputData1(value * 160935)
      } else if (select1.includes('millimeter')) {
        setInputData1(value * 1609350)
      } else if (select1.includes('feet')) {
        setInputData1(value * 5280)
      } else if (select1.includes('inch')) {
        setInputData1(value * 63360)
      } else if (select1.includes('Meter')) {
        setInputData1(value * 1609.344)
      }
    } else if (select2.includes('centimeter')) {
      if (select1.includes('centimeter')) {
        setInputData1(value)
      } else if (select1.includes('kilometers')) {
        setInputData1(value * 0.00001)
      } else if (select1.includes('miles')) {
        setInputData1(value * 0.000006213712)
      } else if (select1.includes('millimeter')) {
        setInputData1(value * 10)
      } else if (select1.includes('feet')) {
        setInputData1(value * 0.0328084)
      } else if (select1.includes('inch')) {
        setInputData1(value * 0.3937007992)
      } else if (select1.includes('Meter')) {
        setInputData1(value * 0.0100000002997)
      }
    } else if (select2.includes('millimeter')) {
      if (select1.includes('millimeter')) {
        setInputData1(value)
      } else if (select1.includes('kilometers')) {
        setInputData1(value * 0.000001)
      } else if (select1.includes('miles')) {
        setInputData1((value * 0.0000006213712).toFixed(10))
      } else if (select1.includes('centimeter')) {
        setInputData1(value * 0.1)
      } else if (select1.includes('feet')) {
        setInputData1(value * 0.00328084)
      } else if (select1.includes('inch')) {
        setInputData1(value * 0.03937008)
      } else if (select1.includes('Meter')) {
        setInputData1(value * 0.001)
      }
    } else if (select2.includes('feet')) {
      if (select1.includes('feet')) {
        setInputData1(value)
      } else if (select1.includes('kilometers')) {
        setInputData1(value * 0.0003048)
      } else if (select1.includes('miles')) {
        setInputData1((value * 0.0001893939).toFixed(10))
      } else if (select1.includes('centimeter')) {
        setInputData1(value * 30.48)
      } else if (select1.includes('millimeter')) {
        setInputData1(value * 304.8)
      } else if (select1.includes('inch')) {
        setInputData1(value * 12)
      } else if (select1.includes('Meter')) {
        setInputData1(value * 0.3048)
      }
    } else if (select2.includes('inch')) {
      if (select1.includes('inch')) {
        setInputData1(value)
      } else if (select1.includes('kilometers')) {
        setInputData1(value * 0.0000254)
      } else if (select1.includes('miles')) {
        setInputData1((value * 0.00001578283).toFixed(10))
      } else if (select1.includes('centimeter')) {
        setInputData1(value * 2.54)
      } else if (select1.includes('millimeter')) {
        setInputData1(value * 25.4)
      } else if (select1.includes('feet')) {
        setInputData1(value * 0.08333333)
      } else if (select1.includes('Meter')) {
        setInputData1(value * 0.0254)
      }
    } else if (select2.includes('Meter')) {
      if (select1.includes('Meter')) {
        setInputData1(value)
      } else if (select1.includes('kilometers')) {
        setInputData1(value * 0.001)
      } else if (select1.includes('miles')) {
        setInputData1((value * 0.0006213712).toFixed(10))
      } else if (select1.includes('centimeter')) {
        setInputData1(value * 100)
      } else if (select1.includes('millimeter')) {
        setInputData1(value * 1000)
      } else if (select1.includes('feet')) {
        setInputData1(value * 3.28084)
      } else if (select1.includes('inch')) {
        setInputData1(value * 3.28084)
      }
    }
  }

  function selectHandler1(e) {
    setSelect1(e.target.value)
    inputHandler1(inputData1, e.target.value)
  }
  function selectHandler2(e) {
    setSelect2(e.target.value)
    inputHandler2(inputData2, e.target.value)
  }
  function reset() {
    setInputData1('')
    setInputData2('')
    setSelect1('kilometers')
    setSelect2('miles')
  }
  return (
    <div className={styles.length}>
      <div className={styles.content}>
        <Typography variant='h2'>Length converter</Typography>
        <section>
          <FormControl>
            <TextField
              variant='outlined'
              type='number'
              label={select1}
              value={inputData1}
              onChange={(e) => inputHandler1(e.target.value, select1)}
            />
            <Select
              variant='outlined'
              value={select1}
              onChange={selectHandler1}
            >
              {selectData.map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>

          {arrow ? (
            <ArrowForwardIosIcon fontSize='large' />
          ) : (
            <ArrowBackIosIcon fontSize='large' />
          )}

          <FormControl>
            <TextField
              variant='outlined'
              type='number'
              label={select2}
              value={inputData2}
              onChange={(e) => inputHandler2(e.target.value, select2)}
            />
            <Select
              variant='outlined'
              value={select2}
              onChange={selectHandler2}
            >
              {selectData.map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </section>
        <Button
          onClick={() => reset()}
          style={{ marginTop: '1em' }}
          fullWidth
          variant='outlined'
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Length
