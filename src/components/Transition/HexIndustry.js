export function hexIndustry(originX, originY){
    const w = window.innerWidth * 0.20775;      // same as background-size: 20.775vw
    const h = w * 1.1547;
    const rowStep = w * 0.866;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const rowsEachSide = Math.ceil(window.innerHeight / 2 / rowStep) + 2;
    const colsEachSide = Math.ceil(window.innerWidth / 2 / w) + 2;
    const perRow = colsEachSide * 2 + 1;

    const speed = 0.00001;
    const jitter = 0.3;
    const duration = 0.45;

    const cells = [];
    let maxDelay = 0;

    for (let k = -rowsEachSide; k <= rowsEachSide; k++){
        const odd = ((k % 2) + 2) % 2;          // 0 or 1, correct for negative k

        for (let c = -colsEachSide; c <= colsEachSide; c++){
            const x = cx + c * w + odd * (w / 2);
            const y = cy + k * rowStep;

            const dist = Math.hypot(x - originX, y - originY);
            const delay = dist * speed + Math.random() * jitter;
            if (delay > maxDelay){
                maxDelay = delay;
            }

            cells.push({
                id: (k + rowsEachSide) * perRow + (c + colsEachSide),
                x: x,
                y: y,
                delay: delay,
            });
        }
    }

    return {
        cells: cells,
        w: w,
        h: h,
        duration: duration,
        total: Math.ceil((maxDelay + duration) * 1000),
    };
}