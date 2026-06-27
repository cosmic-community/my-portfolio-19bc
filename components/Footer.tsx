export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-400">
        <p>© {year} My Portfolio. All rights reserved.</p>
        <p>
          Built with{' '}
          <a
            href="https://www.cosmicjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:text-brand-300"
          >
            Cosmic
          </a>
        </p>
      </div>
    </footer>
  )
}