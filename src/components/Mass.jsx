import React, { useState } from 'react'
import styles from '../styles/Mass.module.css'
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

const Mass = () => {
  const selectData = [
    'kilogram',
    'Gram',
    'miligram',
    'grain',
    'ounce',
    'pound',
    'ton',
  ]
  const [select1, setSelect1] = useState('kilogram')
  const [select2, setSelect2] = useState('Gram')
  const [inputData1, setInputData1] = useState('')
  const [inputData2, setInputData2] = useState('')
  const [arrow, setArrow] = useState(true)

  function inputHandler1(value, select1) {
    setInputData1(value)
    setArrow(true)
    if (select1.includes('kilogram')) {
      if (select2.includes('kilogram')) {
        setInputData2(value)
      } else if (select2.includes('Gram')) {
        setInputData2(value / 1000)
      } else if (select2.includes('miligram')) {
        setInputData2(value * 1000000)
      } else if (select2.includes('grain')) {
        setInputData2(value * 15432.36)
      } else if (select2.includes('ounce')) {
        setInputData2(value * 35.27396)
      } else if (select2.includes('pound')) {
        setInputData2(value * 2.204623)
      } else if (select2.includes('ton')) {
        setInputData2(value * 0.001102311)
      }
    } else if (select1.includes('Gram')) {
      if (select2.includes('Gram')) {
        setInputData2(value)
      } else if (select2.includes('kilogram')) {
        setInputData2(value * 0.001)
      } else if (select2.includes('miligram')) {
        setInputData2(value * 1000)
      } else if (select2.includes('grain')) {
        setInputData2(value * 15.43236)
      } else if (select2.includes('ounce')) {
        setInputData2(value * 0.0352739655)
      } else if (select2.includes('pound')) {
        setInputData2(value * 0.002204623)
      } else if (select2.includes('ton')) {
        setInputData2(value * 0.000001102311)
      }
    } else if (select1.includes('miligram')) {
      if (select2.includes('miligram')) {
        setInputData2(value)
      } else if (select2.includes('kilogram')) {
        setInputData2(value * 0.000001)
      } else if (select2.includes('Gram')) {
        setInputData2(value * 0.001)
      } else if (select2.includes('grain')) {
        setInputData2(value * 0.01543236)
      } else if (select2.includes('ounce')) {
        setInputData2(value * 0.00003527396)
      } else if (select2.includes('pound')) {
        setInputData2(value * 0.000002204623)
      } else if (select2.includes('ton')) {
        setInputData2(value * 0.000000001102311)
      }
    } else if (select1.includes('grain')) {
      if (select2.includes('grain')) {
        setInputData2(value)
      } else if (select2.includes('kilogram')) {
        setInputData2(value * 0.00006479891)
      } else if (select2.includes('Gram')) {
        setInputData2((value * 0.06479891).toFixed(10))
      } else if (select2.includes('miligram')) {
        setInputData2(value * 64.79891)
      } else if (select2.includes('ounce')) {
        setInputData2(value * 0.002285714)
      } else if (select2.includes('pound')) {
        setInputData2(value * 0.0001428571)
      } else if (select2.includes('ton')) {
        setInputData2(value * 0.00000007142857)
      }
    } else if (select1.includes('ounce')) {
      if (select2.includes('ounce')) {
        setInputData2(value)
      } else if (select2.includes('kilogram')) {
        setInputData2(value * 0.02834952)
      } else if (select2.includes('Gram')) {
        setInputData2((value * 28.34952).toFixed(10))
      } else if (select2.includes('grain')) {
        setInputData2(value * 437.5)
      } else if (select2.includes('miligram')) {
        setInputData2(value * 28349.52)
      } else if (select2.includes('pound')) {
        setInputData2(value * 0.0625)
      } else if (select2.includes('ton')) {
        setInputData2(value * 0.00003125)
      }
    } else if (select1.includes('pound')) {
      if (select2.includes('pound')) {
        setInputData2(value)
      } else if (select2.includes('kilogram')) {
        setInputData2(value * 0.4535924)
      } else if (select2.includes('Gram')) {
        setInputData2((value * 453.5924).toFixed(10))
      } else if (select2.includes('miligram')) {
        setInputData2(value * 453592.4)
      } else if (select2.includes('grain')) {
        setInputData2(value * 7000)
      } else if (select2.includes('ounce')) {
        setInputData2(value * 16)
      } else if (select2.includes('ton')) {
        setInputData2(value * 0.0005)
      }
    } else if (select1.includes('ton')) {
      if (select2.includes('ton')) {
        setInputData2(value)
      } else if (select2.includes('kilogram')) {
        setInputData2(value * 907.1847)
      } else if (select2.includes('Gram')) {
        setInputData2((value * 907184.7).toFixed(10))
      } else if (select2.includes('miligram')) {
        setInputData2(value * 907184700)
      } else if (select2.includes('grain')) {
        setInputData2(value * 14000000)
      } else if (select2.includes('ounce')) {
        setInputData2(value * 32000)
      } else if (select2.includes('pound')) {
        setInputData2(value * 2000)
      }
    }
  }

  function inputHandler2(value, select2) {
    setInputData2(value)
    setArrow(false)
    if (select2.includes('kilogram')) {
      if (select1.includes('kilogram')) {
        setInputData1(value)
      } else if (select1.includes('Gram')) {
        setInputData1(value / 1000)
      } else if (select1.includes('miligram')) {
        setInputData1(value * 1000000)
      } else if (select1.includes('grain')) {
        setInputData1(value * 15432.36)
      } else if (select1.includes('ounce')) {
        setInputData1(value * 35.27396)
      } else if (select1.includes('pound')) {
        setInputData1(value * 2.204623)
      } else if (select1.includes('ton')) {
        setInputData1(value * 0.001102311)
      }
    } else if (select2.includes('Gram')) {
      if (select1.includes('Gram')) {
        setInputData1(value)
      } else if (select1.includes('kilogram')) {
        setInputData1(value * 0.001)
      } else if (select1.includes('miligram')) {
        setInputData1(value * 1000)
      } else if (select1.includes('grain')) {
        setInputData1(value * 15.43236)
      } else if (select1.includes('ounce')) {
        setInputData1(value * 0.0352739655)
      } else if (select1.includes('pound')) {
        setInputData1(value * 0.002204623)
      } else if (select1.includes('ton')) {
        setInputData1(value * 0.000001102311)
      }
    } else if (select2.includes('miligram')) {
      if (select1.includes('miligram')) {
        setInputData1(value)
      } else if (select1.includes('kilogram')) {
        setInputData1(value * 0.000001)
      } else if (select1.includes('Gram')) {
        setInputData1(value * 0.001)
      } else if (select1.includes('grain')) {
        setInputData1(value * 0.01543236)
      } else if (select1.includes('ounce')) {
        setInputData1(value * 0.00003527396)
      } else if (select1.includes('pound')) {
        setInputData1(value * 0.000002204623)
      } else if (select1.includes('ton')) {
        setInputData1(value * 0.000000001102311)
      }
    } else if (select2.includes('grain')) {
      if (select1.includes('grain')) {
        setInputData1(value)
      } else if (select1.includes('kilogram')) {
        setInputData1(value * 0.00006479891)
      } else if (select1.includes('Gram')) {
        setInputData1((value * 0.06479891).toFixed(10))
      } else if (select1.includes('miligram')) {
        setInputData1(value * 64.79891)
      } else if (select1.includes('ounce')) {
        setInputData1(value * 0.002285714)
      } else if (select1.includes('pound')) {
        setInputData1(value * 0.0001428571)
      } else if (select1.includes('ton')) {
        setInputData1(value * 0.00000007142857)
      }
    } else if (select2.includes('ounce')) {
      if (select1.includes('ounce')) {
        setInputData1(value)
      } else if (select1.includes('kilogram')) {
        setInputData1(value * 0.02834952)
      } else if (select1.includes('Gram')) {
        setInputData1((value * 28.34952).toFixed(10))
      } else if (select1.includes('grain')) {
        setInputData1(value * 437.5)
      } else if (select1.includes('miligram')) {
        setInputData1(value * 28349.52)
      } else if (select1.includes('pound')) {
        setInputData1(value * 0.0625)
      } else if (select1.includes('ton')) {
        setInputData1(value * 0.00003125)
      }
    } else if (select2.includes('pound')) {
      if (select1.includes('pound')) {
        setInputData1(value)
      } else if (select1.includes('kilogram')) {
        setInputData1(value * 0.4535924)
      } else if (select1.includes('Gram')) {
        setInputData1((value * 453.5924).toFixed(10))
      } else if (select1.includes('miligram')) {
        setInputData1(value * 453592.4)
      } else if (select1.includes('grain')) {
        setInputData1(value * 7000)
      } else if (select1.includes('ounce')) {
        setInputData1(value * 16)
      } else if (select1.includes('ton')) {
        setInputData1(value * 0.0005)
      }
    } else if (select2.includes('ton')) {
      if (select1.includes('ton')) {
        setInputData1(value)
      } else if (select1.includes('kilogram')) {
        setInputData1(value * 907.1847)
      } else if (select1.includes('Gram')) {
        setInputData1((value * 907184.7).toFixed(10))
      } else if (select1.includes('miligram')) {
        setInputData1(value * 907184700)
      } else if (select1.includes('grain')) {
        setInputData1(value * 14000000)
      } else if (select1.includes('ounce')) {
        setInputData1(value * 32000)
      } else if (select1.includes('pound')) {
        setInputData1(value * 2000)
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
    setSelect1('kilogram')
    setSelect2('Gram')
  }
  return (
    <div className={styles.mass}>
      <div className={styles.content}>
        <Typography variant='h2'>Mass converter</Typography>
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

export default Mass
