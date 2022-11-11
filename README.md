# Project5-MongoDB-passport-Oauth
LoginSystem

練習WilsonRen老師的Udemy課程
"2022網頁開發全攻略(HTML, CSS, JavaScript, React, SQL, Node, more)"
https://www.udemy.com/course/html5-css3-z/
其中的Project5-MongoDB-passport-Oauth
使用的登入方式為cookie而非jwt方式


功能介紹:
初始頁面(Home)
上方有基本的導覽列,在未登入之前只可訪問Home,Login,Sign up
![1668170454878](https://user-images.githubusercontent.com/67402409/201344136-e6f7bd3d-76dc-4d78-aa41-cd20ee8d4a5f.jpg)

登入頁面(Login)
提供Oauth與Local兩種方式登入
![1668170491609](https://user-images.githubusercontent.com/67402409/201344502-1f65741c-3b3c-4e5d-a5bf-52d85d32638f.jpg)
![1668170551796](https://user-images.githubusercontent.com/67402409/201344519-23780b49-8967-487e-aab6-1d4888724f23.jpg)

登入後取得授權,可以訪問Home,Profile,NewPost等頁面
登入後自動訪問(redirect)到Profile頁面
如果選擇OAuth 登入後Profile頁面有個人頭像
![1668170574289](https://user-images.githubusercontent.com/67402409/201344821-2ce35dc9-4fe7-4f4f-b670-18b7c8aaa39b.jpg)
Local登入則無
![1668170803296](https://user-images.githubusercontent.com/67402409/201344873-5990b44d-5834-4a3c-9282-1a452982cbfd.jpg)

NewPost頁面可Post內容
![1668170591676](https://user-images.githubusercontent.com/67402409/201344993-7b835fba-5d80-4f69-afa3-5c1fb451602c.jpg)
![1668170710695](https://user-images.githubusercontent.com/67402409/201344980-8cf5f524-7fdf-4d50-a208-941b53ece056.jpg)

Post後的內容自動顯示在Profile頁面中
![1668170720772](https://user-images.githubusercontent.com/67402409/201345074-c0e5132a-d9c0-4f58-ae47-5d563a64abd1.jpg)

Logout後自動重新導向主頁面
![1668170454878](https://user-images.githubusercontent.com/67402409/201345116-172271ee-5632-4cf5-88ec-100532e84586.jpg)
