/**
 * Author Justin Mathew.
 */
var dataStorageVue=new Vue({
	  el: '#v-for-object',
	  data: {
	    object: {
	      firstName: 'John',
	      lastName: 'Doe',
	      age: 30
	    },
	    listItems:[
	   	      { email: 'Foo' },
    	      { email: 'Bar' }
	    ]
	  }
	});
var MethodsVue=new Vue({
	el:'#app',
    data:{
    	email:'',
    	passsword:'',
    	items: [
    	      { name: 'Foo' },
    	      { name: 'Bar' }
    	    ]
    },
	methods:{
		onSubmit(){
			let obj={email:this.$data.email};
			dataStorageVue.$data.listItems.push(obj);
		}
	}	
});
