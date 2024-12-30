import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 min-h-screen p-6 flex flex-col items-center justify-center">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 top-16 left-24 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-30 top-40 left-52 animate-blob"></div>
        <div className="absolute w-80 h-80 bg-yellow-800 rounded-full blur-3xl opacity-30 bottom-20 right-32 animate-blob"></div>
      </div>

      <div className="absolute top-6 left-6 z-10">
        <BackButton />
      </div>

      <h1 className="text-4xl font-bold text-gray-700 mb-6 drop-shadow-lg">Create a New Book</h1>

      {loading ? <Spinner /> : ''}
      
      <div className="glassmorphic-card max-w-lg w-full p-6 rounded-lg shadow-2xl">
        <div className="my-4">
          <label className="text-xl font-semibold text-gray-700 mr-4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg bg-white/40"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold text-gray-700 mr-4">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg bg-white/40"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold text-gray-700 mr-4">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-lg bg-white/40"
          />
        </div>
        <button
          className="w-full font-bold bg-blue-600 text-white p-3 rounded-lg hover:bg-sky-500 transition duration-300"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
