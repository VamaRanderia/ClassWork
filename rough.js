function allDigits(a){
    for(let i=0;i<a.length;i++){
        if(a[i]<'0' || a[i]>'9'){
            return false;
        }
    }
    return true;
}

function uppercase(a) {
  for(let i=0;i<a.length;i++){
    if (a[i]>='A' && a[i]<='Z'){
        return true;
    }
  }
  return false;
}

function lowercase(a) {
  for(let i=0;i<a.length;i++){
    if (a[i]>='a' && a[i]<='z'){
        return true;
    }
  }
  return false;
}

function specialChar(a) {
  for (let i=0;i<a.length;i++) {
    const ch=a[i];
    if (!((ch>='A' && ch<='Z') || (ch>='a' && ch<='z') || (ch>='0' && ch<='9'))) {
      return true;
    }
  }
  return false;
}

function signup(){
    const name=document.getElementById("username").value.trim()
    const email=document.getElementById("useremail").value.trim()
    const phone=document.getElementById("phone").value.trim()
    const password=document.getElementById("password").value.trim()
    const confirm=document.getElementById("confirm").value.trim()

    if (!name || !email || !phone || !password) {
        alert("All fields are required.");
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Email format not correct.");
        return;
    }

    if (phone.length !== 10 || !allDigits(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }
    if (!uppercase(password)) {
        alert("Password must contain at least 1 uppercase letter.");
        return;
    }
    if (!lowercase(password)) {
        alert("Password must contain at least 1 lowercase letter.");
        return;
    }
    if (!specialChar(password)) {
        alert("Password must contain at least 1 special character.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    alert("Signup successful ✅");
}