const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");

let todos = [];

const TODOS_KEY = "todos";

function savedTodo() {
  // JSON.stringify를 통해서 string 형태로 변환
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  // console.log(evemt)를 통해 확인한 target, parentElement 이용
  const li = event.target.parentElement;
  li.remove();
  // id값이 int인지 string인지 확인 필요
  // filter을 통해 object가 사라지는 것이 아니기 때문에 다시 todos에 입력
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  //todos를 localStorage에 저장
  savedTodo();
}

function addTodo(newTodo) {
  // li, span, btn html에 생성
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerText = "🍊";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  // object가 된 변수에서 text에 해당하는 값 호출
  span.innerText = newTodo.text;
  todoList.appendChild(li);
  // li에도 object의 id와 같은 값으로 id생성
  li.id = newTodo.id;
  savedTodo();
}

function submitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  // newTodo 값을 이용해 원하는 형식의 object 생성
  const newTodoObj = { text: newTodo, id: Date.now() };
  // submit 이후 value 값 빈칸
  todoInput.value = "";
  // todos라는 array에 object 생성
  todos.push(newTodoObj);
  // object를 이용하여 addTodo 실행
  addTodo(newTodoObj);
}

todoForm.addEventListener("submit", submitTodo);

// localStorage에서 key에 해당하는 value 호출
const savedTodos = localStorage.getItem(TODOS_KEY);

// if (savedTodos가 존재할 경우 === true)
if (savedTodos) {
  // object형식의 string으로 작성된 value값을 object로 변환
  const parseTodo = JSON.parse(savedTodos);
  // todos에 parseTodo object를 대입
  todos = parseTodo;
  //forEach(functionName); 각각의 item으로 함수 실행
  parseTodo.forEach((item) => addTodo(item));
}
