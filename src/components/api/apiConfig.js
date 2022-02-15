import apiInstance from './apiInstance.js';

export default {
    name: 'apiConfig',
    methods: {
        createInterceptors() {
            apiInstance.interceptors.request.use((config) => {
                const newConfig = config;

                if (newConfig.url.indexOf('?') != -1) {
                    newConfig.url += '&';
                } else {
                    newConfig.url += '?';
                }

                //newConfig.url += `key=${this.$store.state.authToken}`;
                newConfig.url += `key=${window.localStorage.authToken}`;

                return newConfig;
            });
        }
    }
}