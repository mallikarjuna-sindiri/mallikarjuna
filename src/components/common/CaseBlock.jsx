export default function CaseBlock({ title, text }) {
  return (
    <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-7 shadow-soft">
      <h2 className="text-2xl font-bold text-[var(--ink)]">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-[rgba(45,45,45,0.78)]">{text}</p>
    </div>
  );
}
