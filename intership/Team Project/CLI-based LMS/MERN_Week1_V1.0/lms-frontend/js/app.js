// ─── DATA ───
const COURSES = [
  { id: 1, title: "MERN Stack",  instructor: "Rakesh",   category: "Programming",     level: "Beginner",     status: true,  lessons: ["React.js", "Express.js", "Node.js"] },
  { id: 2, title: "Node.js",     instructor: "Raju",     category: "Backend",         level: "Intermediate", status: false, lessons: ["Modules", "Buffer", "Events", "File System"] },
  { id: 3, title: "HTML & CSS",  instructor: "Supreetha",category: "Web Development", level: "Beginner",     status: true,  lessons: ["HTML Tags", "CSS Basics", "Grid", "Flexbox"] },
  { id: 4, title: "Python",      instructor: "Sanju",    category: "Programming",     level: "Beginner",     status: false, lessons: ["Syntax", "Loops", "Functions"] }
];

const state = {
  user: { name: "", enrolledCourses: [] }
};

// ─── WELCOME ───
document.getElementById('name-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') startApp();
});

function startApp() {
  const name = document.getElementById('name-input').value.trim();
  if (!name) { toast('Please enter your name', 'error'); return; }
  state.user.name = name;
  document.getElementById('username-display').textContent = name;
  document.getElementById('avatar').textContent = name[0].toUpperCase();
  document.getElementById('welcome-screen').classList.add('hidden');
  const app = document.getElementById('app');
  app.style.display = 'flex';
  app.style.flexDirection = 'column';
  renderCourses();
  toast(`Welcome, ${name}! 👋`, 'success');
}

// ─── TABS ───
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('panel-' + tab.dataset.panel);
    panel.classList.add('active');
    if (tab.dataset.panel === 'enrolled') renderEnrolled();
    if (tab.dataset.panel === 'progress') renderProgress();
  });
});

// ─── RENDER COURSES ───
function renderCourses() {
  const grid = document.getElementById('course-grid');
  grid.innerHTML = COURSES.map(c => `
    <div class="course-card ${!c.status ? 'unavailable' : ''}" onclick="${c.status ? `openModal(${c.id})` : ''}">
      <div class="card-id">Course #${c.id}</div>
      <div class="card-title">${c.title}</div>
      <div class="card-instructor">by ${c.instructor}</div>
      <span class="badge badge-purple">${c.category}</span>
      <span class="badge badge-orange">${c.level}</span>
      ${!c.status ? '<span class="badge badge-red">Unavailable</span>' : '<span class="badge badge-green">Available</span>'}
      <div style="color:var(--muted);font-size:11px;margin-top:14px;">${c.lessons.length} lessons</div>
      ${c.status ? `<div class="card-actions">
        <button class="btn-sm" onclick="event.stopPropagation();enrollCourse(${c.id})">Enroll</button>
        <button class="btn-sm" onclick="event.stopPropagation();openModal(${c.id})">Details</button>
      </div>` : ''}
    </div>
  `).join('');
}

// ─── MODAL ───
let currentCourseId = null;

function openModal(id) {
  const c = COURSES.find(x => x.id === id);
  currentCourseId = id;
  document.getElementById('modal-title').textContent = c.title;
  document.getElementById('modal-instructor').textContent = c.instructor;
  document.getElementById('modal-meta').innerHTML = `
    <span class="badge badge-purple">${c.category}</span>
    <span class="badge badge-orange">${c.level}</span>
    <span class="badge ${c.status ? 'badge-green' : 'badge-red'}">${c.status ? 'Available' : 'Unavailable'}</span>
  `;

  const enrolled = state.user.enrolledCourses.find(e => e.id === id);
  document.getElementById('modal-lessons').innerHTML = c.lessons.map((l, i) => {
    const done = enrolled && enrolled.completedLessons.includes(i);
    return `
      <div class="lesson-item ${done ? 'completed' : ''}" onclick="${enrolled ? `completeLesson(${id}, ${i})` : ''}">
        <div class="check">${done ? '✓' : ''}</div>
        <span>${l}</span>
      </div>
    `;
  }).join('');

  const actions = document.getElementById('modal-actions');
  if (enrolled) {
    actions.innerHTML = `<button class="btn-sm danger" onclick="withdrawCourse(${id});closeModal()">Withdraw</button>`;
  } else {
    actions.innerHTML = `<button class="btn-sm" onclick="enrollCourse(${id});closeModal()">Enroll in Course →</button>`;
  }

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});

// ─── ENROLL ───
function enrollCourse(id) {
  const course = COURSES.find(c => c.id === id);
  if (!course) { toast('Invalid course', 'error'); return; }
  if (!course.status) { toast('This course is not available', 'error'); return; }
  if (state.user.enrolledCourses.find(c => c.id === id)) {
    toast('Already enrolled in this course', 'error'); return;
  }
  state.user.enrolledCourses.push({ ...course, completedLessons: [] });
  toast(`Enrolled in ${course.title} ✓`, 'success');
  renderCourses();
}

// ─── WITHDRAW ───
function withdrawCourse(id) {
  const idx = state.user.enrolledCourses.findIndex(c => c.id === id);
  if (idx === -1) { toast('Not enrolled in this course', 'error'); return; }
  const name = state.user.enrolledCourses[idx].title;
  state.user.enrolledCourses.splice(idx, 1);
  toast(`Withdrawn from ${name}`, 'info');
  renderCourses();
  renderEnrolled();
  renderProgress();
}

// ─── COMPLETE LESSON ───
function completeLesson(courseId, lessonIndex) {
  const course = state.user.enrolledCourses.find(c => c.id === courseId);
  if (!course) { toast('Not enrolled', 'error'); return; }
  if (course.completedLessons.includes(lessonIndex)) {
    toast('Lesson already completed', 'info'); return;
  }
  course.completedLessons.push(lessonIndex);
  toast('Lesson completed ✓', 'success');
  openModal(courseId); // refresh modal
  if (document.getElementById('panel-progress').classList.contains('active')) renderProgress();
}

// ─── ENROLLED PANEL ───
function renderEnrolled() {
  const grid = document.getElementById('enrolled-grid');
  if (state.user.enrolledCourses.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        <div class="empty-icon">📚</div>
        <div class="empty-title">No courses yet</div>
        <div class="empty-desc">Enroll in a course from the Browse tab</div>
      </div>`;
    return;
  }
  grid.innerHTML = state.user.enrolledCourses.map(c => {
    const pct = c.lessons.length ? ((c.completedLessons.length / c.lessons.length) * 100).toFixed(0) : 0;
    return `
      <div class="course-card" onclick="openModal(${c.id})">
        <div class="card-id">Course #${c.id}</div>
        <div class="card-title">${c.title}</div>
        <div class="card-instructor">by ${c.instructor}</div>
        <div style="margin:12px 0 4px;">
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:6px;">
            <span>Progress</span><span>${pct}%</span>
          </div>
          <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        </div>
        <div style="font-size:11px;color:var(--muted);">${c.completedLessons.length}/${c.lessons.length} lessons done</div>
        <div class="card-actions">
          <button class="btn-sm" onclick="event.stopPropagation();openModal(${c.id})">Lessons</button>
          <button class="btn-sm danger" onclick="event.stopPropagation();withdrawCourse(${c.id})">Withdraw</button>
        </div>
      </div>`;
  }).join('');
}

// ─── PROGRESS PANEL ───
function renderProgress() {
  const list = document.getElementById('progress-list');
  if (state.user.enrolledCourses.length === 0) {
    list.innerHTML = `
      <div class="empty">
        <div class="empty-icon">📈</div>
        <div class="empty-title">Nothing to track yet</div>
        <div class="empty-desc">Enroll in courses to see your progress here</div>
      </div>`;
    return;
  }
  list.innerHTML = state.user.enrolledCourses.map(c => {
    const total = c.lessons.length;
    const done  = c.completedLessons.length;
    const pct   = total ? ((done / total) * 100).toFixed(1) : 0;
    return `
      <div class="progress-card">
        <div class="progress-header">
          <div>
            <div class="progress-title">${c.title}</div>
            <div style="font-size:12px;color:var(--muted);margin-top:4px;">by ${c.instructor} · ${c.category}</div>
          </div>
          <div class="progress-pct">${pct}%</div>
        </div>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <div class="progress-meta">${done} of ${total} lessons completed</div>
      </div>`;
  }).join('');
}

// ─── TOAST ───
function toast(msg, type = 'info') {
  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${msg}</span>`;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), 3500);
}
