import React, { useState } from 'react'
import payImage from "./../assets/cmda_payment.jpeg"
import PaySuccess from './paySuccess'
import { Link } from 'react-router-dom'

const PaymentPage = () => {
    const [showModal, setShowModal]=useState(false)
  return (
    <div className="flex flex-col w-full md:max-w-[800px] mx-auto py-4 px-4 ">
    <div className="flex min-h-full flex-1 flex-col justify-center  py-4 sm:px-6 lg:px-8">
      <div className="sm:bg-white sm:px-6 sm:py-6 sm:shadow sm:rounded-lg  w-full ">

        <img src={payImage} className='w-full h-full'/>
        </div>
        </div>
        <div className="flex gap-4 self-center mt-8">
                <button
                onClick={()=>setShowModal(true)} className="bg-[#0066FF] flex justify-center w-[150px] text-white font-medium shadow-sm py-1.5 px-4 rounded">     
                  Pay
                </button>
                <Link
                to={"/payment"}
                  type="submit"
                  className="bg-white border shadow-sm border-gray-300 flex justify-center text-gray-900 w-[150px] hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
                
                  Cancel
                </Link>
              </div>


              <PaySuccess open={showModal} setOpen={setShowModal} />
        </div>
  )
}

export default PaymentPage