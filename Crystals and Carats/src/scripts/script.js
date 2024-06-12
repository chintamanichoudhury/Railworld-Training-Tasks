document.addEventListener('DOMContentLoaded',()=>{
    // admin and user login btn container
    const admin_user_outer=document.querySelector('.admin_user_login_outer');
    // close btn of admin user login btn container
    const admin_user_close=document.querySelector('.admin_login_close');
    // user login btn of admin user login container
    const admin_user_user_login_btn=document.querySelector('.user_login_btn');
    // login button of navbar
    const nav_login_btn=document.querySelector('.signin-link');

    // signup container
    const signup_container=document.querySelector('.signup-outer');
    // close btn of signup container
    const signup_close=document.querySelector('.close-icon');
    // signup btn of signup container
    const signup_btn=document.querySelector('.signup-btn');
    // login of signup container
    const loginone=document.querySelector('.signup-login');
    // login of signup container
    const logintwo=document.querySelector('.login2');
    // emai verify btn of signup container
    const emailverify=document.querySelector('.email-btn');
    // mobile verify btn of signup container
    const mobileverify=document.querySelector('.mobile-btn');
    
    // login container
    const login_container=document.querySelector('.login-outer');
    // close btn of login container
    const login_close=document.querySelector('.login-close-icon');
    // signup of login container
    const signupone=document.querySelector('.login-signup');
    // signup of login container
    const signuptwo=document.querySelector('.signinsignup');
    // loginwithgoogle  btn of login container
    const loginwithgoogle=document.querySelector('.logingoogle-btn');
    // loginbtn of login container
    const login=document.querySelector('.login-btn');
    // forget password of login container
    const forgetPassword=document.querySelector('.forget-password-link');
    // forget password container
    const forgetPassword_container=document.querySelector('.forget-password-outer');
    // close btn of forget password container
    const forget_close=document.querySelector('.forget-close-icon');
    // login of forget password container
    const loginOfForget=document.querySelector('.login-from-forget');
    // reset password btn of forget password container
    const resetOfForget=document.querySelector('.reset-btn'); 
    // otp container   
    const otp_container=document.querySelector('.otp-outer');    
    // close btn of forget password container
    const otp_close=document.querySelector('.otp-close-icon');
    // login of forget password container
    const loginOfOtp=document.querySelector('.back-login');
    // continue of otp container
    const continueOfOtp=document.querySelector('.continue-btn');
    // resend otp of otp container
    const resendOfOtp=document.querySelector('.resend-otp');
    // reset container
    const reset_container=document.querySelector('.reset-outer');
    // close btn of reset container
    const reset_close=document.querySelector('.reset-close-icon');
    // login of reset container
    const loginOfReset=document.querySelector('.reset-back-login');
    // continue of reset container
    const continueOfReset=document.querySelector('.reset-continue-btn');
    // resend otp of reset container
    const resendOfReset=document.querySelector('.resend');
    //admin signup container
    const admin_signup_container=document.querySelector('.admin-signup-outer');
    //admin login container
    const admin_login_container=document.querySelector('.admin-login-outer');
    // admin login btn of admin user login container
    const admin_user_admin_login_btn=document.querySelector('.admin_login_btn');
    //admin signup button of admin login container 
    const signupbtnOfAdminlogin=document.querySelector('.adminlogin-signup');
    //admin login button of admin signup container 
    const loginbtnOfAdminsignup=document.querySelector('.admin-login');
    //signup btn of admin signup container 
    const signupbtnOfadminSignup=document.querySelector('.admin-signup-btn');
    //email verify btn of admin signup container 
    const emailverifyOfadminSignup=document.querySelector('.admin-email-verify');
    //mobile verify btn of admin signup container 
    const mobileverifyOfadminSignup=document.querySelector('.admin-mobile-verify');
    // close btn of admin signup container
    const admin_signup_close=document.querySelector('.admin-signup-close');
    // close btn of admin login container
    const admin_login_close=document.querySelector('.admin-login-close');




    // login btn click of nav bar
    nav_login_btn.addEventListener('click',()=>{
        admin_user_outer.style.display='block';
    })
    // user login button click of admin user login container
    admin_user_user_login_btn.addEventListener('click',(e)=>{
        e.preventDefault();
        admin_user_outer.style.display='none';
        login_container.style.display='block';
    })
    // admin login button click of admin user login container
    admin_user_admin_login_btn.addEventListener('click',(e)=>{
        e.preventDefault();
        admin_user_outer.style.display='none';
        admin_login_container.style.display='block';
    })
    // close btn click of admin user login container
    admin_user_close.addEventListener('click',()=>{
        admin_user_outer.style.display='none';
    })
    // automatically admin user login container will load
    setTimeout(()=>{
        admin_user_outer.style.display='block';
    },5000);

    // close btn click of signup container
    signup_close.addEventListener('click',()=>{
        signup_container.style.display='none';
    })

    // email verify btn click of signup container
    emailverify.addEventListener('click',(e)=>{
        e.preventDefault();
    })

    // mobile verify btn click of signup container
    mobileverify.addEventListener('click',(e)=>{
        e.preventDefault();
    })

    // signup btn click of signup container
    signup_btn.addEventListener('click',(e)=>{
        e.preventDefault();
        signup_container.style.display='none';
        login_container.style.display='block';
    })

    // login click of signup container
    loginone.addEventListener('click',()=>{
        signup_container.style.display='none';
        login_container.style.display='block';
    })
    // login click of signup container
    logintwo.addEventListener('click',()=>{
        signup_container.style.display='none';
        login_container.style.display='block';
    })

    // close btn click of login container
    login_close.addEventListener('click',()=>{
        login_container.style.display='none';
    })
    // signup click of login container
    signupone.addEventListener('click',()=>{
        login_container.style.display='none';
        signup_container.style.display='block';
    })

    //loginwithgoogle btn click of login container
    loginwithgoogle.addEventListener('click',(e)=>{
        e.preventDefault();
        login_container.style.display='none';
        location.href='home.html';
    })
    //loginbtn click of login container
    login.addEventListener('click',(e)=>{
        e.preventDefault();
        login_container.style.display='none';
        location.href='home.html';
    })
    // signup click of login container
    signuptwo.addEventListener('click',()=>{
        login_container.style.display='none';
        signup_container.style.display='block';
    })
    // forget password click of login container
    forgetPassword.addEventListener('click',()=>{
        login_container.style.display='none';
        forgetPassword_container.style.display='block';
    })
    // close btn click of forget password container
    forget_close.addEventListener('click',()=>{
        forgetPassword_container.style.display='none';
    })
    // login click of forget password container
    loginOfForget.addEventListener('click',()=>{
        forgetPassword_container.style.display='none';
        login_container.style.display='block';
    })
    // reset password click of forget password container
    resetOfForget.addEventListener('click',(e)=>{
        e.preventDefault();
        forgetPassword_container.style.display='none';
        otp_container.style.display='block';
    })
    // close btn click of otp container
    otp_close.addEventListener('click',()=>{
        otp_container.style.display='none';
    })
    // login click of otp container
    loginOfOtp.addEventListener('click',()=>{
        otp_container.style.display='none';
        login_container.style.display='block';
    })
    // continue click of otp container
    continueOfOtp.addEventListener('click',(e)=>{
        e.preventDefault();
        otp_container.style.display='none';
        reset_container.style.display='block';
    })
    // resend otp of otp container
    resendOfOtp.addEventListener('click',()=>{
        alert("Otp Sent Successfully");
    })
    // close btn click of reset container
    reset_close.addEventListener('click',()=>{
        reset_container.style.display='none';
    })
    // login click of reset container
    loginOfReset.addEventListener('click',()=>{
        reset_container.style.display='none';
        login_container.style.display='block';
    })
    // continue click of reset container
    continueOfReset.addEventListener('click',(e)=>{
        e.preventDefault();
        reset_container.style.display='none';
        login_container.style.display='block';
    })
    // resend otp of otp container
    resendOfReset.addEventListener('click',()=>{
        alert("Otp Sent Successfully");
    })
    // signup click of admin login container
    signupbtnOfAdminlogin.addEventListener('click',()=>{
        admin_login_container.style.display='none';
        admin_signup_container.style.display='block';
    })
    // login click of admin signup container
    loginbtnOfAdminsignup.addEventListener('click',()=>{
        admin_signup_container.style.display='none';
        admin_login_container.style.display='block';
    })
    // signup btn click of admin signup container
    signupbtnOfadminSignup.addEventListener('click',(e)=>{
        e.preventDefault();
        admin_signup_container.style.display='none';
        admin_login_container.style.display='block';
    })
    // close btn click of admin signup container
    admin_signup_close.addEventListener('click',()=>{
        admin_signup_container.style.display='none';
    })
     // email verify btn click of admin signup container
     emailverifyOfadminSignup.addEventListener('click',(e)=>{
        e.preventDefault();
    })
    // mobile verify btn click of admin signup container
    mobileverifyOfadminSignup.addEventListener('click',(e)=>{
        e.preventDefault();
    })
    // close btn click of admin login container
    admin_login_close.addEventListener('click',()=>{
        admin_login_container.style.display='none';
    })

})