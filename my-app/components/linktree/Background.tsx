export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#F5EDE0]" />
      <div
        className="absolute -top-20 -left-20 w-[60vw] h-[60vw] max-w-[480px] max-h-[480px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(220,175,135,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[55vw] h-[55vw] max-w-[440px] max-h-[440px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(200,155,110,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(245,225,200,0.6) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
