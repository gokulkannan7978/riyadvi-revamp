export default function LoadingState({ text = 'Loading...' }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37]">
      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#D4AF37]" />
      {text}
    </div>
  )
}
