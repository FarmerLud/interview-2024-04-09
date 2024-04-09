import defaultUser from '../../assets/defaultUser.jpg'
import { IUser } from '../services/getUsers'

interface Props {
    user: IUser
    onClick?: () => void
    isSelected?: boolean
}

export const UserCard = ({ user,onClick,isSelected }:Props) => {
    const { name, image, role, email } = user
    const boxShadow = isSelected 
        ? '0 0 5px 0 rgba(0,0,0,0.5)' 
        : '0 0 5px 0 rgba(0,0,0,0.2)'

    return (
        <div 
            className="dpF w18em h5em fsh0 g1em pd0_5em br1em"
            style={{boxShadow}}
            onClick={onClick}
        >
            <div className="h4em w4em br50pc ovfH fsh0">
                <img 
                    className="w100pc h100pc objfC" 
                    src={`images/${image}`} 
                    onError={(e) => {
                        e.currentTarget.src = defaultUser
                        e.currentTarget.onerror = null
                    }}
                    alt={name} 
                />
            </div>
            <div className="dpF fdC w100pc">
                <strong>{name}</strong>
                <p>{role}</p>
                <p className='mgTa'>{email}</p>
            </div>
        </div>
    )
}