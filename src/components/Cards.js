import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Houses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrTDM2IJiGGdfkU6oyfh4OW2a4Wcw-1bK8Q&usqp=CAU'
              text='Lorem Ipsum has been the industry'
              label='$5,000,000'
              path='/house-detail'
            />
            <CardItem
              src='https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='$5,000,000'
              path='/house-detail'
            />
            <CardItem
              src='https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='$4,950,000'
              path='/house-detail'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='$4,950,000'
              path='/house-detail'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.decoist.com/wp-content/uploads/2021/06/Modular-black-house-with-balcony-49706.jpg'
              text='Lorem Ipsum is simply dummy text of industry.'
              label='$5,000,000'
              path='/house-detail'
            />
            <CardItem
              src='https://media.gettyimages.com/photos/modern-custom-suburban-home-exterior-picture-id1255835529?s=612x612'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='$5,000,000'
              path='/house-detail'
            />
            <CardItem
              src='https://cdn.houseplansservices.com/product/6ek8jns2uvt3p24kbigoctc4ih/w800x533.jpg?v=13'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='Adventure'
              path='/house-detail'
            />
            <CardItem
              src='https://i0.wp.com/homesofheights.com/wp-content/uploads/2020/03/MODERN-HOUSE-2.jpg?fit=1240%2C800&ssl=1'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              label='$4,950,000'
              path='/house-detail'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;