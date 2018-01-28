<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                
                <form @submit.prevent="addNotebook">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" id="" placeholder="Name of notebook" v-model="notebookData.name">
                        <span class="text-danger">{{nameErr? nameErr[0]:""}} </span>
                       
                    </div>

                    <div class="form-group">
                        <label for="">Body</label>
                        <input type="text" class="form-control" id="" placeholder="Input field" v-model="notebookData.body">
                        <span class="text-danger">{{ bodyErr? bodyErr[0]:"" }}</span>

                    </div>
                
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            notebookData:{ 
                name:'',
                body:''
            },

            nameErr: "",
            bodyErr: "",

            errors:{}

            }
           
        },
        methods:{
            addNotebook(){
                axios.post('/notebook',this.notebookData)
                .then(response=>{

                    //console.log(response)
                     this.notebookData="";
                    this.errors="";
                    this.$router.push('/');
                })
                .catch(error =>{
                    //console.log(error.response);
                    this.errors = error.response.data;
                    this.nameErr =this.errors.errors.name;
                    this.bodyErr =this.errors.errors.body;
                   
                    
                })
                
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
