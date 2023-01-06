import React, { useState } from "react";

const Attendence = () => {
    const [student, setStudent] = useState({
        name: "",
        roll: "",
        inTime: "00:00",
        outTime: "00:00"
    });

    return (
        <div>
            <div>Attendance: Class XIA</div>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={student.name}
                    onChange={(e) => setStudent(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Roll No."
                    required
                    value={student.roll}
                    onChange={(e) => setStudent(e.target.value)}
                />
                <input
                    type="time"
                    value={student.inTime}
                    onChange={(e) => setStudent(e.target.value)}
                />
                <input
                    type="time"
                    value={student.outTime}
                    onChange={(e) => setStudent(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Attendence;
