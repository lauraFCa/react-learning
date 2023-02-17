import './Loading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
    return(
        <div id="loader">
            <FontAwesomeIcon icon={faSpinner}/>
        </div>
    )
}

export default Loading