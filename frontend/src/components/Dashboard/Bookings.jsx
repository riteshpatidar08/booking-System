import React from 'react'
import DataTable from './DataTable'

function Bookings() {
  return (
   <div>
      <div className="m-8">
        <div className="flex justify-between mb-4">
          <div>
            <h2>Bookings</h2>
            <p>
              Total Active Bookings
            </p>
          </div>
        </div>
        {/* <DataTable /> */}
      </div>
    </div>
  )
}

export default Bookings
