// Create overlay container
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
overlay.style.zIndex = '9999';
overlay.style.display = 'flex';
overlay.style.flexDirection = 'column';
overlay.style.alignItems = 'center';
overlay.style.justifyContent = 'center';
overlay.style.color = '#fff';
overlay.style.fontFamily = 'sans-serif';

// Input field
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Why are you here?';
input.style.padding = '12px';
input.style.fontSize = '20px';
input.style.width = '800px';
input.style.height = '200px';
input.style.marginBottom = '30px';
input.style.borderRadius = '6px';
input.style.border = 'none';
input.style.backgroundColor = 'white';
input.style.color = 'black';

// Submit button
const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.style.padding = '10px 20px';
submitBtn.style.fontSize = '16px';
submitBtn.style.marginBottom = '12px';
submitBtn.style.borderRadius = '6px';
submitBtn.style.border = 'none';
submitBtn.style.cursor = 'pointer';
submitBtn.style.backgroundColor = 'grey';

// Export button
const exportBtn = document.createElement('button');
exportBtn.textContent = 'Export Logs';
exportBtn.style.padding = '10px 20px';
exportBtn.style.fontSize = '16px';
exportBtn.style.borderRadius = '6px';
exportBtn.style.border = 'none';
exportBtn.style.cursor = 'pointer';
exportBtn.style.backgroundColor = 'grey';

// Timer element
const timer = document.createElement('div');
timer.style.position = 'fixed';
timer.style.top = '10px';
timer.style.right = '10px';
timer.style.padding = '10px 20px';
timer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
timer.style.color = 'white';
timer.style.fontSize = '20px';
timer.style.borderRadius = '8px';
timer.style.zIndex = '10000';
timer.style.display = 'none'; // hidden initially

// Track time
let startTime = null;
let intervalId = null;

function startTimer() {
  startTime = Date.now();
  timer.style.display = 'block';
  document.body.appendChild(timer);

  intervalId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    timer.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function stopTimerAndLogTime(value) {
  if (!startTime) return;
  clearInterval(intervalId);
  const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const timeSpent = `${minutes}:${seconds}`;
  logInput(value, timeSpent);
}

// Save log
function logInput(value, timeSpent = "00:00") {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const logs = JSON.parse(localStorage.getItem('input_logs') || '[]');
  logs.push({ date, time, value, timeSpent });
  localStorage.setItem('input_logs', JSON.stringify(logs));
}

// Export CSV
function exportCSV() {
  const logs = JSON.parse(localStorage.getItem('input_logs') || '[]');
  const csv = "date,time,value,time_spent\n" + logs.map(row =>
    `${row.date},${row.time},"${row.value}",${row.timeSpent || '00:00'}`
  ).join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "input_logs.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// Handlers
submitBtn.onclick = () => {
  if (input.value.trim() !== "") {
    startTimer();
    document.body.removeChild(overlay);
    window.addEventListener('beforeunload', () => {
      stopTimerAndLogTime(input.value);
    });
  }
};

exportBtn.onclick = exportCSV;

// Add everything to the overlay
overlay.appendChild(input);
overlay.appendChild(submitBtn);
overlay.appendChild(exportBtn);

// Add overlay to page
document.body.appendChild(overlay);
