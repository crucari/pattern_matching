import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import './styles.css'

import Methods from './Methods'

import { PayoutMethod, paypal, iban } from './methods'

const methods: PayoutMethod[] = [
  paypal({ email: 'john.doe@gmail.com' }),
  iban({ owner: 'John Doe', iban: 'NL84ABNA9538003810' }),
  paypal({ email: 'maksim_the_boss_123@mail.ru' }),
]

function App() {
  return (
    <div className="App">
      <h1>Housing Anywhere</h1>
      <h2>Payout Methods</h2>
      <Methods methods={methods} />
    </div>
  )
}

render(<App />, document.getElementById('root'))
