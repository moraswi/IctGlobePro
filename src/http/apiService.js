import httpService from "./httpService";

const apiService = {

    fatchData(){
        return httpService.get('posts');
    }

}

export default apiService;