import Main from "./components/Main";

export function App() {
  return (
    <>
      <Main title="Главная">
        <div className="mt-[20px]">
          <img src="/logo.jpg" alt="SoC_D Logo" className="rounded-full mx-auto w-[150px]" />
          <h1 className="text-3xl text-center mt-3 font-bold text-gray-900">SoC_D</h1>
          <p className="mt-2 text-center text-gray-500">Проект по портированию оригинальных Теней Чернобыля на Android</p>
        </div>
        <div className="mx-auto grid mt-2 rounded-lg bg-slate-200">
          <p className="text-center text-gray-500">Ссылка на скачивание:</p>
          <a>Скачать по прямой ссылке</a>
          <a>Скачать с Яндекс Диска</a>
          <a>Скачать с Яндекс Диска</a>
        </div>
      </Main>
    </>
  );
}
