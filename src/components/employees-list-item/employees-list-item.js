import './employees-list-item.css'

const EmployeesListItem = ({ name, salary, onDelete, onToggleIncrease, increase, salaryIncrease }) => {


    let classNames = 'list-group-item d-flex justify-content-between'

    if (increase) {
        classNames += ' increase'
    }

    if (salaryIncrease) {
        classNames += ' like'
    }


    return (
        <li className={classNames}>
            <span onClick={onToggleIncrease}
                data-toggle='salaryIncrease'
                className="list-group-item-label"
                title='Press to Increase'>{name}
            </span>
            <div className="salary-container">
                <input title='Press to edit salary'
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + '$'} />
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleIncrease}
                    data-toggle='increase'
                    type="button"
                    title='Give a Bonus'
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete}
                    type="button"
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem