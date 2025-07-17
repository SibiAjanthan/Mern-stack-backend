// Importing buffer is not required directly as it's global


// // 1. Create buffer from string
// const buf1= Buffer.from('Hello');
// console.log('1. Buffer from string:', buf1);
// console.log('   As string:', buf1.toString());//convert to string

// // 2. Allocate fixed size buffer
// const buf2 = Buffer.alloc(10);
// console.log('\n2. Allocated buffer:', buf2);

// // 3. Write to buffer
// buf2.write('Hi!');
// console.log('   After write:', buf2.toString());

// // 4. Byte length
// console.log('\n4. Byte length of "Hello":', Buffer.byteLength('Hello'));

// // 5. Access buffer elements
// const buf3 = Buffer.from('ABC');
// console.log('\n5. Access individual bytes:');
// console.log('   buf3[0]:', buf3[0]); // ASCII for 'A'

// // 6. Slice buffer
// const sliced = buf1.slice(0, 3);
// console.log('\n6. Sliced buffer (0-3):', sliced.toString());

// // 7. Compare buffers
// const a = Buffer.from('a');
// const b = Buffer.from('b');
// console.log('\n7. Compare "a" to "b":', a.compare(b)); 

// // 8. Copy buffer
// const source = Buffer.from('Data is');
// const target = Buffer.alloc(4);
// source.copy(target);
// console.log('\n8. Copied buffer:', target.toString());

// // 9. Concat buffers
// const bufA = Buffer.from('Node');
// const bufB = Buffer.from('JS');
// const combined = Buffer.concat([bufA, bufB]);
// console.log('\n9. Concatenated buffer:', combined.toString());

// // 10. JSON representation
// const bufJson = Buffer.from('Hi');
// console.log('\n10. JSON Representation:', bufJson.toJSON());


// ----task----
// Task 1: Reverse a String Using Buffer

const input = 'NodeJS';
const buf = Buffer.from(input);
const reversedBuffer = Buffer.from(buf.reverse());
console.log('Original:', input);
console.log('Reversed:', reversedBuffer.toString());

//  Task 2: Merge Two Strings Using Buffer.concat

const bufA = Buffer.from('sibi');
const bufB = Buffer.from(' ajanthan');
const combined = Buffer.concat([bufA, bufB]);
console.log('\n9. Concatenated buffer:', combined.toString());
