import React from 'react'
import { Link } from 'react-router-dom'

function Quiz(props) {
  return (
    <div>
       <div className="card mb-3 my-3" style={{"max-width": "862px", "border-radius": "20px", 'background-color': '#212529'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://leverageedu.com/blog/hi/wp-content/uploads/sites/2/2020/04/Science-Quiz.png"
                            className="img-fluid " alt="..." style={{borderRadius: '20px', }}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <center>
                            <h5 className="card-title my-3" style={{color:'white'}}>{props.test}</h5>
                            <p className="card-text"></p>
                            <Link to={`/test${props.test}`}>
                                <button type="button" className="btn btn-primary">Attempt</button>
                            </Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Quiz
