function submitForm() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  if (nama && email && pesan) {
    alert(`Terima kasih, ${nama}! Pesan kamu sudah dikirim.`);
    // Reset form (opsional)
    document.querySelector(".contact-form").reset();
  }

  return false; 
}
