
<template>
    <div>
        <div>
            <!-- <p v-for="item in dataShow">
				{{item.Address}}--{{item.Character}}
			</p> -->
			<p v-for="(item,index) in listShow" @click="toDetail(item.id)">
				{{item.name}}-----------{{item.education}}------{{item.graduationschool}}--------
                <span @click.stop="deleteUser(item.id, index)">删除</span>
			</p>
        </div>
    </div>
</template>
<script>
// import api from "../axios/api.js";
export default {
    name: "Mock",
    data() {
        return {
			dataShow: [],
			listShow: []
        };
    },
    created() {
		// this.getdata();
		this.getlist();
    },
    methods: {
        // getdata: function() {
        // 	alert('111');
        //     api.mockdata("/data/index").then(res => {
        //         console.log(res);
        //         this.dataShow = res.data;
        //     });
        // }
        // getdata() {
        //     this.$fetch("/data/index").then(res => {
        //         console.log(res);
        //         this.dataShow = res;
        //         console.log(this.dataShow);
        //     });
		// },
		getlist() {
			this.$fetchGet("/getlist").then(res => {
				console.log(res);
				this.listShow = res;
				
			})
        },
        toDetail (row) {
            console.log(row); 
            this.$router.push({
                path: '/bind',
                query: {
                    id: row
                }
            })
        },
        deleteUser (row, index) {
            this.$fetch("/deleteuser", row).then(res => {
                console.log(res);
                if(res.data == '用户删除成功') {
                    this.listShow.splice(index, 1);
                }
            })
        }
    }
};
</script>