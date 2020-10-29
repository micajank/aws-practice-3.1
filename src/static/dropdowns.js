//DROP DOWN OPTIONS

const classStatusDropDown = [
    "Current", 
    "Withdraw", 
    "Incomplete", 
    {"Grade": ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F", "I - Incomplete", "N - Audit", "NC - No Credit", "S - Satisfactory"]}
]

const financialAidStatusDropDown = [
    "🟢 Pell Awardee", 
    "🟡 Pending: Loans in Default", "🟡 Pending: Parent Information", "🟡 Pending: Selective Service", "🟡 Pending: Signature Needed", "🟡 Pending: Verification", "🟡 Pending: Other", 
    "🔴 Ineligible: Citizenship Issue", "🔴 Ineligible: Life Without Parole", "🔴 Ineligible: Loans In Default", "🔴 Ineligible: Parent Information", "🔴 Ineligible: SSN Discrepancy", "🔴 Ineligible: Unresolved Selective Service", "🔴 Ineligible: Other"
]

const quartersDropDown = ["Fall", "Winter", "Spring", "Summer"]

const studentStatusDropDown = ["Active", "Active: Incomplete", "Active: Applied for Grad", "Runway Student", "Hiatus", "Diploma Awarded"]


export {
    classStatusDropDown,
    financialAidStatusDropDown, 
    quartersDropDown,
    studentStatusDropDown, 
}