// script.js

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const formData = new FormData(event.target);
  const formObject = {};

  formData.forEach((value, key) => {
      formObject[key] = value;
  });

  fetch('/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('Dados enviados com sucesso!');
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});
