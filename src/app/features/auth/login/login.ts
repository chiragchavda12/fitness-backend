import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'

import { AuthService } from '../../../core/services/auth'

@Component({
selector:'app-login',
standalone:true,
imports:[CommonModule,FormsModule,RouterModule],
templateUrl:'./login.html',
styleUrls:['./login.css']
})

export class LoginComponent{

/* ================= FORM DATA ================= */

email:string=""
password:string=""

loading:boolean=false

constructor(
private authService:AuthService,
private router:Router
){}

/* ================= LOGIN FUNCTION ================= */

login(){

if(!this.email || !this.password){

alert("Please enter email and password")
return

}

this.loading=true

const data={

email:this.email,
password:this.password

}

this.authService.login(data).subscribe({

next:(res:any)=>{

/* SAVE TOKEN */

localStorage.setItem("token",res.token)

/* SAVE USER */

localStorage.setItem("user", JSON.stringify(res.user))

/* SAVE USER ID */

localStorage.setItem("userId", res.user._id)

/* SAVE EXTRA INFO */

localStorage.setItem("email", res.user.email)
localStorage.setItem("name", res.user.name)

alert("Login successful")

this.loading=false

/* REDIRECT */

this.router.navigate(['/dashboard'])

},

error:(err)=>{

alert("Login failed")

console.log(err)

this.loading=false

}

})

}

}