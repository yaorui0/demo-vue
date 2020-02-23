<template>
    <div>
        <div>
            <p>{{str}}</p>
            <p>{{newStr}}</p>
        </div>
        <div>
            <button @click="reduce">-</button>
            <span :class="{classbig:databig}">{{count}}</span>
            <button @click="plus">+</button>
        </div>
        <!-- <div>总价格{{prices}}</div> -->
    </div>
</template>
<style lang="scss">
.classbig {
	font-size: 50px;
}
</style>
<script>
export default {
    name: "com",
    data() {
        return {
			databig: false,
            str: "找中枪---本科---1999",
            count: 10,
            package1: [
                {
                    name: "huawei",
                    price: 4999,
                    count: 2
                },
                {
                    name: "xiaomi",
                    price: 2999,
                    count: 3
                }
            ],
            package2: [
                {
                    name: "Iphone",
                    price: 8999,
                    count: 1
                },
                {
                    name: "samsung",
                    price: 5999,
                    count: 1
                }
			],
			setI: ''
        };
	},
	created () {
		this.setI = setInterval(() => {
			this.count--;
		}, 1000);
	},
    methods: {
        reduce() {
            this.count -= 1;
        },
        plus() {
            this.count += 1;
        }
    },
    computed: {
        newStr() {
            let arr = this.str.split("---");
            return arr[0] + "---" + arr[2];
        },
        prices() {
            let prices = 0;
            // for(let i = 0; i < this.package1.length; i++) {
            // 	prices += this.package1[i].price * this.package1[i].count;
            // }
            // for(let i = 0; i < this.package2.length; i++) {
            // 	prices += this.package2[i].price * this.package2[i].count;
            // }
            return prices;
        }
    },
    watch: {
        count(newValue, value) {
            // console.log(newValue, value);
            if (newValue == 5) {
                // console.log(newValue, value);
				// setTimeout(() => {console.log(newValue)}, 1000);
				clearInterval(this.setI);
				this.databig = true;
            }
        }
    }
};
</script>