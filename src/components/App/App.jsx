import { useState, useEffect } from 'react';
import getImages from '@/components/Services/Api';
import SearchBar from '../SearchBar';
import ImageGallery from '../ImageGallery';
import LoadMoreButton from '../LoadMoreButton';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage';
import style from './App.module.css';

export default function App() {
  const [imageResults, setImageResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const images = await getImages(searchQuery, searchPage);
        setImageResults(prevImage => [...prevImage, ...images]);

        scrollToBottom();
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchPage, searchQuery]);

  const addImage = newQuery => {
    setSearchQuery(newQuery.trim());
    setImageResults([]);
    setSearchPage(1);
  };

  const loadMoreImages = () => {
    setSearchPage(prevSearchPage => prevSearchPage + 1);
  };

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  return (
    <div className={style.app}>
      <SearchBar onSubmit={addImage} />

      {error && <ErrorMessage error={error} />}

      <ImageGallery images={imageResults} />

      {isLoading && <Loader />}

      {imageResults.length > 0 && !isLoading && (
        <LoadMoreButton loadMore={loadMoreImages} />
      )}
    </div>
  );
}
