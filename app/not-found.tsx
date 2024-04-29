import Link from "next/link";

/* eslint-disable i18next/no-literal-string */
export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are trying to view does not exist or has been moved.
        </p>
        <Link href="/">
          <a className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
            Go Back to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
}
/* eslint-enable i18next/no-literal-string */
