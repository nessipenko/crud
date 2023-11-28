import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({ data, onDelete, addNewEmployee, onToggleIncrease }) => {

    const employees = data.map((item) => {
        const { id, ...itemProps } = item
        return (
            <EmployeesListItem key={id} {...itemProps}
                onDelete={() => onDelete(id)}
                addNewEmployee={() => addNewEmployee(id)}
                onToggleIncrease={(e) => onToggleIncrease(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })


    return (
        <ul className="app-list list-group">
            {employees}

        </ul>
    )
}

export default EmployeesList