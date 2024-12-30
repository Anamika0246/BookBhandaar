import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 min-h-screen p-6 flex flex-col items-center justify-center">
      <div className="absolute top-6 left-6 z-10">
        <BackButton />
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 top-16 left-24 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-30 top-40 left-52 animate-blob"></div>
        <div className="absolute w-80 h-80 bg-yellow-800 rounded-full blur-3xl opacity-30 bottom-20 right-32 animate-blob"></div>
      </div>

      
      <h1 className="text-4xl font-bold text-gray-700 mb-6 drop-shadow-lg">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="glassmorphic-card max-w-lg w-full p-6 rounded-lg shadow-lg">
          <div className="my-4">
            <span className="text-xl font-semibold text-gray-700 mr-2">ID:</span>
            <span className="text-gray-800">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl font-semibold text-gray-700 mr-2">Title:</span>
            <span className="text-gray-800">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl font-semibold text-gray-700 mr-2">Author:</span>
            <span className="text-gray-800">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl font-semibold text-gray-700 mr-2">Publish Year:</span>
            <span className="text-gray-800">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl font-semibold text-gray-700 mr-2">Created At:</span>
            <span className="text-gray-800">{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl font-semibold text-gray-700 mr-2">Updated At:</span>
            <span className="text-gray-800">{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
