import Router, { Link } from "preact-router";

import Main from "./components/Main";

import Home from "./components/Home";
import OldVersion from "./components/OldVersions";
import AboutPort from "./components/AboutPort";

export function App() {
  const Navigation = () => (
    <Router>
      <Home path="/" />
      <AboutPort path="/about/project" />
      <OldVersion path="/old-versions" />
    </Router>
  );

  return (
    <>
      <Main>
        <div className="mt-[20px]">
          <img
            src="/logo.jpg"
            alt="SoC_D Logo"
            className="rounded-full mx-auto w-[150px]"
          />
          <h1 className="text-4xl text-center mt-3 font-bold text-gray-900">
            SoC_D
          </h1>
          <p className="mt-2 text-center text-gray-500">
            Проект по портированию оригинальных Теней Чернобыля на Android
          </p>
          <ul className="flex gap-2 mt-2 place-content-center text-gray-500">
            <li className="hover:text-gray-800">
              <Link href="/">Главная</Link>
            </li>
            {" | "}
            <li className="hover:text-gray-800">
              <Link href="/old-versions">Старые версии</Link>
            </li>
            {" | "}
            <li className="hover:text-gray-800">
              <Link href="/about/project">О проекте</Link>
            </li>
          </ul>
          <hr className="mt-3 mx-auto md:w-[550px] max-md:w-auto" />
        </div>
        <Navigation />
      </Main>
    </>
  );
}
