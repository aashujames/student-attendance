import React from "react";
import "../styles/StudentTable.css";

const StudentTable = ({ studentList }) => {
    return (
        <div className="main">
            <table>
                <tr className="container1">
                    <th className="name">Name</th>
                    <th className="roll">Roll No.</th>
                    <th className="in">CheckIn Time</th>
                    <th className="out">CheckOut Time</th>
                    <th>Status</th>
                </tr>
                {studentList.map((item) => {
                    return (
                        <tr className="container2">
                            <td className="name">{item.name}</td>
                            <td className="roll">{item.roll}</td>
                            <td className="in">{item.inTime}</td>
                            <td className="out">{item.outTime}</td>
                            <td>{item.status}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default StudentTable;
