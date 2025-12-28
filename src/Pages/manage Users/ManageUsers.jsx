
import './ManageUsers.css';

import UsersForm from '../../Components/UsersForm/UsersForm';
import UsersList from '../../Components/UsersList/UsersList';

const ManageUsers = () => {

    return(
        <div className="users-container text-light">
            <div className="left-column">
                
                <UsersForm/>
            </div>

            <div className="right-column">
                <UsersList/>
            </div>
        </div>
    )
}

export default ManageUsers;