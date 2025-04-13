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

// Submit button
const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.style.padding = '10px 20px';
submitBtn.style.fontSize = '16px';
submitBtn.style.marginBottom = '12px';
submitBtn.style.borderRadius = '6px';
submitBtn.style.border = 'none';
submitBtn.style.cursor = 'pointer';

// Export button
const exportBtn = document.createElement('button');
exportBtn.textContent = 'Export Logs';
exportBtn.style.padding = '10px 20px';
exportBtn.style.fontSize = '16px';
exportBtn.style.borderRadius = '6px';
exportBtn.style.border = 'none';
exportBtn.style.cursor = 'pointer';

// Save log
function logInput(value) {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const logs = JSON.parse(localStorage.getItem('input_logs') || '[]');
  logs.push({ date, time, value });
  localStorage.setItem('input_logs', JSON.stringify(logs));
}

// Export CSV
function exportCSV() {
  const logs = JSON.parse(localStorage.getItem('input_logs') || '[]');
  const csv = "date,time,value\n" + logs.map(row =>
    `${row.date},${row.time},"${row.value}"`
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
    logInput(input.value);
    document.body.removeChild(overlay);
  }
};

exportBtn.onclick = exportCSV;

// Add everything to the overlay
overlay.appendChild(input);
overlay.appendChild(submitBtn);
overlay.appendChild(exportBtn);

// Add overlay to page
document.body.appendChild(overlay);
