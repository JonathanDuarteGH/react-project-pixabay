import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageResults from './components/ImageResults';
import SearchField from './components/SearchField';
import AmountField from './components/AmountField';

const PixaBaySearch = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [amount, setAmount] = useState(15);
  const [selectedTile, setSelectedTile] = useState(null);

  useEffect(() => {
    const callPixaBay = async () => {
      const per_page = amount;
      const key = "18645604-09d2285562c90aaed23810049"
      const apiUrl = "https://pixabay.com/api/"
      const res = await axios.get(`${apiUrl}`, {
        params: {
          key,
          per_page,
          q: searchText
        }
      })
      setImages(res.data.hits);
    }

    if (searchText === '') {
      setImages([]);
    } else {
      callPixaBay();
    }

  }, [searchText, amount])


  const onTextChange = (e) => {
    setSearchText(e.target.value)
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value)
  };

  /* console.log(images); */
  return (
    <div>
      <SearchField searchText={searchText} onTextChange={onTextChange} />
      <br />
      <AmountField amount={amount} onAmountChange={onAmountChange} />
      {images.length > 0 ? (
        <ImageResults
          images={images}
          selectedTile={selectedTile}
          setSelectedTile={setSelectedTile}
        />
      ) : null}
    </div>
  )
}

export default PixaBaySearch;
