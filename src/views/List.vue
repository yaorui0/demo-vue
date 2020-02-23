<template>
    <div>
        <div class="list" v-for="item in arr">
            <div class="main">
                <div class="content">{{item.tit}}</div>
                <div class="right">
                    <img :src="item.img" alt />
                </div>
            </div>
            <div class="bot">
                <span>{{item.wz}}</span>
                <span>{{item.pl}}</span>
            </div>
        </div>
        <div class="fx">
            <div class="qf" v-for="item in items">
                <img :src="item.img" alt />
                <span>{{item.text}}</span>
            </div>
        </div>
        <public :childArr='arr' :twoArr="items" @consol="getName" @ss="getContent"></public>
        <p>{{word}}</p>
        <button @click="fetchData">
            請求數據點我點我
        </button>
        <div ref="ele">
            这是元素
        </div>
    </div>
</template>
<style lang="scss" scoped>
.list {
    padding: 10px;
    border-bottom: 1px solid #f2f2f2;
}
.main {
    display: flex;
    justify-content: space-between;
}
.content {
    text-align: left;
    line-height: 1.8em;
}
.bot {
    display: flex;
    justify-content: flex-start;
    font-size: 12px;
}
.bot span:first-child {
    margin-right: 10px;
}
.right {
    height: 60px;
    width: 60px;
    img {
        display: inline-block;
        width: 60px;
        height: 60px;
    }
}
.fx {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.qf {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 15px;
}
.qf img {
    height: 15px;
    width: 15px;
    vertical-align: middle;
}
.qf span {
    font-size: 14px;
    margin-left: 5px;
    // margin-bottom: 5px;
}
</style>
<script>
import Public from "@/components/Public";
export default {
    name: "list",
    components: {
        Public
    },
    data() {
        return {
            arr: [
                {
                    tit:
                        "女子连续10天买过期面粉获赔万元!法院:食药领域不存在知假买假",
                    wz: "照理说事",
                    pl: "1984评论",
                    // img: "../assets/images/1.png"
                    // img: "../assets/images/1.png"
                    img: require("../assets/images/1.png")
                },
                {
                    tit:
                        "湖北一药房涉嫌哄抬口罩价格,当地市场监管局发布处罚声明",
                    wz: "环球网",
                    pl: "261评论",
                    // img: "../assets/images/2.png"
                    img: require("../assets/images/2.png")
                },
                {
                    tit:
                        "记者跟踪拍摄：四通搬家公司搬运到红十字会的每一辆车的捐赠物品",
                    wz: "四通搬家公司",
                    pl: "96评论",
                    // img: "../assets/images/3.png"
                    img: require("../assets/images/3.png")
                }
            ],
            items: [
                {
                    img: require("../assets/images/dz.png"),
                    text: "16828"
                },
                {
                    img: require("../assets/images/ljt.png"),
                    text: "不喜歡"
                },
                {
                    img: require("../assets/images/wx.png"),
                    text: "微信"
                },
                {
                    img: require("../assets/images/pyq.png"),
                    text: "朋友圈"
                }
            ],
            word: '这是Word'
        };
    },
    methods: {
        getName (e) {
            console.log(e);
        },
        getContent (meg) {
            this.word = meg;
        },
        fetchData() {
            this.$fetch('/data/index').then(res=>{
				console.log(res)
			})
        }
    },
    created(){
        console.log(this.$refs.ele,this.word)
    },
    mounted(){
        console.log(this.$refs.ele,this.word)
    }
};
</script>