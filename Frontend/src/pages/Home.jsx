import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import '@fontsource/pacifico';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
  <div className="relative bg-gray-50 min-h-screen">
  <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
    <div className="absolute w-80 h-80 lg:w-96 lg:h-96 bg-purple-600 rounded-full blur-3xl opacity-40 animate-blob top-1/4 left-1/4"></div>
    <div className="absolute w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-pink-600 rounded-full blur-3xl opacity-30 animate-blob top-1/3 left-1/3"></div>
    <div className="absolute w-80 h-80 lg:w-[32rem] lg:h-[32rem] bg-yellow-500 rounded-full blur-3xl opacity-30 animate-blob bottom-1/4 right-1/4"></div>
  </div>

  <div className="p-4 mx-5">
        <div className="flex justify-center items-center gap-x-4 mt-8 mb-8">
          <button
            className="glassmorphic-button px-4 py-1"
            onClick={() => setShowType('table')}
          >
            Table View
          </button>
          <button
            className="glassmorphic-button px-4 py-1"
            onClick={() => setShowType('card')}
          >
            Card View
          </button>
        </div>

       
        <div className="flex justify-between items-center mx-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 drop-shadow-md mb-8"
        style={{ fontFamily: 'Pacifico, cursive' }}>Books Bhandar</h1>

          <Link to="/books/create" className="glassmorphic-button p-2 mb-8">
            Add Book
          </Link>
        </div>

        
        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
