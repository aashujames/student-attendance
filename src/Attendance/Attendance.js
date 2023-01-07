import React, { useState } from "react";
import "../styles/Attendance.css";

const Attendance = () => {
    const [student, setStudent] = useState({
        name: "",
        roll: "",
        inTime: "00:00",
        outTime: "00:00"
    });
    const [studentList, setStudentList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { ...student, id: new Date().getTime().toString() };
        setStudentList([...studentList, newStudent]);
        console.log(newStudent);
        setStudent({ name: "", roll: "", inTime: "00:00", outTime: "00:00" });
    };

    return (
        <div>
            <div className="top-heading">Attendance: Class XIA</div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        value={student.name}
                        onChange={(e) =>
                            setStudent({ ...student, name: e.target.value })
                        }
                    />
                    <input
                        type="number"
                        placeholder="Roll No."
                        required
                        value={student.roll}
                        onChange={(e) =>
                            setStudent({ ...student, roll: e.target.value })
                        }
                    />
                    <div>
                        <div>Checkin Time</div>
                        <input
                            type="time"
                            value={student.inTime}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    inTime: e.target.value
                                })
                            }
                        />
                    </div>
                    <div>
                        <div>Checkout Time</div>
                        <input
                            type="time"
                            value={student.outTime}
                            onChange={(e) =>
                                setStudent({
                                    ...student,
                                    outTime: e.target.value
                                })
                            }
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Attendance;
