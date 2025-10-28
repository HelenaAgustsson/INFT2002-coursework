import axios from 'axios';

axios.defaults.baseURL = 'https://helenaagustsson.github.io/uni-data/data';

class StudentService {
    /**
     * Get all students.
     */
    getAll() {
      return axios.get('/students.json').then((response) => response.data);
    }
    
  }
  
  const studentService = new StudentService();
  export default studentService;