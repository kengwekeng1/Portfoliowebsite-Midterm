// =============================================================================
// MDT312 Assignment 6 login.js
// Modernized: ES6 (const/let), event.preventDefault(), and for loop
// =============================================================================

window.onload = loginLoad;

function loginLoad() {
    const form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(event) {
    // 1. ป้องกันหน้าเว็บรีเฟรชเอง
    event.preventDefault();

    // 2. ดึงข้อมูลจาก localStorage มาใส่ใน Array
    const users = [{ username: "admin", password: "123456" }];
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // ถ้ามีข้อมูลใน localStorage ให้นำมาเก็บใส่ Array of Objects
    if (storedUsername && storedPassword) {
        users.push({ username: storedUsername, password: storedPassword });
    }

    // 3. ตรวจสอบว่ามีข้อมูลผู้ใช้ในระบบหรือไม่
    if (users.length === 0) {
        alert("ไม่พบข้อมูลผู้ใช้ในระบบ กรุณาลงทะเบียนที่หน้า Register ก่อน");
        window.location.href = "register.html";
        return false;
    }

    // 4. ดึงค่าที่ผู้ใช้กรอกในฟอร์ม Login ปัจจุบัน
    const usernameInput = document.forms["myLogin"]["username"].value;
    const passwordInput = document.forms["myLogin"]["password"].value;

    // 5. ใช้ for loop วนหาใน Array
    let isLoginSuccess = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === usernameInput && users[i].password === passwordInput) {
            isLoginSuccess = true;
            break;
        }
    }

    // 6. ตรวจสอบผลลัพธ์
    if (isLoginSuccess) {
        alert("Login success!");
        return true;
    } else {
        alert("Username หรือ password ไม่ถูกต้อง");
        return false;
    }
}