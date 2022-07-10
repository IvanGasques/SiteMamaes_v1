
import{Link} from 'react-router-dom'
import './LinkBtn.css'

function LinkBtn({to,text}){
return (<div>
<Link className="btn" to={to}>{text}</Link>
</div>)
}

export default LinkBtn