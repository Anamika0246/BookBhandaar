import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="bg-white/30 backdrop-blur-md rounded-xl shadow-2xl m-4 p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all"
    >
      <div className="absolute top-2 right-4 px-4 py-1 bg-red-300 rounded-lg text-gray-800 font-semibold">
        {book.publishYear}
      </div>
      
      <div className="flex flex-col items-center mb-4">
        <PiBookOpenTextLight className="text-5xl text-yellow-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-700 text-sm mb-2">{book.author}</p>
        <p className="text-gray-600 text-sm">{book._id}</p>
      </div>

      <div className="flex gap-x-4 mt-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-green-600 transition-colors" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400 transition-colors" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400 transition-colors" />
        </Link>
      </div>

      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
