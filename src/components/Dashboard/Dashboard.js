import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getEmployees } from '../../actions/employeeActions'
var Dashboard = React.memo((props) => {

    useEffect(() => {

        props.getEmployees();

    }, [])

    const { employee } = props;

    return (
        <div className="container">
            <div><h1>Employee Details</h1></div>
            <div className="row">

                <div className="col-12 d-flex justify-content-center">
                    <ul>
                        {employee.user.map(employee => (

                            <li value={employee.id} key={employee.id}>
                                <div className="card cardstyle" >
                                    <div className="card-body">

                                        <div className="list"><span className="span"><b>EmployeeID: </b></span><b>{employee.id}</b> </div>
                                        <div className="list"><span className="span"><b>EmployeeName: </b></span><b className="upper">{employee.name}</b> </div>
                                        <div className="list"><span className="span"><b>EmployeeAge: </b></span><b>{employee.age}</b> </div>
                                        <div className="list"><span className="span"><b>EmployeeMail: </b></span><b>{employee.email}</b> </div>
                                        <div className="list"><span className="span"><b>EmployeePhone: </b></span><b>{employee.phoneNo}</b> </div>
                                    </div>
                                </div>
                            </li>
                        ))}


                    </ul>
                </div>
            </div>
        </div>
    )
})


const mapStateToProps = (state) => ({
    employee: state.employee.employees

})

export default connect(mapStateToProps, { getEmployees })(Dashboard);