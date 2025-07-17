//----event module----
const EventEmitter = require('events'); // 1. import
// basic

// const emitter = new EventEmitter();     // 2. create

// // 3. listen
// emitter.on('greet', (name) => {
//   console.log(`Hello, ${name}`);
// });

// // 4. emit
// emitter.emit('greet', 'Ajanth');

//----multiple event----
// const emitter = new EventEmitter();

// // First listener
// emitter.on('start', () => {
//   console.log('Listener 1: Starting the app...');
// });

// // Second listener
// emitter.on('start', () => {
//   console.log('Listener 2: App started successfully!');
// });

// // Trigger the event
// emitter.emit('start');

//---- Custom EventEmitter Class----
// class Logger extends EventEmitter {
//   log(message) {
//     console.log('LOG:', message);
//     this.emit('messageLogged', {
//       msg: message
//     });
//   }
// }

// const logger = new Logger();

// logger.on('messageLogged', (data) => {
//   console.log('Listener received:', data.msg);
// });

// logger.log('This is a custom event!');

// ----task----
class LoginTracker extends EventEmitter {
  login(userName) {
    console.log(`User ${userName} has logged in`);

    this.emit('userLoggedIn', { name: userName });
  }
}
const tracker = new LoginTracker();

tracker.on('userLoggedIn', (data) => {
  console.log(`📢 Admin Alert: ${data.name} just logged in!`);
});
tracker.login('Ajay');
