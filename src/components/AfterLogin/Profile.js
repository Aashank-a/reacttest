import React, { useState,useContext, useEffect } from 'react'
import userContext from '../../context/user/usercontext'
import axios from 'axios';


function Profile() {
    const { auth, setauth } = useContext(userContext)
    const [data, setData] = useState('')

    const getdata =async () => {
        try {

            const config = {
                method: 'post',
                url: 'http://localhost:5000/auth/getuser',
                headers: {
                    'User-Agent': 'Axios - console app',
                    'Content-Type': ' application/json',
                    'auth-token': auth
                },

            }

            let res = await axios(config)

            console.log(res);
            // if ()
            if (res.status === 200) {
                setData(res.data)
             
            }


        } catch (error) {
            console.log(error,"catch");
            console.log(error.response.data)
            { alert(error.response.data.error) }

        }
    }
    useEffect(async()=>{
        await getdata()
    },[])
   
    return (
        <div >
            
            <h3>User Details</h3><br />
            <center>

                <table style={{ width: "50" }} border="1 | 1" >
                    <tr>
                        <th>User Name</th>
                        <td>
                                {data.name}
                        </td>
                    </tr>
                    <tr>
                        <th>Contact</th>
                        <td>
                        {data.mobile}
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                        {data.email}
                        </td>

                    </tr>
                    <tr>
                        <th>Date of Birth</th>
                        <td>
                        {data.DOB}
                        </td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>
                        {data.address}
                        </td>
                    </tr>


                </table><br /><br />


            </center>
        </div>
    )
}

export default Profile
