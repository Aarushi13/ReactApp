import {Component, PureComponent} from "react"
import Loader from "react-loader-spinner"
import axios from "axios"


class Signup extends PureComponent{
    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Ashu",
            loading:0
        }
    }
    componentDidMount(){
    }

    componentDidUpdate(){

    }
    user = {}



    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
       handleName = (event)=>{
        this.user.name= event.target.value
      }
    signup = (event)=>{
        let apiurl = process.env.REACT_APP_BASE_API+"/register"
       axios({
           method:"post",
           url:apiurl,
           data:this.user  // we requrie structure like {email,name,password}
       }).then((response)=>{
           console.log("response from signup api",response)
       },(error)=>{
        console.log("error from signup api",error)
       })
       event.preventDefault()
    }

    render(){
        // var loader
        // if(this.state.loading){
        //      loader =  <Loader
        //     type="ThreeDots"
        //     color="#00BFFF"
        //     height={100}
        //     width={100} //3 secs
        //   />
        // }
        // else{
        //     loader = null
        // }
       
        return (
            <div style={{width:"50%" , margin:"auto"}}>
                {this.state.loading}
               {this.state.loading &&  <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100} //3 secs
          />}
                <form>
                <h1>Signup Here</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onChange={this.handleName} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleEmail} type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
                </div>
                <div>
                <label className="errormessage">{this.state.errorMessage}</label>
                <button style={{float:"right"}} onClick={this.signup} type="submit" class="btn btn-primary">Signup</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Signup