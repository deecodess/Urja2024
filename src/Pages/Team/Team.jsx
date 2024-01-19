import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg1 from '../../assets/21 1.png';
import bg2 from '../../assets/diyaAsset 1 1.png'
import styles from './Team.module.css'; // Assuming you have a CSS module file

const CustomPrevArrow = (props) => (
  <button {...props} className={styles['custom-prev-arrow']}>
    {'<'}
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className={styles['custom-next-arrow']}>
    {'>'}
  </button>
);

const ImageSlider = ({ teamMembers }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.sliderItem}>
            <img
              src={member.imageUrl}
              alt={member.name}
              className={styles.sliderImage}
            />
            <div className={styles.sliderContent}>
              <p>{member.name}</p>
              <p>{member.designation}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ImageDisplayer = () => {
  const ExBo = [
    // ... your team members
    { id: 1, name: 'John', designation: 'Developer', imageUrl: 'image1.jpg' },
    { id: 2, name: 'Jane', designation: 'Designer', imageUrl: 'image2.jpg' },
    { id: 3, name: 'Bob', designation: 'Tester', imageUrl: 'image3.jpg' },
    { id: 4, name: 'Alice', designation: 'Product Manager', imageUrl: 'image4.jpg' },
    { id: 1, name: 'John', designation: 'Developer', imageUrl: 'image1.jpg' },
    { id: 2, name: 'Jane', designation: 'Designer', imageUrl: 'image2.jpg' },
    { id: 3, name: 'Bob', designation: 'Tester', imageUrl: 'image3.jpg' },
    { id: 4, name: 'Alice', designation: 'Product Manager', imageUrl: 'image4.jpg' },
  ];
  const ExCo = [
    // ... your team members
    { id: 1, name: 'John', designation: 'Developer', imageUrl: 'image1.jpg' },
    { id: 2, name: 'Jane', designation: 'Designer', imageUrl: 'image2.jpg' },
    { id: 3, name: 'Bob', designation: 'Tester', imageUrl: 'image3.jpg' },
    { id: 4, name: 'Alice', designation: 'Product Manager', imageUrl: 'image4.jpg' },
    { id: 1, name: 'John', designation: 'Developer', imageUrl: 'image1.jpg' },
    { id: 2, name: 'Jane', designation: 'Designer', imageUrl: 'image2.jpg' },
    { id: 3, name: 'Bob', designation: 'Tester', imageUrl: 'image3.jpg' },
    { id: 4, name: 'Alice', designation: 'Product Manager', imageUrl: 'image4.jpg' },
  ];

  const Core = [
    // ... your team members
    { id: 1, name: 'John', designation: 'Developer', imageUrl: 'image1.jpg' },
    { id: 2, name: 'Jane', designation: 'Designer', imageUrl: 'image2.jpg' },
    { id: 3, name: 'Bob', designation: 'Tester', imageUrl: 'image3.jpg' },
    { id: 4, name: 'Alice', designation: 'Product Manager', imageUrl: 'image4.jpg' },
    { id: 1, name: 'John', designation: 'Developer', imageUrl: 'image1.jpg' },
    { id: 2, name: 'Jane', designation: 'Designer', imageUrl: 'image2.jpg' },
    { id: 3, name: 'Bob', designation: 'Tester', imageUrl: 'image3.jpg' },
    { id: 4, name: 'Alice', designation: 'Product Manager', imageUrl: 'image4.jpg' },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.bg1}><img src={bg1} alt="" /></div>
      <div className={styles.bg2}> <img src={bg2} alt="" /></div>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${bg1})` }}>
        <div className={styles.centerContent}>
          <h1>MEET THE TEAM</h1>
          <div className={styles.subheading}>
            <div>
              <h2 className={styles.heading1}>Executive Board</h2>
              <ImageSlider teamMembers={ExBo} />
            </div>
            <div>
              <h2 className={styles.heading2}>Executive Committee</h2>
              <ImageSlider teamMembers={ExCo} />
            </div>
            <div>
              <h2 className={styles.heading3}>Core</h2>
              <ImageSlider teamMembers={Core} />
            </div>
            {/* Add similar sections for Executive Committee and Core */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplayer;
