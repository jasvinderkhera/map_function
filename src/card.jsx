import { Button } from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function Card({data, setData, resource}){
    const deletefun = (data) => {
        let id = data.id;
        let filteredData = resource.filter( function(item) {
            return item.id != data.id
        })
        setData(filteredData)
    }
    return(
        <div className="card w-25">
            <div className="card">
                <h1>ID: {data.id}</h1>
                <p>{data.title}</p>
                <p>{data.body}</p>
                <a href="#" className="btn btn-danger" onClick={() => deletefun(data)}>{data.button}</a>
            </div>
        </div>
    )
}
export default Card