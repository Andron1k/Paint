const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let painting = false;

canvas.width = 1000;
canvas.height = 600;

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = "black" // Початковий колір пензля

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseleave', endPosition);






// Додавання кольору
const colorPicker = document.getElementById('colorPicker');
function setColor() {
    ctx.strokeStyle = colorPicker.value;
}
colorPicker.addEventListener('input', setColor);




