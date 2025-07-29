let globalData = [];

document.getElementById('file-input').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const fileName = file.name.toLowerCase();

  if (fileName.endsWith('.csv')) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const csv = event.target.result;
      processCSV(csv);
    };
    reader.readAsText(file);

  } else if (fileName.endsWith('.xlsx')) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
      processData(json);
    };
    reader.readAsArrayBuffer(file);
  } else {
    alert("Please upload a .csv or .xlsx file.");
  }
});

function processCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  const data = lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, h, i) => {
      obj[h] = isNaN(values[i]) ? values[i] : +values[i];
      return obj;
    }, {});
  });
  processData(data);
}

function processData(data) {
  globalData = data;
  const headers = Object.keys(data[0]);

  const xSelect = document.getElementById('x-select');
  const ySelect = document.getElementById('y-select');

  xSelect.innerHTML = headers.map(h => `<option value="${h}">${h}</option>`).join('');
  ySelect.innerHTML = headers.map(h => `<option value="${h}">${h}</option>`).join('');

  document.getElementById('dropdowns').style.display = 'block';
}

function drawChart() {
  const xKey = document.getElementById('x-select').value;
  const yKey = document.getElementById('y-select').value;

  const x = globalData.map(row => row[xKey]);
  const y = globalData.map(row => row[yKey]);

  Plotly.newPlot('plot', [{
    x: x,
    y: y,
    type: 'bar'
  }], {
    title: `${yKey} vs ${xKey}`,
    xaxis: { title: xKey },
    yaxis: { title: yKey }
  });
}
