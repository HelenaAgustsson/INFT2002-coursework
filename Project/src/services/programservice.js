import axios from 'axios';

axios.defaults.baseURL = 'https://helenaagustsson.github.io/uni-data/data';

class ProgramService {
    
  
    /**
     * Get all tasks.
     */
    getAll() {
      return axios.get('/programs.json').then((response) => response.data);
    }
  }
  
  const programService = new ProgramService();
  export default programService;