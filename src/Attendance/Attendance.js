import React, { useState } from "react";
import StudentTable from "../StudentTable/StudentTable";
import "../styles/Attendance.css";

const Attendance = () => {
    const [student, setStudent] = useState({
        name: "",
        roll: "",
        inTime: "00:00",
        outTime: "00:00",
        status: ""
    });
    const [studentList, setStudentList] = useState([]);
    const [sameRoll, setSameRoll] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let sameRoll = studentList.some((item) => item.roll === student.roll);
        setSameRoll(sameRoll);
        if (!sameRoll) {
            const newStudent = {
                ...student,
                id: new Date().getTime().toString()
            };
            setStudentList([...studentList, newStudent]);
            setStudent({
                name: "",
                roll: "",
                inTime: "00:00",
                outTime: "00:00"
            });
        }
    };

    const handleCancel = () => {
        setStudent({ name: "", roll: "", inTime: "00:00", outTime: "00:00" });
        setSameRoll(false);
    };

    return (
        <>
            <div className="top-heading">Attendance: Class XIA</div>
            {/* display below message if same roll no. exist */}
            {sameRoll && <div>Same Roll No. already exist</div>}
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input1">
                        <input
                            className="name-input"
                            type="text"
                            placeholder="Name"
                            required
                            value={student.name}
                            onChange={(e) =>
                                setStudent({ ...student, name: e.target.value })
                            }
                        />
                        <input
                            className="roll-input"
                            type="number"
                            placeholder="Roll No."
                            required
                            value={student.roll}
                            onChange={(e) =>
                                setStudent({ ...student, roll: e.target.value })
                            }
                        />
                        <div className="check-main">
                            <div>Checkin Time</div>
                            <input
                                className="check-input"
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
                        <div className="check-main">
                            <div>Checkout Time</div>
                            <input
                                className="check-input"
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
                    </div>
                    <div className="input2">
                        <div>
                            <input
                                className="input-radio"
                                type="radio"
                                id="P"
                                value="P"
                                onChange={(e) =>
                                    setStudent({
                                        ...student,
                                        status: e.target.value
                                    })
                                }
                                checked={student.status === "P"}
                            />
                            <label className="P" htmlFor="P">
                                P
                            </label>
                        </div>
                        <div>
                            <input
                                className="input-radio"
                                type="radio"
                                id="A"
                                value="A"
                                onChange={(e) =>
                                    setStudent({
                                        ...student,
                                        status: e.target.value
                                    })
                                }
                                checked={student.status === "A"}
                            />
                            <label className="A" htmlFor="A">
                                A
                            </label>
                        </div>
                        <button className="btn-confirm" type="submit">
                            Take Attendance
                        </button>
                        <button
                            className="btn-reset"
                            type="reset"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            <StudentTable
                studentList={studentList}
                setStudentList={setStudentList}
            />
        </>
    );
};

export default Attendance;
