import React from 'react'
// import './Testcard.css';

function Testcard(props) {
    if (props.no === props.lenofdata) {

    }
    return (
        <div class="courses-container" style={{'width': '100%'}}>
            <div class="course" style={{'background-color': '#fff', 'border-radius': '10px', 'box-shadow': '0 10px 10px rgba(0, 0, 0, 0.2)', 'display': 'flex', 'max-width': '100%', 'margin': '20px', 'overflow': 'hidden', 'width': '100', 'height': '230px'}}>
                <div class="course-preview">
                    <h6>Question {props.no + 1}</h6>
                    <h2>
                        {props.ques}
                    </h2>
                </div>
                <div class="course-info">
                    <h6>Options</h6>
                    <h5><input type="radio" name={`qval${props.no}`} value="0" />
                        <label for="html">
                            {props.o1}
                        </label>
                    </h5>
                    <h5><input type="radio" name={`qval${props.no}`} value="1" />
                        <label for="css">
                            {props.o2}
                        </label>
                    </h5>
                    <h5><input type="radio" name={`qval${props.no}`} value="2" />
                        <label for="javascript">
                            {props.o3}
                        </label>
                    </h5>
                    <h5><input type="radio" name={`qval${props.no}`} value="3" />
                        <label for="javascript">
                            {props.o4}
                        </label>
                    </h5>
                </div>

            </div>
        </div>

    )
}

export default Testcard
