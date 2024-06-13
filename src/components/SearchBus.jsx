import axios from 'axios'
import React, { useState } from 'react'

const SearchBus = () => {
    const [data,setdata] = useState(
        {
            "busno":" "
        }
    )

    const [result, setResult] = useState([])

    const deleteCourse = (id) => {
        let input={ "_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("SUCCESSFULLY DELETED")
                } else {
                    alert("ERROR IN DELETION")
                }
            }
        ).catch()
    }

    const inputHandler=(event)=>{
        setdata({ ...data,[event.target.name]: event.target.value})
      }
      const readValue=()=>{
          console.log(data)
          axios.post("http://localhost:8080/search", data).then(
            (response) => {
                console.log(response.data)
                setResult(response.data)
            }
        ).catch(
            (error) => {
                console.log("error")
            }
        ).finally()
      }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">BUS NO</label>
                            <input type="text" className="form-control" name='busno' value={data.busno} onChange={inputHandler}/>
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-info" onClick={readValue}>SEARCH</button>
                        </div>
                        </center>
                    </div>
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">BUS NAME</th>
                                            <th scope="col">ROUTE</th>
                                            <th scope="col">BUS NO</th>
                                            <th scope="col">DRIVER NAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.busname}</th>
                                                <td>{value.route}</td>
                                                <td>{value.busno}</td>
                                                <td>{value.dname}</td>
                                                <td>
                                                    <button class="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>DELETE</button>
                                                 </td>
                                            </tr>
                                            }
                                        )}

                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBus