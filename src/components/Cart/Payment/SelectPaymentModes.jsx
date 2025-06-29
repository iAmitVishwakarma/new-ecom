import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const SelectPaymentModes = ({handlePaymentModeChange ,selectedPaymentMode}) => {
  return (
      <ul className='w-full'>
        <li className={ selectedPaymentMode ? selectedPaymentMode === 'Recommended' ? 'text-pink-500 font-semibold flex items-center  bg-white   py-3 px-2': '  py-3 px-2'  :'text-pink-500 font-semibold flex items-center    bg-white   py-3 px-2 ' } onClick={() => handlePaymentModeChange('Recommended', event )} >
          <span >
          <FontAwesomeIcon icon="star"   className={selectedPaymentMode === 'Recommended' && 'text-pink-500 mr-2' } />  Recommended
          </span>
        </li>
      
        <li  className={selectedPaymentMode === 'CashOnDelivery' && 'text-pink-500 font-semibold  bg-white   py-3 px-2 ' || '  py-3 px-2 ' }    onClick={() => handlePaymentModeChange('CashOnDelivery' , event )}   >
          <span >
          <FontAwesomeIcon icon="money-bill-wave"   className={selectedPaymentMode === 'CashOnDelivery' ? 'text-pink-500 mr-2' : 'text-gray-700 mr-2 ' } />
            Cash On Delivery
          </span>
        </li>
       
        <li   className={selectedPaymentMode === 'UPI' && 'text-pink-500 font-semibold flex  bg-white   py-3 px-2 ' || '  py-3 px-2 flex'} onClick={() => handlePaymentModeChange('UPI', event )} >
          
          <span   >
          <FontAwesomeIcon icon="mobile-alt"  className={selectedPaymentMode === 'UPI' ? 'text-pink-500 mr-2' : 'text-gray-700 mr-2 ' } />
            UPI (Pay via any App)
          </span>
          <span className="ml-auto text-green-500">
            1 Offer
          </span>
        </li>
      
        <li className={selectedPaymentMode === 'creditDebitCard' && 'text-pink-500 font-semibold flex  bg-white   py-3 px-2  ' || '  py-3 px-2 flex' }  onClick={() => handlePaymentModeChange('creditDebitCard', event )}   >
          
          <span    >
            <FontAwesomeIcon icon="credit-card"  className={selectedPaymentMode === 'creditDebitCard' ? 'text-pink-500 mr-2' : 'text-gray-700 mr-2 ' } />
            Credit/Debit Card
          </span>
          <span className="ml-auto text-green-500">
            6 Offers
          </span>
        </li>
      
        <li   className={selectedPaymentMode === 'PayLater' && 'text-pink-500 font-semibold  flex  bg-white   py-3 px-2  ' || '  py-3 px-2 '}    onClick={() => handlePaymentModeChange('PayLater', event )}    >
        
          <span >
          <FontAwesomeIcon icon="clock"  className={selectedPaymentMode === 'PayLater' ? 'text-pink-500 mr-2' : 'text-gray-700 mr-2 ' } />
            Pay Later
          </span>
        </li>
      
        <li className={selectedPaymentMode === 'Wallets' && 'text-pink-500 font-semibold  flex  bg-white   py-3 px-2  ' || '  py-3 px-2  flex'}   onClick={() => handlePaymentModeChange('Wallets', event )} >
         
          <span >
          <FontAwesomeIcon icon="wallet"  className={selectedPaymentMode === 'Wallets' ? 'text-pink-500 mr-2' : 'text-gray-700 mr-2 ' } />
            Wallets
          </span>
          <span className="ml-auto text-green-500">
            4 Offers
          </span>
        </li>
      
        <li  className={selectedPaymentMode === 'EMI' && 'text-pink-500 font-semibold  flex  bg-white   py-3 px-2  ' || '  py-3 px-2 '}  onClick={() => handlePaymentModeChange('EMI', event )}    >
         
          <span  >
          <FontAwesomeIcon icon="calendar-alt"  className={selectedPaymentMode === 'EMI' ? 'text-pink-500 mr-2' : 'text-gray-700 mr-2 ' } />
            EMI
          </span>
        </li>
      
        <li className={selectedPaymentMode === 'NetBanking' && 'text-pink-500 font-semibold  flex  bg-white   py-3 px-2  ' || '  py-3 px-2 ' }  onClick={() => handlePaymentModeChange('NetBanking', event )}  >
          
          <span   >
          <FontAwesomeIcon icon="university"  className={selectedPaymentMode === 'NetBanking' ? 'text-pink-500 mr-2' : 'text-gray-700 mr-2 ' } />
            Net Banking
          </span>
        </li>
      </ul>
  )
}

export default SelectPaymentModes
