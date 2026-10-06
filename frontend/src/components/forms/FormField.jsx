export default function FormField({ label, value, onChange, type = 'text', name, placeholder, error, textarea = false }) {
  const sharedProps = {
    name,
    value,
    onChange,
    placeholder,
    className: `mt-2 w-full rounded-2xl border px-4 py-3 text-base text-white outline-none transition ${error ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/[0.02] focus:border-[#D4AF37]'}`
  }

  return (
    <label className="block text-sm text-white/80">
      {label}
      {textarea ? (
        <textarea {...sharedProps} rows={5} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      {error && <span className="mt-2 block text-xs text-red-400">{error}</span>}
    </label>
  )
}
