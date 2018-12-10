<template id="post-list">
    <div class="row">
        <div class="pull-right">
            <router-link to="" class="btn btn-xs btn-primary" >
                <span class="glyphicon glyphicon-plus"></span>
                Add new Post
            </router-link>
            <br><br>
        </div>
        <div>
            <table class="table table-bodered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Post title</th>
                        <th>Post body</th>
                        <th class="col-md-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, index) in filteredPost">
                        <td>{{ index +1 }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <td>
                            <router-link class="btn btn-info btn-xs" v-bind:to="{name: 'Viewpost', params: {id: post.id}}">Show</router-link>
                            <router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'Editpost', params: {id: post.id}}">Edit</router-link>
                            <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'Deletepost', params: {id: post.id}}">DeletePost</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default{
        data: function(){
            return {
                posts: ''
                }
        },
        created: function(){
            //let uri = 'http://localhost/la-vu/public/posts';
            this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(response){
                // this.posts = response.data;
                console.log(response.data)
            });
        },
        computed: {
            filteredPost: function(){
                if(this.posts.length){
                    return this.posts;
                }
            }
        }
    }
</script>
