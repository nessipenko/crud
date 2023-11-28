import './app-info.css'

const AppInfo = ({ increased, employees }) => {
    return (
        <div className="app-info">
            <h1>Employee Accounting in the Company</h1>
            <h2>The total number of employees: {employees}</h2>
            <h2>Employees eligible for a bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo