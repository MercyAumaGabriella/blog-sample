import useState from "react";

const [Popp, showPopp] = useState(false);

const showPoppUp = () => {
    showPopp(true);
}

const PopUpDelete = () => {
    return ( 
        <div className="popUpDeleteContainer">
            <div className="popUpDelete">
                <h2>WARNING</h2>
                <p>Are you sure you would like to delete this blog?</p>
                <button>Yes</button>
                <button onClick={showPoppUp}>No</button>
            </div>
        </div>
    );
}
 
export default PopUpDelete;