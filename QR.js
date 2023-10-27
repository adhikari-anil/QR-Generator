document.addEventListener('DOMContentLoaded', function () {
  const textInput = document.getElementById('text-input');
  const generateButton = document.getElementById('generate-button');
  const qrcodeDiv = document.getElementById('qrcode');

  generateButton.addEventListener('click', function () {
      const text = textInput.value;
      if (text) {
          qrcodeDiv.innerHTML = ''; // Clear previous QR codes
          const qrcode = new QRCode(qrcodeDiv, text);
      }
      textInput.value = " ";
  });
});
