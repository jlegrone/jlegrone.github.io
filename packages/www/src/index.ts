import './console';
import w from './worker-import';

console.log(w);

// import Worker from 'worker-loader!./worker';

// const worker = new Worker();

// worker.postMessage({ a: 1 });
// worker.onmessage = function () {};

// worker.addEventListener("message", function () {});

// async function bootstrap() {
//   const w = await import('./worker');
//   console.log(w)
// }

// bootstrap();
