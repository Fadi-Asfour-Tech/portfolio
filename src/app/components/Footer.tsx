import BackToTop from "@/general_components/BackToTop";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (<>      <BackToTop/>
      <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Fadi Asfour&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Fadi Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
             <Link
                href="https://github.com/Fadi-Asfour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fadi-asfour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://wa.me/+963936778940"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <FaWhatsapp />
              </Link>
          </div>
        </div>
      </div>
    </footer>
</>

  );
}
