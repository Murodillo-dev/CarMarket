import main from "../assets/icons/main.svg?react";
import question from "../assets/icons/question.svg?react";
import store from "../assets/icons/store.svg?react";
import MainPage from "../pages/main";
import QuestionPage from "../pages/question";
const side = [
  {
    id: 1,
    title: "Asosiy",
    icon: main,
    path: "/asosiy",
    element: MainPage,
  },
  {
    id: 2,
    title: "E'lonlar",
    icon: question,
    path: "/e'lonlar",
    element: MainPage,
  },
  {
    id: 3,
    title: "Savollar",
    icon: store,
    path: "/savollar",
    element: QuestionPage,
  },
];
export { side };
