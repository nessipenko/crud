import { useState } from 'react'
import './employees-add-form.css'

const EmployeesAddForm = ({ data, addNewEmployee, showWarning }) => {
    const [formData, setFormData] = useState({
        name: '',
        salary: ''
    })


    const onValueChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
    const handleAddEmployee = (e) => {
        e.preventDefault()


        const newEmployee = { id: data.length + 1, name: formData.name, salary: formData.salary }

        addNewEmployee(newEmployee)
        setFormData({
            name: '',
            salary: ''
        })
    }

    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            {showWarning && <p style={{ color: 'red', marginLeft: '15px' }}>INVALID INPUT</p>}

            <form onSubmit={handleAddEmployee}
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What is his name?"
                    onChange={onValueChange}
                    name='name'
                    value={formData.name} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary in $?"
                    onChange={onValueChange}
                    name='salary'
                    value={formData.salary}
                />

                <button
                    type="submit"
                    className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm