import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000100] border-t border-[#B6B6B4]/20 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <p className="text-[#8A8A8A] text-sm">
            © 2025 Theory of Arts. All Rights Reserved.
          </p>

          {/* Instagram Only */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/_theory_of_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B6B6B4] hover:text-[#B6B6B4]/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
