import React from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import './Header.css'

function Header() {
    return (
        <div className='app__header'>
            <h1 className='app__header__title'>Covid 19 Tracker</h1>
            
            <FormControl className='app__header__dropdown'>
                <Select variant='outlined' value='abc'>
                    <MenuItem value='worldwide'>a</MenuItem>
                    <MenuItem value='worldwide'>b</MenuItem>
                    <MenuItem value='worldwide'>c</MenuItem>
                    <MenuItem value='worldwide'>d</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Header
