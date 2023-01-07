import React, { useState } from "react";
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
        <div>
            <div className="top-heading">Attendance: Class XIA</div>
            {sameRoll && <div>Same Roll No. already exist</div>}
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
                    <input
                        type="radio"
                        id="P"
                        value="P"
                        onChange={(e) =>
                            setStudent({ ...student, status: e.target.value })
                        }
                        checked={student.status === "P"}
                    />
                    <label htmlFor="P">P</label>
                    <input
                        type="radio"
                        id="A"
                        value="A"
                        onChange={(e) =>
                            setStudent({ ...student, status: e.target.value })
                        }
                        checked={student.status === "A"}
                    />
                    <label htmlFor="A">A</label>
                    <button type="submit">Take Attendance</button>
                    <button type="reset" onClick={handleCancel}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Attendance;
