import './app-filter.css'

const AppFilter = ({ filter, onFilterSelect }) => {

    const btnsData = [
        { name: 'all', label: 'All employees' },
        { name: 'salaryIncrease', label: 'For a promotion' },
        { name: 'moreThen1000', label: 'Salary above 1000$' }
    ]

    const renderBtns = btnsData.map(({ name, label }) => {
        const active = filter === name
        const btnClass = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button className={`btn ${btnClass}`}
                type='button'
                key={name}
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {renderBtns}
        </div>
    )
}

export default AppFilter