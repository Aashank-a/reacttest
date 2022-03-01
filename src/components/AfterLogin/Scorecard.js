import React, { useContext, useEffect, useState } from 'react'
import Cong from '../../image/congratulations.png';
import userContext from '../../context/user/usercontext'
import axios from 'axios';




function Progress(props) {
  const [sty,setSty]=useState({width: `${props.per}%`, backgroundColor: "#ac0dfd" })
 
  return (
    <tr>
      <td>{props.name}</td>
      <td >
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={sty} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">{props.per}</div>
        </div>
      </td>
      <td></td>
      <td>{props.per}</td>
    </tr>
  )
}


function Scorecard() {
  const { auth } = useContext(userContext)
  const [data, setData] = useState('')

  const getscore = async () => {
  
   

    let headersList = {
      "Accept": "*/*",
      'Content-Type': 'application/json',
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "auth-token": auth 
    }

    let reqOptions = {
      url: "http://localhost:5000/user/getscore",
      method: "get",
      headers: headersList,
    }

    axios.request(reqOptions).then(function (response) {
      setData(response.data)

      console.log(response.data);
    })
  }
  useEffect(async()=>{
    
      await getscore()
    
  },[])
  return (
    <div>
      <>
        {/* <button className='btn' onClick={getscore}>Click To View</button> */}
        <section id="sec" style={{ 'background': '#1eda5c', 'width': '68%', 'float': 'right', 'height': '600px', 'color': 'black', 'borderRadius': '20px' }}>
          <br />
          <center>
            <h1>Score card</h1>
            <br />
            <table style={{ "width": "800px" }} cellpadding='8px'>
              <tr>
                <th style={{ "width": "200px" }}>Quizes</th>
                <th style={{ "width": "350px" }}>Progress</th>
                <th style={{ "width": "100px" }}></th>
                <th>Score</th>
              </tr>
              {([...data].map((data, index) => {
                return (<Progress name={data.quiz} key={index} per={(data.score/data.total)*100}/>)
              }))}
              {/* <!-- <tr>
                    <td></td>
                    <td>Average</td>
                    <td>80%</td>
                </tr> --> */}
            </table>
            <div>
              <img src={Cong} alt="" style={{ "height": "300px", "width": "400px" }} />
            </div>
          </center>
        </section>
      </>
    </div>
  )
}

export default Scorecard
