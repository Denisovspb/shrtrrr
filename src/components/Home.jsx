import img from '../images/illustration-working.svg';
import UrlForm from './UrlForm';

export default function Home() {
  return (
    <div className="py-20">
      <div className="lg:grid lg:grid-cols-2 mx-auto max-w-7xl lg:px-6 lg:gap-8 justify-center">
        <div className="lg:py-24 text-left mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0">
          <h1 className="text-4xl mt-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight">
            <span className="block">More than just</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400 block">
              shorter links
            </span>
          </h1>
          <p className="text-base text-gray-700 sm:text-xl sm:mt-5 mt-3">
            Build your brand's recognition and get detailed insights on how your links are
            performing.
          </p>
          <UrlForm />
        </div>
        <div className="mt-12 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <img src={img} alt="Worker" />
          </div>
        </div>
      </div>
    </div>
  );
}
