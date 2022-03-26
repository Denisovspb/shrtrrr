import { useState } from 'react';
import Burger from './Burger';
import MobileNav from './MobileNav';

export const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="pt-8 px-6 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center">
        <div className="hidden md:flex items-end space-x-8">
          <a
            href="/"
            className="text-2xl font-bold text-indigo-300 hover:text-black transition-all duration-200">
            Shrtrrr
          </a>
          <a href="/" className="text-xl hover:text-indigo-300 transition-all duration-200">
            Features
          </a>
          <a href="/" className="text-xl hover:text-indigo-300 transition-all duration-200">
            Pricing
          </a>
          <a href="/" className="text-xl hover:text-indigo-300 transition-all duration-200">
            Resources
          </a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="/"
            className="font-medium text-xl px-4 py-2 border border-transparent rounded-md hover:bg-gray-300  transition-all duration-300 ease-in-out">
            Log in
          </a>
          <a
            href="/"
            className="font-medium text-xl px-4 py-2 border border-transparent bg-gray-300 rounded-md">
            Sign up
          </a>
        </div>

        <div className="flex justify-between w-full items-end md:hidden">
          <div className="block">
            <a
              href="/"
              className="text-4xl font-bold text-indigo-300 hover:text-black transition-all duration-200">
              Shrtrrr
            </a>
          </div>

          <Burger active={active} setActive={setActive} />
        </div>

        {active && <MobileNav active={active} setActive={setActive} />}
      </nav>
    </header>
  );
};
