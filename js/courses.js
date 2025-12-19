document.addEventListener("DOMContentLoaded", loadCourses);

async function loadCourses() {
  try {
    const res = await fetch(`${API_BASE}/courses`);
    if (!res.ok) throw new Error("Failed");

    const courses = await res.json();
    const div = document.getElementById("courses");
    div.innerHTML = "";

    courses.forEach(c => {
      const p = document.createElement("p");
      p.textContent = `${c.courseCode} - ${c.courseName}`;
      div.appendChild(p);
    });
  } catch (err) {
    document.getElementById("courses").innerHTML =
      "<p>Courses unavailable.</p>";
    console.error(err);
  }
}
