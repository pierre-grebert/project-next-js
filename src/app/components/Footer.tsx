import Link from "next/link"

export const Footer:React.FC = () => {
    return (
        <>
        <footer className="p-4 bg-[#b98242] sm:p-6 dark">
      <div className="md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Liens importants</h2>
                  <ul className="text-white dark:text-white">
                      <li className="mb-4">
                        <Link className="underline" href="/">Accueil</Link>
                      </li>
                      <li>
                        <Link className="underline" href="/cv">CV</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Réseaux</h2>
                  <ul className="text-white dark:text-white">
                      <li>
                          <a href="https://www.linkedin.com/in/pierre-grebert/" target="blank" className="underline">Linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Contact</h2>
                  <ul className="text-white dark:text-white">
                      <li className="mb-4">
                          <a href="mailto:pierre.grebert62@gmail.com" className="hover:underline">pierre.grebert62@gmail.com</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">06 34 04 39 56</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white dark:text-white sm:text-center">© 2024 <a href="#" className="hover:underline">Pierre GREBERT</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://www.linkedin.com/in/pierre-grebert/" target="blank" className="text-white hover:text-white dark:hover:text-white">
                  <svg className="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                  <span className="sr-only">Linkedin page</span>
              </a>
          </div>
      </div>
  </footer>
        </>
    )
}