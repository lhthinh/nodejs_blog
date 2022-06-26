const express = require('express') 
// sẽ đi vào node modules để tải và lưu vào biến express
const app = express() 
//Sau khi tạo thì express là 1 function thì trả về đã được xây đựng sẵn trong express
const port = 3000

app.get('/', (req, res) => {
    //get này là việc định nghĩa route
    //định nghĩa tuyến đường là dấu /
  res.send('Hello World!')
})
//127.0.0.1 - localhost
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`)
})