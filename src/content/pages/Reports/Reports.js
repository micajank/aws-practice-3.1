import React from 'react'

// components
import StudentFinancialReport from '../Reports/components/StudentFinancialReport'
import Funding from '../Reports/components/Funding'

const Reports = props => {

    // let cardFinancialStyles = { width: "32vw", height: "60vh", "border-radius": "0"}
    // let cardFundingStyles = { width: "40vw", height: "60vh", "border-radius": "0" }

    return (
        <div className="report">
            <div className="student-financial-report">
                <StudentFinancialReport />
            </div>
            <div className="funding-report">
                <Funding />
            </div>
        </div>
    )
}

export default Reports