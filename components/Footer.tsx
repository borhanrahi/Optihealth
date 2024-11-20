import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 lg:py-20">
      <div className="container px-4 mx-auto">
        {/* Main Footer Card */}
        <div className="relative bg-gradient-to-r from-[#0A1112] to-transparent rounded-2xl border border-white/20 p-6 lg:p-12">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">Optihealth</div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium">Address:</p>
                <p className="text-white/80">
                  Level 1, 12 Sample St, Sydney NSW 2000
                </p>
              </div>
              <div>
                <p className="text-white font-medium">Contact:</p>
                <p className="text-white/80">1800 123 4567</p>
                <p className="text-white/80">
                  Check out the best website Templates on happydigital.com
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-white/80">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Youtube size={24} />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <Link href="#" className="block text-white hover:text-white/80">
                  Contact Us
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Support
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  FAQs
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Resources
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Blog
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="#" className="block text-white hover:text-white/80">
                  Partners
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Careers
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Terms of Use
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between">
            <div className="space-y-8 max-w-2xl">
              <div className="text-2xl font-bold text-white">Optihealth</div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium">Address:</p>
                  <p className="text-white/80">
                    Level 1, 12 Sample St, Sydney NSW 2000
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium">Contact:</p>
                  <p className="text-white/80">1800 123 4567</p>
                  <p className="text-white/80">
                    Check out the best website Templates on happydigital.com
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-white/80">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <Instagram size={24} />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <Twitter size={24} />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <Linkedin size={24} />
                </Link>
                <Link href="#" className="text-white hover:text-white/80">
                  <Youtube size={24} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex gap-24">
              <div className="space-y-3">
                <Link href="#" className="block text-white hover:text-white/80">
                  Contact Us
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Support
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  FAQs
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Resources
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Blog
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="#" className="block text-white hover:text-white/80">
                  Partners
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Careers
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Terms of Use
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-white hover:text-white/80">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Credits Section */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-white/80">
          <div className="flex items-center gap-2">
            <p>
              © {new Date().getFullYear()} &nbsp;
              <Link
                href="https://github.com/borhanrahi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Borhan
              </Link>
              &nbsp; All rights reserved.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
