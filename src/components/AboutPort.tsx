export default function AboutPort(path: any) {
  return (
    <div className="text-slate-500 text-center mt-2">
      <div>
        <p>
          Проект переносящий S.T.A.L.K.E.R.: Shadow of Chernobyl на мобильные
          платформы.
        </p>
        <p className="mt-1">Игра базируется на движке Unity.</p>
        <p>Проект разрабатывается уже: 21.08.2022 - {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
