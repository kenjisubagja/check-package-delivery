const page = document.body;
const trackButton = document.getElementById("trackButton");
const demoShipment = document.getElementById("demoShipment");
const receiptInput = document.getElementById("receiptInput");
const receiverInput = document.getElementById("receiverInput");
const statusText = document.getElementById("statusText");
const progressBar = document.getElementById("progressBar");
const receiptText = document.getElementById("receiptText");
const receiverText = document.getElementById("receiverText");
const originText = document.getElementById("originText");
const destinationText = document.getElementById("destinationText");
const estimateText = document.getElementById("estimateText");
const courierText = document.getElementById("courierText");

const shipments = window.SAFE_TRACK_SHIPMENTS || [];
const statusClasses = ["status-in-transit", "status-sorting", "status-delivered", "status-not-found"];

function findShipment(receipt) {
  return shipments.find((shipment) => shipment.receipt.toLowerCase() === receipt.toLowerCase());
}

function setStatusClass(status) {
  page.classList.remove(...statusClasses);
  page.classList.add(`status-${status}`);
}

function applyShipment(shipment) {
  receiptInput.value = shipment.receipt;
  receiverInput.value = shipment.receiver;
  statusText.textContent = shipment.statusText;
  progressBar.style.width = `${shipment.progress}%`;
  receiptText.textContent = shipment.receipt;
  receiverText.textContent = shipment.receiver;
  originText.textContent = shipment.origin;
  destinationText.textContent = shipment.destination;
  estimateText.textContent = shipment.estimate;
  courierText.textContent = shipment.courier;
  setStatusClass(shipment.status);
}

function applyManualFallback() {
  const receipt = receiptInput.value.trim() || "BM-2025-0001";
  const receiver = receiverInput.value.trim() || "Nama penerima belum diisi";

  statusText.textContent = "Nomor Resi Belum Ada di Demo";
  progressBar.style.width = "0%";
  receiptText.textContent = receipt;
  receiverText.textContent = receiver;
  originText.textContent = "-";
  destinationText.textContent = "-";
  estimateText.textContent = "-";
  courierText.textContent = "-";
  setStatusClass("not-found");
}

function updateTrackingInfo() {
  const receipt = receiptInput.value.trim();
  const shipment = receipt ? findShipment(receipt) : shipments[0];

  if (shipment) {
    demoShipment.value = shipment.receipt;
    applyShipment(shipment);
    return;
  }

  demoShipment.value = "";
  applyManualFallback();
}

function restartDecorativeAnimation() {
  page.classList.remove("animation-ready");
  requestAnimationFrame(() => {
    page.classList.add("animation-ready");
  });
}

trackButton.addEventListener("click", () => {
  updateTrackingInfo();
  restartDecorativeAnimation();
});

demoShipment.addEventListener("change", () => {
  const shipment = findShipment(demoShipment.value);

  if (shipment) {
    applyShipment(shipment);
    restartDecorativeAnimation();
  }
});

window.addEventListener("load", () => {
  updateTrackingInfo();
  restartDecorativeAnimation();
});
