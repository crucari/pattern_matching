export interface PaypalData {
  readonly email: string
}
interface Paypal extends PaypalData {
  readonly method: 'paypal'
}

export interface IBANData {
  readonly iban: string
  readonly owner: string
}
interface IBAN extends IBANData {
  readonly method: 'iban'
}

export interface BankData {
  readonly account: string
}
interface Bank extends BankData {
  method: 'bank'
}

interface Matcher<R> {
  paypal: (d: PaypalData) => R
  iban: (d: IBANData) => R
  bank: (d: BankData) => R
}

export const paypal = (d: PaypalData): Paypal => ({ method: 'paypal', ...d })
export const iban = (d: IBANData): IBAN => ({ method: 'iban', ...d })

export type PayoutMethod = Paypal | IBAN | Bank

export const match = <R = void>(matcher: Matcher<R>) => (
  m: PayoutMethod,
): R => {
  if (m.method === 'paypal') {
    return matcher.paypal(m)
  }

  if (m.method === 'bank') {
    return matcher.bank(m)
  }

  return matcher.iban(m)
}
