import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
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
      <div className="absolute top-6 left-6 z-10">
        <BackButton />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 top-16 left-24 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-30 top-40 left-52 animate-blob"></div>
        <div className="absolute w-80 h-80 bg-yellow-800 rounded-full blur-3xl opacity-30 bottom-20 right-32 animate-blob"></div>
      </div>

      <h1 className="text-4xl font-bold text-gray-700 mb-6 drop-shadow-lg">Edit Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="glassmorphic-card max-w-lg w-full p-6 rounded-lg shadow-lg">
          <div className="my-4">
            <label className="text-xl text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-500 rounded-lg"
            />
          </div>
          <div className="my-4">
            <label className="text-xl text-gray-700 font-semibold mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-500 rounded-lg"
            />
          </div>
          <div className="my-4">
            <label className="text-xl text-gray-700 font-semibold mb-2">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-500 rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full font-bold bg-blue-600 text-white p-3 rounded-lg hover:bg-sky-500 transition duration-300"
              onClick={handleEditBook}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBook;
