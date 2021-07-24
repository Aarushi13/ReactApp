import axios from "axios"
import { useEffect, useState } from "react"
import Cake from "./Cake"

let cake = {
    cakeid:12345,
    name:"Chocolate Truffle",
    price:500,
    image:"truffle.jpeg"
  }
  
  let cake2 = {
    cakeid:56789,
    name:"Fruit Cake",
    price:800,
    image:"fruit.webp"
  }
function Cakelist(props){
  var [cakes,setCakes] = useState([])
  useEffect(()=>{
    let apiurl = process.env.REACT_APP_BASE_API + "/allcakes"
    axios({
      method:'get',
      url:apiurl
    }).then((response)=>{
      console.log("responose from all cakes api", response)
      setCakes(response.data.data)
    },
    (error)=>{console.log("error from all cakes api", error)})
  })
    return (
        <div>
            <div className="row">
            {/* <Cake history={props.history} data={cake} />
            <Cake history={props.history} data={cake2} /> */}
            {cakes.map((each,index)=>{
              console.log("cake:",index,each)
              return <Cake data={each}/>
            })}
            </div>
        </div>
    )
}

export default Cakelist