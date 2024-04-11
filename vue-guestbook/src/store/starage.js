import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            //apiBaseUrl: "http://localhost:9000",
            apiBaseUrl: "http://13.209.6.47:9000"
        };
    },
    mutations: {
        
    },
    plugins: [
    ]
});
