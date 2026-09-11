const content = document.getElementById("content");

const navItems = document.querySelectorAll(".nav-item");

const toast = document.getElementById("toast");


/* ATTENDANCE DATA */

const attendance = [

  ["DBMS", 36, 40],

  ["Java", 34, 40],

  ["Artificial Intelligence", 30, 40],

  ["Computer Networks", 37, 40]

];


/* PERCENTAGE */

function pct(present, total) {

  return ((present / total) * 100).toFixed(1);

}


/* TOAST */

function showToast(message) {

  toast.textContent = message;

  toast.classList.remove("hidden");

  setTimeout(() => {

    toast.classList.add("hidden");

  }, 2500);

}


/* PAGE NAVIGATION */

function showPage(page) {

  navItems.forEach(item => {

    item.classList.toggle(
      "active",
      item.dataset.page === page
    );

  });


  document
    .getElementById("sidebar")
    .classList.remove("open");


  const pages = {

    dashboard: dashboard,

    timetable: timetable,

    attendance: attendancePage,

    assignments: assignments,

    materials: materials,

    exams: exams,

    results: results,

    fees: fees,

    notices: notices,

    faculty: faculty,

    helpdesk: helpdesk,

    resume: resume,

    placements: placements,

    settings: settings

  };


  content.innerHTML =
    (pages[page] || dashboard)();


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}


/* SIDEBAR EVENTS */

navItems.forEach(item => {

  item.addEventListener("click", () => {

    showPage(item.dataset.page);

  });

});


/* DASHBOARD */

function dashboard() {

  return `

  <div class="welcome">

    <div>

      <h1>
        Good Morning, Anurag 👋
      </h1>

      <div class="muted">
        B.Tech CSE • Semester 7
      </div>

    </div>


    <button
      class="btn secondary"
      onclick="showPage('resume')">

      💼 Open Resume

    </button>

  </div>


  <div class="cards">

    <div class="stat-card">

      <div class="stat-icon">
        📊
      </div>

      <div>

        <div class="stat-value">
          82.5%
        </div>

        <div class="stat-label">
          Attendance
        </div>

      </div>

    </div>


    <div class="stat-card">

      <div class="stat-icon">
        📝
      </div>

      <div>

        <div class="stat-value">
          7
        </div>

        <div class="stat-label">
          Assignments
        </div>

      </div>

    </div>


    <div class="stat-card">

      <div class="stat-icon">
        💰
      </div>

      <div>

        <div class="stat-value">
          ₹5,000
        </div>

        <div class="stat-label">
          Fees Due
        </div>

      </div>

    </div>

  </div>


  <div class="grid-2">


    <div class="panel">

      <h2>
        📅 Today's Classes
      </h2>


      ${

        [

          ["10:00", "DBMS", "Room 204"],

          ["12:00", "Java", "Lab 2"],

          ["02:00", "AI", "Room 301"]

        ]

        .map(c => `

          <div class="class-row">

            <div class="time">
              ${c[0]}
            </div>

            <div class="class-info">

              <strong>
                ${c[1]}
              </strong>

              <span class="muted">
                ${c[2]}
              </span>

            </div>

            <span class="tag">
              Scheduled
            </span>

          </div>

        `)

        .join("")

      }

    </div>


    <div class="panel">

      <h2>
        📢 Recent Notices
      </h2>


      ${

        [

          ["🔴", "Examination form submission", "Last date: 12 September"],

          ["🟢", "Placement Drive – TCS", "Date: 20 September"],

          ["🔵", "Internal Assessment", "Starts from 25 September"]

        ]

        .map(n => `

          <div class="notice">

            <b>
              ${n[0]} ${n[1]}
            </b>

            <small>
              ${n[2]}
            </small>

          </div>

        `)

        .join("")

      }

    </div>


  </div>

  `;

}


/* ATTENDANCE */

function attendancePage() {

  return `

  <div class="page-title">

    <h1>
      📊 Attendance
    </h1>

    <div class="muted">
      Track your subject-wise attendance.
    </div>

  </div>


  <div class="page-card">

    <h2>
      Overall Attendance — 82.5%
    </h2>


    ${

      attendance.map(r => `

        <div style="margin:18px 0">

          <div class="progress-line">

            <strong style="width:190px">
              ${r[0]}
            </strong>

            <div class="progress">

              <span
                style="width:${pct(r[1], r[2])}%">
              </span>

            </div>

            <b>
              ${pct(r[1], r[2])}%
            </b>

          </div>

        </div>

      `)

      .join("")

    }

  </div>


  <br>


  <div class="page-card table-wrap">

    <table class="data-table">

      <thead>

        <tr>

          <th>
            Subject
          </th>

          <th>
            Present
          </th>

          <th>
            Total
          </th>

          <th>
            Attendance
          </th>

        </tr>

      </thead>


      <tbody>

        ${

          attendance.map(r => `

            <tr>

              <td>
                ${r[0]}
              </td>

              <td>
                ${r[1]}
              </td>

              <td>
                ${r[2]}
              </td>

              <td
                class="${
                  Number(pct(r[1], r[2])) < 75
                  ? "danger"
                  : "success"
                }">

                ${pct(r[1], r[2])}%

              </td>

            </tr>

          `)

          .join("")

        }

      </tbody>

    </table>

  </div>

  `;

}


/* TIMETABLE */

function timetable() {

  return `

  <div class="page-title">

    <h1>
      📅 Timetable
    </h1>

    <div class="muted">
      Semester 7 — Weekly Schedule
    </div>

  </div>


  <div class="page-card table-wrap">

    <table class="data-table">

      <thead>

        <tr>

          <th>Time</th>

          <th>Monday</th>

          <th>Tuesday</th>

          <th>Wednesday</th>

          <th>Thursday</th>

          <th>Friday</th>

        </tr>

      </thead>


      <tbody>

        ${

          [

            ["10:00–11:00","DBMS","Java","AI","Networks","DBMS"],

            ["11:00–12:00","Java","AI","Networks","DBMS","AI"],

            ["12:00–01:00","Lab","Lab","Break","Lab","Project"],

            ["02:00–03:00","AI","Networks","DBMS","Java","Seminar"]

          ]

          .map(row => `

            <tr>

              ${row.map(cell => `

                <td>
                  ${cell}
                </td>

              `).join("")}

            </tr>

          `)

          .join("")

        }

      </tbody>

    </table>

  </div>

  `;

}


/* ASSIGNMENTS */

function assignments() {

  const data = [

    ["DBMS – Normalization", "10 September 2026", "Pending"],

    ["Java – OOP Concepts", "12 September 2026", "Submitted"],

    ["AI – Search Algorithms", "18 September 2026", "Pending"]

  ];


  return `

  <div class="page-title">

    <h1>
      📝 Assignments
    </h1>

    <div class="muted">
      View deadlines and submit your work.
    </div>

  </div>


  ${

    data.map((a, i) => `

      <div
        class="page-card"
        style="margin-bottom:14px">

        <div class="job-head">

          <div>

            <h2>
              ${a[0]}
            </h2>

            <div class="muted">
              Due: ${a[1]}
            </div>

          </div>


          <span class="tag">
            ${a[2]}
          </span>

        </div>


        <br>


        <button

          class="btn ${
            i === 1
            ? "green"
            : "secondary"
          }"

          onclick="showToast('${
            i === 1
            ? "Already submitted"
            : "Assignment submission opened"
          }')">

          ${
            i === 1
            ? "View Submission"
            : "Submit Assignment"
          }

        </button>

      </div>

    `)

    .join("")

  }

  `;

}


/* MATERIALS */

function materials() {

  const subjects = [

    "Data Mining",

    "Artificial Intelligence",

    "Web Technology",

    "Computer Networks"

  ];


  return `

  <div class="page-title">

    <h1>
      📚 Study Materials
    </h1>

    <div class="muted">
      Semester 7 learning resources.
    </div>

  </div>


  <div class="resume-grid">

    ${

      subjects.map(subject => `

        <div class="page-card">

          <h2>
            📁 ${subject}
          </h2>


          <div class="notice">
            📄 Unit 1 Notes
          </div>

          <div class="notice">
            📄 Unit 2 Notes
          </div>

          <div class="notice">
            📄 Question Bank
          </div>


          <button

            class="btn secondary"

            style="margin-top:12px"

            onclick="showToast('Demo: material opened')">

            Open Materials

          </button>

        </div>

      `)

      .join("")

    }

  </div>

  `;

}


/* EXAMS */

function exams() {

  const exams = [

    ["DBMS", "15 Sep 2026", "10:00 AM"],

    ["AI", "18 Sep 2026", "10:00 AM"],

    ["Java", "21 Sep 2026", "10:00 AM"]

  ];


  return `

  <div class="page-title">

    <h1>
      📝 Examinations
    </h1>

    <div class="muted">
      Upcoming exams and hall ticket.
    </div>

  </div>


  <div class="page-card table-wrap">

    <table class="data-table">

      <thead>

        <tr>

          <th>
            Subject
          </th>

          <th>
            Date
          </th>

          <th>
            Time
          </th>

          <th>
            Status
          </th>

        </tr>

      </thead>


      <tbody>

        ${

          exams.map(r => `

            <tr>

              <td>
                ${r[0]}
              </td>

              <td>
                ${r[1]}
              </td>

              <td>
                ${r[2]}
              </td>

              <td>

                <span class="tag">
                  Scheduled
                </span>

              </td>

            </tr>

          `)

          .join("")

        }

      </tbody>

    </table>


    <br>


    <button

      class="btn"

      onclick="showToast('Hall ticket download demo')">

      Download Hall Ticket

    </button>

  </div>

  `;

}


/* RESULTS */

function results() {

  return `

  <div class="page-title">

    <h1>
      📈 Results
    </h1>

    <div class="muted">
      Academic performance history.
    </div>

  </div>


  <div class="cards">

    <div class="stat-card">

      <div class="stat-icon">
        🏆
      </div>

      <div>

        <div class="stat-value">
          8.2
        </div>

        <div class="stat-label">
          Semester 6 SGPA
        </div>

      </div>

    </div>


    <div class="stat-card">

      <div class="stat-icon">
        📚
      </div>

      <div>

        <div class="stat-value">
          7.9
        </div>

        <div class="stat-label">
          CGPA
        </div>

      </div>

    </div>


    <div class="stat-card">

      <div class="stat-icon">
        ✅
      </div>

      <div>

        <div class="stat-value">
          Pass
        </div>

        <div class="stat-label">
          Result Status
        </div>

      </div>

    </div>

  </div>


  <div class="page-card">

    <h2>
      Semester 6 Result
    </h2>


    <table class="data-table">

      <thead>

        <tr>

          <th>
            Subject
          </th>

          <th>
            Grade
          </th>

          <th>
            Grade Point
          </th>

        </tr>

      </thead>


      <tbody>

        <tr>
          <td>DBMS</td>
          <td>A+</td>
          <td>9</td>
        </tr>

        <tr>
          <td>Java</td>
          <td>A</td>
          <td>8</td>
        </tr>

        <tr>
          <td>AI</td>
          <td>A</td>
          <td>8</td>
        </tr>

        <tr>
          <td>Networks</td>
          <td>A+</td>
          <td>9</td>
        </tr>

      </tbody>

    </table>

  </div>

  `;

}


/* FEES */

function fees() {

  return `

  <div class="page-title">

    <h1>
      💰 Fees
    </h1>

    <div class="muted">
      Fee status and payment history.
    </div>

  </div>


  <div class="cards">

    <div class="stat-card">

      <div>

        <div class="stat-value">
          ₹80,000
        </div>

        <div class="stat-label">
          Total Fees
        </div>

      </div>

    </div>


    <div class="stat-card">

      <div>

        <div class="stat-value">
          ₹75,000
        </div>

        <div class="stat-label">
          Paid
        </div>

      </div>

    </div>


    <div class="stat-card">

      <div>

        <div class="stat-value danger">
          ₹5,000
        </div>

        <div class="stat-label">
          Outstanding
        </div>

      </div>

    </div>

  </div>


  <div class="page-card">

    <h2>
      Payment History
    </h2>


    <div class="notice">
      05 Aug 2026 — ₹25,000
      <span class="success">
        ✅ Paid
      </span>
    </div>


    <div class="notice">
      05 May 2026 — ₹25,000
      <span class="success">
        ✅ Paid
      </span>
    </div>


    <div class="notice">
      05 Feb 2026 — ₹25,000
      <span class="success">
        ✅ Paid
      </span>
    </div>


    <br>


    <button

      class="btn"

      onclick="showToast('Payment gateway demo opened')">

      Pay ₹5,000

    </button>

  </div>

  `;

}


/* NOTICES */

function notices() {

  return `

  <div class="page-title">

    <h1>
      📢 Notices
    </h1>

    <div class="muted">
      College announcements and circulars.
    </div>

  </div>


  <div class="page-card">


    <div class="notice">

      <b>
        🔴 Examination form submission
      </b>

      <small>
        Last date: 12 September
      </small>

    </div>


    <div class="notice">

      <b>
        🟢 Placement Drive – TCS
      </b>

      <small>
        20 September
      </small>

    </div>


    <div class="notice">

      <b>
        🔵 College Holiday
      </b>

      <small>
        17 September
      </small>

    </div>


    <div class="notice">

      <b>
        🟡 Internal Assessment
      </b>

      <small>
        Starts from 25 September
      </small>

    </div>


  </div>

  `;

}


/* FACULTY */

function faculty() {

  const facultyData = [

    ["Dr. Rahul Sharma", "DBMS", "rahul@smartcampus.edu"],

    ["Prof. Priya Mehta", "Java", "priya@smartcampus.edu"],

    ["Dr. Amit Verma", "Artificial Intelligence", "amit@smartcampus.edu"],

    ["Prof. Neha Shah", "Networks", "neha@smartcampus.edu"]

  ];


  return `

  <div class="page-title">

    <h1>
      👨‍🏫 Faculty
    </h1>

    <div class="muted">
      Your semester faculty directory.
    </div>

  </div>


  <div class="resume-grid">

    ${

      facultyData.map(f => `

        <div class="page-card">

          <h2>
            👨‍🏫 ${f[0]}
          </h2>

          <p>
            <b>Subject:</b> ${f[1]}
          </p>

          <p class="muted">
            ${f[2]}
          </p>


          <button

            class="btn secondary"

            onclick="showToast('Message composer opened')">

            Contact Faculty

          </button>

        </div>

      `)

      .join("")

    }

  </div>

  `;

}


/* HELPDESK */

function helpdesk() {

  return `

  <div class="page-title">

    <h1>
      🎫 Helpdesk
    </h1>

    <div class="muted">
      Raise and track student requests.
    </div>

  </div>


  <div class="page-card">

    <div class="form-grid">


      <div class="field">

        <label>
          Issue Type
        </label>

        <select>

          <option>
            Attendance
          </option>

          <option>
            Fees
          </option>

          <option>
            Examination
          </option>

          <option>
            Technical
          </option>

        </select>

      </div>


      <div class="field">

        <label>
          Subject
        </label>

        <input
          placeholder="Enter subject">

      </div>


    </div>


    <div
      class="field"
      style="margin-top:15px">

      <label>
        Description
      </label>

      <textarea
        placeholder="Describe your issue...">
      </textarea>

    </div>


    <br>


    <button

      class="btn"

      onclick="showToast('Ticket created successfully')">

      Create Ticket

    </button>

  </div>

  `;

}


/* RESUME */

function resume() {

  return `

  <div class="page-title">

    <h1>
      💼 Resume & Career
    </h1>

    <div class="muted">
      Build and manage your professional profile.
    </div>

  </div>


  <div class="resume-grid">


    <div class="page-card resume-score">

      <div class="muted">
        Resume Completion
      </div>


      <div class="score">
        82%
      </div>


      <div class="progress">

        <span style="width:82%">
        </span>

      </div>


      <p>
        Good progress — add experience
        and certifications.
      </p>


      <div
        class="btn-row"
        style="justify-content:center">


        <button

          class="btn"

          onclick="showToast('Resume preview opened')">

          📄 View Resume

        </button>


        <button

          class="btn secondary"

          onclick="showToast('PDF generation demo')">

          Download PDF

        </button>


      </div>

    </div>


    <div class="page-card">

      <h2>
        Resume Checklist
      </h2>


      <div class="notice">
        ✅ Personal Details
      </div>

      <div class="notice">
        ✅ Education
      </div>

      <div class="notice">
        ✅ Skills
      </div>

      <div class="notice">
        ✅ Projects
      </div>

      <div class="notice">
        ⚠️ Experience
      </div>

      <div class="notice">
        ⚠️ Certifications
      </div>

    </div>

  </div>


  <br>


  <div class="page-card">

    <h2>
      Student Profile
    </h2>


    <div class="form-grid">


      <div class="field">

        <label>
          Full Name
        </label>

        <input value="Anurag Mishra">

      </div>


      <div class="field">

        <label>
          Degree
        </label>

        <input value="B.Tech CSE">

      </div>


      <div class="field">

        <label>
          CGPA
        </label>

        <input value="7.9">

      </div>


      <div class="field">

        <label>
          LinkedIn
        </label>

        <input
          placeholder="LinkedIn profile URL">

      </div>


    </div>


    <br>


    <div class="field">

      <label>
        Skills
      </label>


      <div
        class="skill-list"
        style="margin-top:8px">


        <span class="skill">
          JavaScript
        </span>

        <span class="skill">
          React
        </span>

        <span class="skill">
          SQL
        </span>

        <span class="skill">
          Python
        </span>

        <span class="skill">
          SAP
        </span>

        <span class="skill">
          MS Excel
        </span>


      </div>

    </div>


    <br>


    <button

      class="btn"

      onclick="showToast('Resume profile saved')">

      Save Profile

    </button>

  </div>

  `;

}


/* PLACEMENTS */

function placements() {

  const jobs = [

    [
      "Software Developer",
      "ABC Technologies",
      "₹6 LPA",
      "B.Tech CSE"
    ],

    [
      "Graduate Engineer Trainee",
      "XYZ Industries",
      "₹4.5 LPA",
      "B.Tech CSE / IT"
    ],

    [
      "Web Developer",
      "Digital Labs",
      "₹5 LPA",
      "CSE / IT"
    ]

  ];


  return `

  <div class="page-title">

    <h1>
      🎯 Placements
    </h1>

    <div class="muted">
      Opportunities matched to your student profile.
    </div>

  </div>


  ${

    jobs.map(j => `

      <div class="job-card">


        <div class="job-head">


          <div>

            <h2>
              ${j[0]}
            </h2>

            <div class="muted">

              ${j[1]}
              •
              ${j[3]}

            </div>

          </div>


          <div class="salary">

            ${j[2]}

          </div>


        </div>


        <br>


        <button

          class="btn secondary"

          onclick="showToast('Application submitted — demo')">

          Apply Now

        </button>


      </div>

    `)

    .join("")

  }

  `;

}


/* SETTINGS */

function settings() {

  return `

  <div class="page-title">

    <h1>
      ⚙️ Settings
    </h1>

    <div class="muted">
      Manage your SmartCampus preferences.
    </div>

  </div>


  <div class="page-card">


    <div class="field">

      <label>
        Full Name
      </label>

      <input value="Anurag">

    </div>


    <br>


    <div class="field">

      <label>
        Email
      </label>

      <input value="student@smartcampus.edu">

    </div>


    <br>


    <button

      class="btn"

      onclick="showToast('Settings saved')">

      Save Changes

    </button>


  </div>

  `;

}


/* MOBILE SIDEBAR */

document
  .getElementById("menuBtn")
  .onclick = () => {

    document
      .getElementById("sidebar")
      .classList.toggle("open");

  };


/* PROFILE MENU */

document
  .getElementById("profileBtn")
  .onclick = () => {

    document
      .getElementById("profileMenu")
      .classList.toggle("hidden");

  };


/* NOTIFICATIONS */

document
  .getElementById("notificationBtn")
  .onclick = () => {

    showToast(
      "You have 3 new notifications"
    );

  };


/* CLOSE PROFILE MENU */

document.addEventListener("click", event => {

  if (
    !event.target.closest(".top-actions")
  ) {

    document
      .getElementById("profileMenu")
      .classList.add("hidden");

  }

});


/* LOAD DASHBOARD */

showPage("dashboard");
