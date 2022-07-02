const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
// sẽ đi vào node modules để tải và lưu vào biến express
const app = express()

const route = require('./routes')//khi gõ tên thư mục thì tự nạp vào index
//express static thi no se hiểu khi gặp path thì ktra thư mục cung cấp 
//qua phương thức static// xử lí file tĩnh
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
console.log(path.join(__dirname,'public'));
//template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
//Sau khi tạo thì express là 1 function thì trả về đã được xây đựng sẵn trong express
const port = 3000
//httplogger
app.use(morgan('combined'))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources/views'));
// console.log(__dirname);
//route
route(app)
// app.get('/home', (req, res) => {
//     //get này là việc định nghĩa route
//     //định nghĩa tuyến đường là dấu /
//     res.render('home');
// })
// //biến req sẽ chứa thông tin mà ứng dụng được gửi lên sv
// //search tuyen đường và tuyến được lọt vào function handler
// //trong function đó thì nhận được request chứa tất cả thông tin liên quan đến yêu cầu gửi đi
// //VD có thể từ req lấy đc pad lấy đc method name lấy được các thông tin liên quan đến req header

// //biến res thì khi sv nhận req sẽ xử lí thì sẽ chọc vào database và trả về res
// //biến res này có thể setup để khi trả về client trả về ntn trả về cái gì
// app.get('/news', (req, res) => {
//   //get này là việc định nghĩa route
//   //định nghĩa tuyến đường là dấu /
//   // console.log(req.query.q);
//   res.render('news');
// })
// app.get('/search', (req, res) => {
//   //get này là việc định nghĩa route
//   //định nghĩa tuyến đường là dấu /
//   // console.log(req.query.q);
//   res.render('search');//res là trả về cho browser
// })
// app.post('/search', (req, res) => {
//   //get này là việc định nghĩa route
//   //định nghĩa tuyến đường là dấu /
//   // console.log(req.body);
//   res.send('');
// })//route dispatch là đọc cái action thì nó thấy đúng nó chạy function handler
//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// để chuột lên thanh enter thì về get