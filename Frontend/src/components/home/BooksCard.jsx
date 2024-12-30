import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 bg-white/10 ">
      {books.map((book) => (
        <div
          key={book._id}
          className="bg-white/30 backdrop-blur-md rounded-xl shadow-2xl m-4 p-6 flex flex-col items-center text-center"
        >
          <PiBookOpenTextLight className="text-5xl text-yellow-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-700 text-sm mb-4">{book.author}</p>
          <p className="text-gray-600 text-sm mb-6">{book.publishYear}</p>
          <div className="flex gap-x-4">
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-2xl text-green-800 hover:text-green-600" />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-yellow-400" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-400" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
