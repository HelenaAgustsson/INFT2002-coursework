import axios from 'axios';

axios.defaults.baseURL = 'https://helenaagustsson.github.io/uni-data/data';

class UniService {
    
  
    /**
     * Get all tasks.
     */
    getAll() {
      return axios.get('/universities.json').then((response) => response.data);
    }
  }
  
  const uniService = new UniService();
  export default uniService;