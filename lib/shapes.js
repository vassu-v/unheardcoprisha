// Seeded dry-brush shapes in a 100x100 box. Deterministic: same seed, same path,
// so the splashes look identical on every request.
let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
const f = n => n.toFixed(1);
function tall(seed){ s=seed; // flame-like vertical dry brush
  const pts=[]; const N=34;
  for(let i=0;i<=N;i++){ const y=100-i*100/N; const w=18+Math.sin(i/N*Math.PI)*22; pts.push([50+w+(r()-.5)*(i%3==0?26:8), y]); }
  for(let i=N;i>=0;i--){ const y=100-i*100/N; const w=18+Math.sin(i/N*Math.PI)*22; pts.push([50-w-(r()-.5)*(i%4==0?28:8), y]); }
  return 'M'+pts.map(p=>f(p[0])+' '+f(p[1])).join('L')+'Z'; }
function splat(seed){ s=seed; const pts=[]; const N=60;
  for(let i=0;i<N;i++){ const a=i/N*2*Math.PI; const rad=36+Math.sin(a*3)*6+(r()-.5)*(i%5==0?16:5); pts.push([50+Math.cos(a)*rad,50+Math.sin(a)*rad]); }
  return 'M'+pts.map(p=>f(p[0])+' '+f(p[1])).join('L')+'Z'; }
function blob(seed){ s=seed; const pts=[]; const N=8;
  for(let i=0;i<N;i++){ const a=i/N*2*Math.PI; const rad=34+r()*12; pts.push([50+Math.cos(a)*rad,50+Math.sin(a)*rad]); }
  let d=`M${f((pts[0][0]+pts[N-1][0])/2)} ${f((pts[0][1]+pts[N-1][1])/2)}`;
  for(let i=0;i<N;i++){ const p=pts[i], q=pts[(i+1)%N]; d+=`Q${f(p[0])} ${f(p[1])} ${f((p[0]+q[0])/2)} ${f((p[1]+q[1])/2)}`; }
  return d+'Z'; }

module.exports = { tall: tall(11), tall2: tall(29), splat: splat(5), blob: blob(3), blob2: blob(17) };
