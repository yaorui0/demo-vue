<template>
    <div>
        <el-container>
            <el-header class="padding" style="height: 40px;">
                <el-row>
                    <el-col :span="3">
                        <div class="header-font">喵，欢迎来天猫</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font hover">请登录</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font hover">免费注册</div>
                    </el-col>
                    <el-col :span="2" :offset="3">
                        <div class="header-font">
                            我的淘宝
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font hover">购物车</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font">
                            收藏夹
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font">手机版</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font hover">淘宝网</div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font">
                            商家支持
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div class="header-font">
                            网站导航
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
        <PublicA></PublicA>
    </div>
</template>
<style lang="scss" scoped>
.padding {
    padding: 0 30px;
    background-color: #f2f2f2;
    line-height: 40px;
}
element.style.padding {
    height: 40px;
}
.hover:hover {
    color: red;
    cursor: pointer;
}
.header-font {
    font-size: 14px;
    color: #999999;
}



</style>
<script>
import PublicA from '@/components/PublicA';
export default {
    name: "list",
    components: {
        PublicA
    },
    data() {
        return {};
    }
};
</script>