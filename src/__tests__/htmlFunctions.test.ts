import { createHtml, toggleClassName } from "../htmlFunctions";
import { Todo } from "../models/Todo";
// import { toggleTodo } from "../todos";

describe("Html functions", () => {

  beforeEach(() => {
    document.body.innerHTML = `
    <ul id="todos"></ul>
    `;

  })

  test("it should create html", () => {
    const todos: Todo[] = [
      { text: "Lorem", done: false },
      { text: "ipsum", done: true },
    ];

    createHtml(todos);

    const liTags = document.querySelectorAll("li");
    expect(liTags).toHaveLength(2);
  });
  test("it should have the right class", () => {
    const todos: Todo[] = [
      { text: "Lorem", done: false },
      { text: "ipsum", done: true },
    ];


    createHtml(todos);
    toggleClassName(todos,(document.getElementsByTagName("li"))[0])
    

    expect((document.querySelectorAll("li"))[0].className).toBe("done")
  })
  
  
});
