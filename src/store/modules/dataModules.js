import apiService from "@/http/apiService";

const dataModules = {

    state:{
        data: null,
    },

    mutations:{
        setData(state,data){
            state.data = data;
        }
    },

    actions:{
        async fatchDataReq({commit}){
            try{

                const response = await apiService.fatchData();
                console.log("response", response.data);
                commit('setData',response.data);

            }catch(error){
                console.log("fatchData",error)
            }
        }
    },

    getters:{
        getData(state){
            return state.data
        }
    }

}

export default dataModules
