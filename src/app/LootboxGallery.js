import { useState, useEffect } from 'react';
import './globals.css'; // Importa los estilos globales
import Image from 'next/image';

const imagesList1 = [
  '/imgp1.png',
  '/imgp2.png',
  '/imgp3.png',
  '/imgp4.png',
  '/imgp5.png',
  '/imgp6.png',
  '/imgp7.png',
  '/imgp8.png',
  '/imgp9.png',
  '/imgp10.png',
  '/imgp11.png',
  '/imgp12.png',
  '/imgp13.png',
];

const imagesList2 = [
  '/back.png',
  '/back.png',
  '/back.png',
];

const imagesList3 = [
  '/img1.png',
  '/img2.png',
  '/img3.png',
  '/img4.png',
  '/img5.png',
  '/img6.png',
  '/img7.png',
  '/img8.png',
  '/img9.png',
  '/img10.png',
  '/img11.png',
  '/img12.png',
  '/img13.png',
];

const imagesList4 = [
  '/imgd1.png',
  '/imgd2.png',
  '/imgd3.png',
  '/imgd4.png',
  '/imgd5.png',
  '/imgd6.png',
  '/imgd7.png',
  '/imgd8.png',
  '/imgd9.png'
];

const getRandomImages = (list, count) => {
  const shuffledList = [...list].sort(() => Math.random() - 0.5);
  return shuffledList.slice(0, count);
};

const LootboxGallery = () => {
  const [lootboxImageList, setLootboxImageList] = useState(imagesList3);
  const [originalLootboxImageList, setOriginalLootboxImageList] = useState(imagesList3);
  const [previewImageList, setPreviewImageList] = useState(getRandomImages(imagesList1, 3));
  const [randomImage, setRandomImage] = useState(null);

  // Efecto secundario para cambiar las listas de forma pasiva
  useEffect(() => {
    if (lootboxImageList === imagesList4) {
      setPreviewImageList(getRandomImages(imagesList2, 3));
    } else {
      setPreviewImageList(getRandomImages(imagesList1, 3));
    }
  }, [lootboxImageList]);

  const handleOpenLootbox = () => {
    const randomIndex = Math.floor(Math.random() * lootboxImageList.length);
    setRandomImage(lootboxImageList[randomIndex]);
  };

  const handleSwitchList = () => {
    // Cambia entre las listas 1 y 3 al hacer clic en el botón
    setLootboxImageList(lootboxImageList === imagesList3 ? imagesList4 : imagesList3);
  };

  const handleSwitchList2 = () => {
    // Cambia a imagesList2 y imagesList4 al hacer clic en el botón
    setLootboxImageList(imagesList4);
  };

  return (
    <div className='sublBox'>
      <div className='topButton'>
        <div className='topButtonl'>
          <button className='buttonLoot2' onClick={handleSwitchList}>
            <Image src='/kofre.png' width={100} height={100} />
          </button>
        </div>
        <div className='topButtonr'>
          <button className='buttonLoot2' onClick={handleSwitchList2}>
            <Image src='/otro_kofre.png' width={100} height={100} />
          </button>
        </div>
      </div>
      <div className="previewImages">
        {previewImageList.map((image, index) => (
          <div key={index} className={`previewImageContainer ${index === 1 ? 'middle' : ''}`}>
            {/* Utiliza la etiqueta Image de next/image para las vistas previas */}
            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              width={100} // Especifica el ancho deseado
              height={100} // Especifica el alto deseado
            />
          </div>
        ))}
      </div>
      <div className="lootboxGallery">
        {randomImage && (
          <div className="imageContainer">
            {/* Utiliza la etiqueta Image de next/image */}
            <Image
              src={randomImage}
              alt="Imagen aleatoria"
              width={250} // Especifica el ancho deseado
              height={354} // Especifica el alto deseado
            />
          </div>
        )}
        <br />
      </div>
      <button onClick={handleOpenLootbox} className="buttonLoot">
        Saca una Carta
      </button>
    </div>
  );
};

export default LootboxGallery;

