export default function InputField({ label, type = 'text', placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-[rgba(45,45,45,0.12)] bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-[rgba(45,45,45,0.38)] focus:border-[var(--orange)]"
      />
    </label>
  );
}
