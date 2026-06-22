import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js"
const PaypalButton = () => {
  return (
    <PayPalScriptProvider options={{"client-id":"Ac7Uo_BgM_L-3zawXtWsaiiBnBXJKpmeetOKg-h0dj9_kSt98XalRd_gYao2IOE5_ZwMXZFFwol8m-uP"}}>

    </PayPalScriptProvider>
  )
}

export default PaypalButton