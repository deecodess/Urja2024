import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg1 from '../../assets/21 1.png';
import bg2 from '../../assets/diyaAsset 1 1.png'
import styles from './Team.module.css'; // Assuming you have a CSS module file
import osc from '../../assets/teampage/3-min.jpg'
import dosc from '../../assets/teampage/6-min.jpg'
import dosc1 from '../../assets/teampage/23-min.jpg'
import oec from '../../assets/teampage/9-min.jpg'
import oec1 from '../../assets/teampage/oec1.png'
import ofc from '../../assets/teampage/10-min.jpg'
import ohc from '../../assets/teampage/12-min.jpg'
import ooc from '../../assets/teampage/13-min.jpg'
import omc from '../../assets/teampage/ankeet.png'
import otc from '../../assets/teampage/18-min.jpg'
import occ from '../../assets/teampage/occ.png'
import osco from '../../assets/teampage/22-min.jpg'
import osco1 from '../../assets/teampage/25-min.jpg'
import ogc from '../../assets/teampage/sai.png'
import osd from '../../assets/teampage/26-min.jpg'
import ofc1 from '../../assets/teampage/27-min.jpg'
import ogc1 from '../../assets/teampage/30-min.jpg'
import odc from '../../assets/teampage/mitul.png'
import omc1 from '../../assets/teampage/29-min.jpg'


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
    { id: 1, name: 'Udit Munjal', designation: 'Overall Student Coordinator', imageUrl: osc},
    { id: 2, name: 'Shailja Choudhary', designation: 'Deputy Overall Student Coordinator', imageUrl: dosc },
    { id: 3, name: 'Jasminder Saini', designation: 'Deputy Overall Student Coordinator', imageUrl: dosc1 },
    { id: 4, name: 'Harsh Mishra', designation: 'Overall Finance Coordinator', imageUrl: ofc1 },
    { id: 5, name: 'Rohit Singla', designation: 'Overall Finance Coordinator', imageUrl: ofc },
    { id: 6, name: 'Lakshay Gupta', designation: 'Overall Student Director', imageUrl: osd },
    { id: 7, name: 'Aditi Vij', designation: 'Overall Student Convener', imageUrl: osco },
    { id: 8, name: 'Abhinav Garg', designation: 'Overall Student Convener', imageUrl: osco1 },
    { id: 9, name: 'Sannidhya Nautiyal', designation: 'Overall Event Coordinator', imageUrl: oec },
    { id: 10, name: 'Mansi Sharma', designation: 'Overall Event Coordinator', imageUrl: oec1 },
    { id: 11, name: 'Mitul Gusain', designation: 'Overall Documentation Coordinator', imageUrl: odc},
    { id: 12, name: 'Ankeet Kumar ', designation: 'Overall Maketing Coordinator', imageUrl: omc },
    { id: 13, name: 'Ruheen Kumar', designation: 'Overall Hospitality Coordinator', imageUrl: ohc },
    { id: 14, name: 'Priyanshi Bapna', designation: 'Overall Outreach Coordinator', imageUrl: ooc },
    { id: 15, name: 'Sai Manav', designation: 'Overall Games Coordinator', imageUrl: ogc },
    { id: 16, name: 'Aadeshvir Singh', designation: 'Overall Games Coordinator', imageUrl: ogc1 },
    { id: 17, name: 'Deepanshi Sharma', designation: 'Overall Technical Coordinator', imageUrl: otc  },
    { id: 18, name: 'Jessica Ahuja', designation: 'Overall Creativity Coordinator', imageUrl: occ},
    // { id: 19, name: 'Vivaan Taneja', designation: 'Overall Design Coordinator', imageUrl: ''}, UNABLE TO FIND IMAGES
    // { id: 20, name: 'Aryan Jhulka', designation: 'Overall Publicity Coordinator', imageUrl: ''},
    { id: 19, name: 'Ali Hamza ', designation: 'Overall Management Coordinator', imageUrl: omc1},
    // { id: 22, name: 'Amitoj Singh', designation: 'Overall Discipline Coordinator', imageUrl: ''},
    // { id: 23, name: 'Aayan Zaidi', designation: 'Overall Discipline Coordinator', imageUrl: ''},
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
            
            {/* Add similar sections for Executive Committee and Core */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplayer;