import axios from 'axios';

export default {
  getPictures: function(name){
    return axios.get('https://pixabay.com/api/?key=5207088-f6eeef2e4b8e5be697c01704f&q='+name+'&image_type=photo&pretty=true');
  }
};


// 'https://pixabay.com/api/?key=5207088-f6eeef2e4b8e5be697c01704f&q='+name+'&image_type=photo&pretty=true'
