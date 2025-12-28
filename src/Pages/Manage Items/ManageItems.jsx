
import './ManageItems.css';

import ItemsForm from '../../Components/ItemsForm/ItemsForm';
import ItemsList from '../../Components/ItemsList/ItemsList';

const ManageItems = () => {


    return(
        <div className="items-container text-light">
            <div className="left-column">
                <ItemsForm/>
            </div>

            <div className="right-column">
                <ItemsList/>
            
            </div>
        </div>
    )
}

export default ManageItems;