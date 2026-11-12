export default function OrgStructure({ type }) {
  const box = (x, y, label, isTop = false, w = 80) => (
    <g>
      <rect
        x={x - w / 2} y={y - 14} width={w} height="28" rx="6"
        className={`org-node ${isTop ? 'top' : ''}`}
      />
      <text x={x} y={y + 4} textAnchor="middle" className={`org-label ${isTop ? 'top' : ''}`}>
        {label}
      </text>
    </g>
  );

  const line = (x1, y1, x2, y2) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} className="org-line" />
  );

  if (type === 'linear') {
    return (
      <svg viewBox="0 0 400 240" className="org-svg">
        {box(200, 30, 'Директор', true)}
        {line(200, 44, 200, 80)}
        {box(200, 94, 'Начальник')}
        {line(200, 108, 200, 144)}
        {box(200, 158, 'Мастер')}
        {line(200, 172, 200, 210)}
        {box(200, 224, 'Рабочий')}
      </svg>
    );
  }

  if (type === 'functional') {
    return (
      <svg viewBox="0 0 400 260" className="org-svg">
        {box(200, 30, 'Директор', true)}
        {line(200, 44, 200, 70)}
        {line(80, 70, 320, 70)}
        {line(80, 70, 80, 100)}
        {line(200, 70, 200, 100)}
        {line(320, 70, 320, 100)}
        {box(80, 114, 'Финансы')}
        {box(200, 114, 'Производство')}
        {box(320, 114, 'Маркетинг')}
        {line(80, 128, 80, 160)}
        {line(200, 128, 200, 160)}
        {line(320, 128, 320, 160)}
        {box(80, 174, 'Бухгалтер', false, 90)}
        {box(200, 174, 'Инженер')}
        {box(320, 174, 'Аналитик')}
      </svg>
    );
  }

  if (type === 'divisional') {
    return (
      <svg viewBox="0 0 400 260" className="org-svg">
        {box(200, 30, 'Холдинг', true)}
        {line(200, 44, 200, 70)}
        {line(70, 70, 330, 70)}
        {line(70, 70, 70, 100)}
        {line(200, 70, 200, 100)}
        {line(330, 70, 330, 100)}
        {box(70, 114, 'Дивизион A', false, 100)}
        {box(200, 114, 'Дивизион B', false, 100)}
        {box(330, 114, 'Дивизион C', false, 100)}
        {line(70, 128, 70, 160)}
        {line(200, 128, 200, 160)}
        {line(330, 128, 330, 160)}
        {box(70, 174, 'Регион РФ', false, 90)}
        {box(200, 174, 'Европа', false, 90)}
        {box(330, 174, 'Азия', false, 90)}
        {line(70, 188, 70, 218)}
        {line(200, 188, 200, 218)}
        {line(330, 188, 330, 218)}
        {box(70, 232, 'Отдел', false, 80)}
        {box(200, 232, 'Отдел', false, 80)}
        {box(330, 232, 'Отдел', false, 80)}
      </svg>
    );
  }

  if (type === 'matrix') {
    return (
      <svg viewBox="0 0 440 280" className="org-svg">
        {box(220, 30, 'Директор', true, 100)}
        {line(220, 44, 220, 70)}
        {line(90, 70, 350, 70)}
        {line(90, 70, 90, 95)}
        {line(220, 70, 220, 95)}
        {line(350, 70, 350, 95)}
        {box(90, 109, 'Проект A', false, 90)}
        {box(220, 109, 'Проект B', false, 90)}
        {box(350, 109, 'Проект C', false, 90)}

        {box(60, 200, 'Функция 1', false, 90)}
        {box(190, 200, 'Функция 2', false, 90)}
        {box(320, 200, 'Функция 3', false, 90)}

        <line x1="50" y1="123" x2="360" y2="186" className="org-line" strokeDasharray="4 3" />
        <line x1="180" y1="123" x2="190" y2="186" className="org-line" strokeDasharray="4 3" />
        <line x1="350" y1="123" x2="200" y2="186" className="org-line" strokeDasharray="4 3" />
        <line x1="90" y1="123" x2="320" y2="186" className="org-line" strokeDasharray="4 3" />
      </svg>
    );
  }

  return null;
}