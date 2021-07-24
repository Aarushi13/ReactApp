import queryString from "query-string"
import { useEffect, useState } from "react"

function Search(props){
  console.log(">>>>>>>>>>>>>>>>>props" , props)
  var [cakeresults,setCakeresults]=useState([])
  var query = queryString.parse(props.location.search).q


  useEffect(()=>{
    let apiurl =process.env.REACT_APP_BASE_API+"/searchcakes?q=" + query
  },[query])
  console.log("query object" , query)
    return (
        <div>
<h1>Search Cakes for  {query} </h1>
        </div>
    )
}

export default Search