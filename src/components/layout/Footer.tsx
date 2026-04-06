export default function Footer() {
  return (
    <footer className="w-full relative z-10 py-8 border-t border-slate-200/50 mt-auto bg-white/50 backdrop-blur-sm">
      <div className="max-w-360 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <span>&copy; 2026 Marketly Inc. All rights reserved.</span>{" "}
        <ul className="inline-flex gap-4 ml-4">
          <li>
            <a
              href="/privacy"
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-slate-900 transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
