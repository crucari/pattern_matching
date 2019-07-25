import * as React from 'react'
import styled from 'styled-components'

import { PayoutMethod, PaypalData, IBANData, match } from './methods'

const Method = styled.div`
  padding: 10px;
  margin: 10px;
  border: 2px solid #aaa;
  border-radius: 6px;
  width: 300px;
  text-align: left;
`

const StyledMethods = styled.div``

const Paypal: React.SFC<PaypalData> = ({ email }) => (
  <Method>
    <h3>Paypal</h3>
    <p>
      <b>Email</b>: {email}
    </p>
  </Method>
)

const Iban: React.SFC<IBANData> = ({ owner, iban }) => (
  <Method>
    <h3>IBAN</h3>
    <p>
      <b>Name</b>: {owner}
    </p>
    <p>
      <b>IBAN</b>: {iban}
    </p>
  </Method>
)

const renderMethod = match({
  paypal: ({ email }) => <Paypal email={email} />,
  iban: ({ owner, iban }) => <Iban owner={owner} iban={iban} />,
})

const Methods: React.SFC<{ methods: PayoutMethod[] }> = ({ methods }) => (
  <StyledMethods>{methods.map(renderMethod)}</StyledMethods>
)

export default Methods
