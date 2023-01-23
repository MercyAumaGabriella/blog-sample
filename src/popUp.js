import useState from "react";
import { useParams , useHistory} from "react-router-dom";
import useFetch from "./usefetch";

const [Popp, showPopp] = useState(false);

const showPoppUp = () => {
    showPopp(true);
}

const {id} = useParams();

const {data:blog} = useFetch('http://localhost:8000/blogs/' + id);

const history = useHistory();

const goingToDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    }). then(() => {
        history.push('/');
    })

}

const PopUpDelete = () => {
    return ( 
        <div className="popUpDeleteContainer">
            <div className="popUpDelete">
                <h2>WARNING</h2>
                <p>Are you sure you would like to delete this blog?</p>
                <button onClick={goingToDelete}>Yes</button>
                <button onClick={showPoppUp}>No</button>
            </div>
        </div>
    );
}
 
export default PopUpDelete;