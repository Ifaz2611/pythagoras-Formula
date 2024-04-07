const resizer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.borderBoxSize) {
        update();
      }
    }
  });
  
  function update() {
    const width = parseFloat(getComputedStyle(fun).width);
    const height = parseFloat(getComputedStyle(fun).height);
    hyp.textContent = Math.hypot(width, height);
    w.textContent = width;
    h.textContent = height;
  }
  
  resizer.observe(fun);
  
  update();
  