fetch('http://localhost:3000/quote')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });
