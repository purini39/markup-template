import Vue from 'vue';

const helloVue = new Vue({
	el: '#app',
	data() {
		return {
			msg: 'hello Vue',
		};
	},
});

export default helloVue;
