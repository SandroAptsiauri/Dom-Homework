// 1.შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

// const btn = document.createElement("button");
// const div = document.createElement("div");
// const text = document.createTextNode("hello");
// const buttonText = document.createTextNode("Click Me");
// btn.setAttribute("id", "btnId");
// div.setAttribute("id", "divId");
// div.append(text);
// btn.append(buttonText);
// document.body.append(btn, div);
// btn.addEventListener("click", () => {
//   div.style.display = "none";
// });

// 2.შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

// const div = document.createElement("div");
// div.setAttribute("id", "card");
// const h2 = document.createElement("h2");
// const h2Text = document.createTextNode("Gandalf");
// h2.appendChild(h2Text);
// const a = document.createElement("a");
// const aText = document.createTextNode("Go to profile");
// a.appendChild(aText);
// a.href = "#";
// div.append(h2, a);
// document.body.appendChild(div);

// 3. შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე
// ● ბონუს დავალება:
// გამოიტანე ეკრანზე ქულების რაოდენობა
// ➔ სწორი პასუხის შემთხვევაში დაამატე 1
// ქულა
// ➔ არასწორის შემთხვევაში უცვლელი რჩება
// const correctAnsw = document.getElementById("correct-answer");
// const falseAnsw = Array.from(document.getElementsByClassName("false-answer"));
// const point = document.getElementById("point");
// let pointValue = 0;
// correctAnsw.addEventListener("click", (e) => {
//   e.target.style.background = "green";
//   e.target.style.border = "none";
//   e.target.style.color = "white";
//   pointValue++;
//   point.textContent = `Points: ${pointValue}`;
// });
// for (let item of falseAnsw) {
//   item.addEventListener("click", (e) => {
//     e.target.style.background = "red";
//     e.target.style.border = "none";
//     e.target.style.color = "white";
//   });
// }
// const correctAnsw2 = document.getElementById("correct-answer2");
// correctAnsw2.addEventListener("click", (e) => {
//   e.target.style.background = "green";
//   e.target.style.border = "none";
//   e.target.style.color = "white";
//   pointValue++;
//   point.textContent = `Points: ${pointValue}`;
// });
