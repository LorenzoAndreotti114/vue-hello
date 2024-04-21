const {createApp} = Vue;

createApp ({
    data() {
        return {
            message: "Ciao Mondo",

            image: "./img/test1.jpg"
        }
    }
}).mount("#app")