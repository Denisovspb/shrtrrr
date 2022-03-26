import { useState } from 'react';
import { LoadingIcon } from './LoadingIcon';

export default function UrlForm() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState({});
  const shortenUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;

  const validateUrl = () => {
    if (url.indexOf('http') === 0 || url.indexOf('www.') === 0) {
      setError(false);
    } else {
      setError(true);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    validateUrl();

    try {
      let response = await fetch(shortenUrl);
      let result = await response.json();
      setResultUrl(result);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="mt-10 sm:mt-12">
      <form onSubmit={handleSubmit}>
        <div className="sm:flex">
          <div className="min-w-0 flex-1">
            <label htmlFor="url" className="sr-only">
              URL Input
            </label>
            <input
              type="text"
              name="url"
              placeholder="Put your link here..."
              className="block shadow w-full px-4 py-3 rounded-md border-0 bg-gray-300 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-gray-300"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-6">
            <button
              type="submit"
              className="font-bold block w-full px-4 py-3 rounded-md shadow bg-gradient-to-r from-indigo-200 to-indigo-400 hover:from-indigo-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-gray-300">
              {loading ? <LoadingIcon /> : 'Shrtrrr it!'}
            </button>
          </div>
        </div>
      </form>
      {error && (
        <p className="text-red-600 font-bold mt-3 text-md sm:mt-4">Please enter a valid URL</p>
      )}
      {resultUrl.ok ? (
        <div className="rounded-md bg-gray-300 py-4 mt-5  flex flex-col items-center shadow">
          <p className="text-base">Link created!</p>
          <a
            href={resultUrl.result.full_short_link}
            className="text-green-600 font-bold mt-2 hover:text-green-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer">
            {resultUrl.result.full_short_link}
          </a>
        </div>
      ) : (
        <p className="mt-3 text-md text-gray-700 sm:mt-4">
          This website uses shrtcode API and by using it you agree to their{' '}
          <a
            href="https://shrtco.de/tos"
            className="text-indigo-400 hover:text-gray-700 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer">
            Terms of Service
          </a>
          .
        </p>
      )}
    </div>
  );
}
