import { useState } from 'react'
import './search-panel.css'

const SearchPanel = ({ onUpdSearch }) => {

    const [term, setTerm] = useState('')

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value
        setTerm(searchTerm)
        onUpdSearch(searchTerm)
    }

    return (
        <input className='form-control search-input'
            type="text"
            placeholder='Find an employee'
            value={term}
            onChange={handleSearchChange} />
    )
}

export default SearchPanel