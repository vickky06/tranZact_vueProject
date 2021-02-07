import vue from "vue";
import vuex from "vuex";
import axios from "axios";
const baseURL = "https://api.coinranking.com/v1/public/coins/?limit=100";
import Vue from 'vue';

Vue.use(vuex,axios);

export default new vuex.Store({
    state:{
        coins:[]
    },
    actions:{
        loadPosts ({commit}){
            // console.log("Posts is being loaded");
            axios.get(baseURL)
                .then(res=>{
                   
                    if (res.status == 200) {
                        let data = res.data;
                        if (data.status == "success") {
                          data = data.data;
                        
                          commit('SET_POSTS',data.coins)
                        //   this.coins = data.coins;
                        } else {
                        //   this.coins = [{}];
                        commit('SET_POSTS',[])
                        }
                      } else {
                        console.log("res received with no scucess", res.status);
                        commit('SET_POSTS',[])
                        // this.coins = [{}];
                      }
                      // this.todos = res.data
                    // } 
                    // let post = res.data
                    // commit('SET_POSTS',post)
                })
                .catch(e=>{
                    console.log(e,"Error from api call")
                })
        }    
    },
    mutations:{
        SET_POSTS (state, data){
            state.coins = data
        }
    }

})
