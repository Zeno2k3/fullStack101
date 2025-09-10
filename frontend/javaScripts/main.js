const arrorFuc = (a, b) => a + b;
const arrorFuc2 = (a) => a * 2;
const loichao = () => "Hello World";

console.log(arrorFuc(1, 2));
console.log(arrorFuc2(5));
console.log(loichao());

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item * 2); // Arrow function trong callback
console.log(newArr);

(function (ten) {
  console.log("Xin chào, " + ten + "!");
})("Thế giới");

function* generateId() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateId();
console.log(gen.next()); // 1
console.log(gen.next()); // 2
console.log(gen.next()); // 3
console.log(gen.next()); // undefined


function* demo() {
    const name = yield "Nhập tên:";
    console.log(`Xin chào, ${name}`);
}

const g = demo();
console.log(g.next());       // { value: "Nhập tên:", done: false }
console.log(g.next());  // In: "Xin chào, Nam"

function demo2(a, b) {
    console.log(arguments[0]); // giá trị đối số thứ 1
    console.log(arguments[1]); // giá trị đối số thứ 2
    console.log(arguments.length); // số đối số thực tế
}

demo2(10, 20, 30);
// Output:
// 10
// 20
// 3

function outer() {
  let count = 0; // biến trong phạm vi outer
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer(); // outer() chạy, trả về inner()
counter(); // 1
counter(); // 2
counter();


console.log(1);
console.log(2);


setTimeout(() => console.log(1), 2000); 
console.log(2); 
setTimeout(() => console.log("Hi 3"), 2000); 
console.log(4); 


function getData(callback) {
  setTimeout(() => {
    callback("Dữ liệu đã nhận 1");
  }, 2000);
}

getData((result) => {
  console.log(result); // "Dữ liệu đã nhận" (sau 2 giây)
});



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dữ liệu đã nhận 2");
    }, 2000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Khai báo Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Thành công
    } else {
      reject("Số quá nhỏ!"); // Thất bại
    }
  }, 2000);
});

// Sử dụng async/await
async function handlePromise() {
  try {
    const result = await myPromise;
    console.log("Thành công:", result);
  } catch (error) {
    console.log("Lỗi:", error);
  } finally {
    console.log("Promise đã hoàn tất!");
  }
}

// Gọi hàm
handlePromise();


console.log(2 + '2' - 1);