import { useEffect,useState ,axios} from "react"

function CakeDetails(props){
    var [cakedetails, setCakeDetails] = useState({})
    useEffect(()=>{
        let apiurl =  process.env.REACT_APP_BASE_API+"/cake/"+props.match.params.cakeid

        axios({
            method:'get',
            url:apiurl
        }).then((response)=>{
            console.log("response from cake details: ", response.data)
        },
        (error)=>{
            console.log("error from api",error)
        })
    },[])
   return (
       <div>
           <h1>
               Cake Details Page  for this cake {props.match.params.cakeid}
           </h1>
       </div>
   )
}

export default CakeDetails