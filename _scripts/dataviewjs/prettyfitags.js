let tags = dv.current().file.tags;

// Generate nice pastel random colors
function randomPastel() {
  let r = Math.floor(Math.random() * 128 + 100);
  let g = Math.floor(Math.random() * 128 + 100);
  let b = Math.floor(Math.random() * 128 + 100);
  return ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1);
}

if (!tags || tags.length === 0) {
  dv.paragraph("No tags");
} else {
  let html = tags.map(tag => {
    let clean = tag.replace(/^#/, "");
    let color = randomPastel();

    return `<img 
      src="https://labl.es/svg?text=${encodeURIComponent(clean)}&width=220&bgcolor=${color}" 
      style="margin:6px; vertical-align:middle;"
    />`;
  }).join("");

  dv.container.innerHTML = `
    <div style="text-align:center; margin-top:8px;">
      ${html}
    </div>
  `;
}
