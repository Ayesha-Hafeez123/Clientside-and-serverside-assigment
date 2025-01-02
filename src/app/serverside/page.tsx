import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

const ServerSide = async () => {
  // Error handling added
  try {
    const res = await fetch("https://simple-books-api.glitch.me/books/", {
      cache: "no-store", // Ensures fresh data fetching on every request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch books from the server");
    }

    const books: Book[] = await res.json();

    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center py-12 px-6 sm:px-8">
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 p-10 text-center">
            <h1 className="text-4xl font-serif font-bold text-white tracking-wide">
              Server Side Data Fetching
            </h1>
          </div>
          <div className="p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {books.map((book) => (
                <li
                  key={book.id}
                  className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-300"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {book.name}
                  </h2>
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    Type: <span className="font-semibold">{book.type}</span>
                  </p>
                  <p
                    className={`text-sm font-semibold mb-4 ${
                      book.available ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {book.available ? "Available" : "Not Available"}
                  </p>
                  <div
                    className={`w-full h-1 rounded-full transition-all duration-300 ${
                      book.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    // Return error message if API fetch fails
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-red-600">
          Error fetching data: {error.message}
        </p>
      </div>
    );
  }
};

export default ServerSide;
