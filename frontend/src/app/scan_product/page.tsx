import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div>
<div className='flex flex-row'>
<div className='flex flex-col space-y-5'>
    <p className='text-2xl font-semibold'>Verify Product</p>
    <p className='text-l'>
        Scan a product to verify its authenticity and track its journey through the supply chain
    </p>
    <div>
        <div>
            <Button>Manual</Button>
            <Button>Barcode QR Scanner</Button>
        </div>
        <div className='flex flex-col'>
            <p>Product ID</p>
            <input />
            <Button>Track Product</Button>
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default page