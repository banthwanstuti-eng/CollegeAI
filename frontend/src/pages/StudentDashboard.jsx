function StudentDashboard() {
  // Dummy data for now — will be replaced with real API calls from Member 2 later
  const studentData = {
    attendance: "82%",
    fees: "₹15,000 Due on 5th Sept",
    exams: "Mid-Sem starts 10th Sept",
    timetable: "Next class: DBMS at 11:00 AM",
    placement: "3 companies visiting this month",
    complaints: "1 open complaint",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "220px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    padding: "20px",
  };

  return (
    <div>
      <h2 style={{ padding: "20px 20px 0" }}>Student Dashboard</h2>
      <div style={gridStyle}>
        <div style={cardStyle}>
          <h3>Attendance</h3>
          <p>{studentData.attendance}</p>
        </div>
        <div style={cardStyle}>
          <h3>Fees</h3>
          <p>{studentData.fees}</p>
        </div>
        <div style={cardStyle}>
          <h3>Exams</h3>
          <p>{studentData.exams}</p>
        </div>
        <div style={cardStyle}>
          <h3>Timetable</h3>
          <p>{studentData.timetable}</p>
        </div>
        <div style={cardStyle}>
          <h3>Placement</h3>
          <p>{studentData.placement}</p>
        </div>
        <div style={cardStyle}>
          <h3>Complaints</h3>
          <p>{studentData.complaints}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;