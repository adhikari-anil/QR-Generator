/*
document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const qrCodeSection = document.getElementById("qrCodeSection");
  const inputData = document.getElementById("inputData");

  generateButton.addEventListener("click", generateQR);

  function generateQR() {
    const data = inputData.value;
    if (data.trim() === "") {
      alert("Please enter valid data.");
      return;
    }

    qrCodeSection.innerHTML = ""; // Clear previous QR code if any

    const qrcode = new QRCode(qrCodeSection, {
      width: 200,
      height: 200,
      colorDark: "#000000", // Black QR code color
      colorLight: "#ffffff", // White background color
    });

    qrcode.makeCode(data);
  }
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const generateButton = document.getElementById('generate-button');
    const qrcodeDiv = document.getElementById('qrcode');

    generateButton.addEventListener('click', function () {
        const text = textInput.value;
        if (text) {
            // Create a QRCode object
            const qrcode = new QRCode(qrcodeDiv, {
                text: text,
                width: 128,
                height: 128,
            });
        }
    });
});
*/

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
