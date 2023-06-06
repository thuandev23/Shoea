import {firebase} from '@react-native-firebase/database';

const dataSlide = [
  {
    id: 1,
    percent: '10',
    title: 'Today Special !',
    txt: 'Get discount for every order, only valid, for today',
    image:
      'https://wpblog.zyro.com/cdn-cgi/image/w=700,q=85/wp-content/uploads/2020/08/gia%CC%80y-nike-tre%CC%82n-ne%CC%82%CC%80n-ma%CC%80u-do%CC%89.jpg',
  },
  {
    id: 2,
    percent: '35',
    title: 'Black Friday !',
    txt: 'Get discount for every order, only valid, for today',
    image:
      'https://main-source.co.uk/media/mageplaza/blog/post/9/0/908366_700_lead_des.jpg',
  },
  {
    id: 3,
    percent: '20',
    title: 'Weeken Deal !',
    txt: 'Get discount for every order, only valid, for today',
    image:
      'https://ae01.alicdn.com/kf/Scd35f547f4734a9b80ee8f19dd0d25b99/Sneakers-Nike-Air-Force-1-LV8-utility-black-demisezon-male.jpg_Q90.jpg_.webp',
  },
  {
    id: 4,
    percent: '15',
    title: 'New Arrivals !',
    txt: 'Get discount for every order, only valid, for today',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ogIEBWp9xT3WgBVOEqmOaMaYtgzsp-1yON3oTVz7iVJt2z0U',
  },
  {
    id: 5,
    percent: '50',
    title: 'Max Discount !',
    txt: 'Get discount for every order, only valid, for today',
    image:
      'https://www.wizville.com/hubfs/Customer%20feedback%20why%20fashion%20brands%20can%20no%20longer%20afford%20to%20ignore%20it.jpg',
  },
];
// // Assuming you have a Firestore collection called "slides"
// const slidesCollection = firebase.firestore().collection('discounts');

// dataSlide.forEach(slide => {
//   // Generate a new document reference
//   const newSlideRef = slidesCollection.doc();

//   // Set the data for the new slide document
//   newSlideRef
//     .set(slide)
//     .then(() => {
//       console.log('Slide added to Firestore:', slide);
//     })
//     .catch(error => {
//       console.error('Error adding slide to Firestore:', error);
//     });
// });
export default dataSlide;
