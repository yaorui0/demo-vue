<template>
    <div>
        <div>
            <span>姓名：</span>
            <input type="text" v-model="userInfo.name" />
        </div>
        <div>
            <span>身份证：</span>
            <input type="text" v-model="userInfo.id" />
        </div>
        <div>
            <span>邮箱：</span>
            <input required="required" type="text" v-model="userInfo.email" />
        </div>
        <div>
            <span>学历：</span>
            <input required="required" type="text" v-model="userInfo.education" />
        </div>
        <div>
            <span>毕业院校：</span>
            <input required="required" type="text" v-model="userInfo.graduationschool" />
        </div>
        <div>
            <span>电话：</span>
            <input required="required" type="text" v-model="userInfo.phone" />
        </div>
        <div>
            <span>职务：</span>
            <input required="required" type="text" v-model="userInfo.profession" />
        </div>
        <div>
            <span>地址：</span>
            <input required="required" type="text" v-model="userInfo.profile" />
        </div>
        <button @click="upDate" v-if="id.length > 0">更新</button>
        <button @click="submit" v-else>提交</button>
    </div>
</template>
<style lang="scss">
span {
    display: inline-block;
    width: 16%;
    text-align: right;
}
</style>
<script>
export default {
    name: "bind",
    data() {
        return {
            id: "",
            userInfo: {
                name: "",
                id: "",
                email: "",
                education: "",
                graduationschool: "",
                phone: "",
                profession: "",
                profile: ""
            }
        };
    },
    created() {
        // 使用this.$route获取路由数据
        // console.log(this.$route.query);
        if (this.$route.query.id) {
            this.id = this.$route.query.id;
            this.getuser(this.id);
        }
    },
    methods: {
        // 新建用户信息
        submit() {
            console.log(this.userInfo);
            // Mock.mock('/adduser', 'post', addUser)
            this.$fetch("/adduser", this.userInfo).then(res => {
                console.log(res);
            });
        },
        // Mock.mock('/getuser', 'post', getUser)
        // 根据id获取用户信息
        getuser(id) {
            this.$fetch("/getuser", id).then(res => {
                console.log(res);
                this.userInfo = res;
            });
        },
        //更新数据
        upDate() {
            this.$fetch("/updateuser", this.userInfo).then(res => {
                console.log(res);
            });
        }
    }
};
</script>