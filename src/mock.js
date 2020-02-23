// import Mock from 'mockjs' // 引入mockjs

// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

// let data = [] // 用于接受生成数据的数组
// let size = [
//   '300x250', '250x250', '240x400', '336x280', 
//   '180x150', '720x300', '468x60', '234x60', 
//   '88x31', '120x90', '120x60', '120x240', 
//   '125x125', '728x90', '160x600', '120x600', 
//   '300x600'
// ] // 定义随机值
// for(let i = 0; i < 10; i ++) { // 可自定义生成的个数
//   let template = {
//     'Boolean': Random.boolean, // 可以生成基本数据类型
//     'Natural': Random.natural(1, 10), // 生成1到100之间自然数
//     'Integer': Random.integer(1, 100), // 生成1到100之间的整数
//     'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
//     'Character': Random.character(), // 生成随机字符串,可加参数定义规则
//     'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
//     'Range': Random.range(0, 10, 2), // 生成一个随机数组
//     'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
//     'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
//     'Color': Random.color(), // 生成一个颜色随机值
//     'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
//     'Name': Random.name(), // 生成姓名
//     'Url': Random.url(), // 生成web地址
//     'Address': Random.province() // 生成地址
//   }
//   data.push(template)
// }

// Mock.mock('/data/index', 'post', data) 
import Mock from 'mockjs'

const Random = Mock.Random
// 设置全局延时，没有延时的话，有时候会检测不到数据变化
Mock.setup({
	timeout: '300-600'
})
// 创建一个数组用来接收模拟的数据
const mocklist = []
const count = 5;

for (let i = 0; i < count; i++) {
	mocklist.push(Mock.mock({
		id: '@id',
		name: '@cname',
		'phone|1': /^1[0-9]{10}$/,
		email: '@email',
		'education|1': ['本科', '大专', '硕士', '博士', '中专'],
		'graduationschool|1': ['西南财经', '北京交通大学', '重庆工商大学', '清华大学', '西南大学', '上海复旦大学'],
		'profession|1': ['教授', '律师', '医生', '公务员', '大学老师', '警察', '白领'],
		profile: '@cparagraph'
	}))
}

// 获取用户信息列表
function getList() {
	// 若 localStorage 没有数据，则将 Mock 的数据存入
	if (!localStorage.getItem('userlist')) {
		localStorage.setItem('userlist', JSON.stringify(mocklist))
	}
	// 每次获取数据时，再从 localStorage 中拉取数据
	var userlist = JSON.parse(localStorage.getItem('userlist'))
	return userlist
}

// 获取单个用户信息
function getUser(options) {
	// 先从 localStorage 中拉取数据
	var userlist = JSON.parse(localStorage.getItem('userlist'))
	// 遍历数组，返回id 与传来 id 相当的一个对象
	for (let index in userlist) {
		if (userlist[index].id === options.body) {
			var user = userlist[index]
			return user
		}
	}
}

// 删除用户信息
function deleteUser(options) {
	// 先从 localStorage 中拉取数据
	var userlist = JSON.parse(localStorage.getItem('userlist'))
	// 根据传递的 id 删除 用户
	for (let index in userlist) {
		if (userlist[index].id === options.body) {
			userlist.splice(index, 1)
			localStorage.setItem('userlist', JSON.stringify(userlist))
		}
	}
	return {
		data: '用户删除成功'
	}
}

// 添加用户信息
function addUser(options) {
	// 先从 localStorage 中拉取数据
	var userlist = JSON.parse(localStorage.getItem('userlist'))
	// 获取传入用户信息对象，是一个字符串，需要转化为对象
	var user = JSON.parse(options.body)
	// 使用 mock 随机生成一个 id
	user.id = Random.id()
	// 将 user 插入到 userlist 中
	userlist.unshift(user)
	// 重新将 userlist 存入 localStorage 中
	localStorage.setItem('userlist', JSON.stringify(userlist))
	return {
		data: '用户添加成功'
	}
}

// 更新用户信息
function updateUser(options) {
	// 先从 localStorage 中拉取数据
	var userlist = JSON.parse(localStorage.getItem('userlist'))
	var user = JSON.parse(options.body)
	// 遍历 userlist 根据传入对象的 id 更新用户信息
	for (let index in userlist) {

		if (userlist[index].id === user.id) {
			userlist[index] = user
		}
	}
	localStorage.setItem('userlist', JSON.stringify(userlist))
	return {
		data: '用户更新成功'
	}
}

// 制作各个接口
Mock.mock('/getlist', 'get', getList)
Mock.mock('/getuser', 'post', getUser)
Mock.mock('/deleteuser', 'post', deleteUser)
Mock.mock('/adduser', 'post', addUser)
Mock.mock('/updateuser', 'post', updateUser)

// 最后将 Mock 导出
export default Mock