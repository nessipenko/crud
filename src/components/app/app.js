import { useState } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import EmployeesList from '../employees-list/employees-list'
import SearchPanel from '../search-panel/search-panel'

import './app.css'


const App = () => {

    const initialData = [
        { id: 1, name: 'John Smith', salary: 1000, increase: false, salaryIncrease: true },
        { id: 2, name: 'Alex Jonson', salary: 1400, increase: true, salaryIncrease: false },
        { id: 3, name: 'Wilson Fox', salary: 1900, increase: false, salaryIncrease: false },
    ]
    const [data, setData] = useState(initialData)
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('')

    const [showWarning, setShowWarning] = useState(false)

    const updData = (newData) => {
        setData(newData)
        setShowWarning(false)
    }
    const addItem = (newEmployee) => {
        if (newEmployee.name.trim() === '' || newEmployee.salary.trim() === '') {
            setShowWarning(true)
        } else {
            const updEmployee = [...data, { ...newEmployee, increase: false, salaryIncrease: false }]

            updData(updEmployee)
        }
    }
    const deleteItem = (id) => {
        const delEmployee = data.filter(elem => elem.id !== id)
        updData(delEmployee)
    }

    const toggleProp = (id, prop) => {
        const newItem = data.map(item => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] }
            }
            return item
        })
        updData(newItem)
    }

    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        const lowerCaseTerm = term.toLowerCase()
        return items.filter(item => item.name.toLowerCase().includes(lowerCaseTerm)
        )

    }
    const onUpdSearch = (term) => {
        setTerm(term)
    }

    const filterPost = (items, promoFilter) => {
        switch (promoFilter) {
            case 'salaryIncrease':
                return items.filter(item => item.salaryIncrease)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }

    const employees = data.length
    const increased = data.filter(i => i.increase).length
    const visibleData = (filterPost(searchEmp(data, term), filter))
    return (
        <div className="app">
            <AppInfo employees={employees}
                increased={increased} />

            <div className="search-panel">
                <SearchPanel onUpdSearch={onUpdSearch} />
                <AppFilter onFilterSelect={onFilterSelect}
                    filter={filter} />
            </div>
            <EmployeesList
                data={visibleData}
                onDelete={deleteItem}
                addNewEmployee={addItem}
                onToggleIncrease={toggleProp}

            />
            <EmployeesAddForm
                data={data}
                addNewEmployee={addItem}
                showWarning={showWarning} />

        </div>
    )
}

export default App