export interface PaypalData {
  readonly email: string
}
export interface IBANData {
  readonly iban: string
  readonly owner: string
}

interface IBAN extends IBANData {
  tag: 'iban'
}

interface Paypal extends PaypalData {
  tag: 'paypal'
}

type PaymentMehtod = Paypal | IBAN

type Matcher<R> = {
  paypal: (data: PaypalData) => R
  iban: (data: IBANData) => R
}

const match = <R>(m: Matcher<R>) => (method: PaymentMehtod) => (v: R) => {
  if (method.tag === 'iban') {
    return m.iban(method)
  }

  m.paypal(method)
}
