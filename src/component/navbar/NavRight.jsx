import React from 'react'
import Icon from '../../assets/icon/Icon'


const NavRight = () => {
    return (
        <>

            <p className='px-3 py-2 border'>+8801386756656</p>

            <div className='flex gap-x-4 items-center *:cursor-pointer'>
                <Icon icon="fab fa-facebook" className="text-blue-600" />
                <Icon icon="fab fa-twitter" className="text-blue-600" />
                <Icon icon="fab fa-instagram" className="text-red-600" />
            </div>
        </>
    )
}

export default NavRight
