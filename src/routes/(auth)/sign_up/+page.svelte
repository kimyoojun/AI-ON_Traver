<script lang="ts">
    import { goto } from "$app/navigation";
    import { supabase } from "$lib/supabaseClient";
    import {uuid} from "@supabase/supabase-js/dist/main/lib/helpers";
    
    let email: string
    let ps: string
    let name: string
    let age: number
    let number: number
    let userId: string


    const page ={
        a:1,
        b:2,
    }

    const singUpBtn = async () =>{
        if (page.a){
            const{error, data}= await supabase.auth.signUp
            ({
                email: email,
                password: ps
            })
            if (error) return console.error(error)
            
            userId = data?.user?.id ??''

            console.log(userId)

            page.a += 1
        } else if (page.b){
            const{error: usersError, data:usersData}  = await supabase
                .from('users')
                .insert({
                    id:userId,
                    age:age,
                    number:number,
                    name:name
                })
            if (usersError) return console.error(usersError)
        }
        

        await goto('/sign_in')
    }

</script>
<div id = main>
    <div id= top_bar>
        <h1> 
            <a href="/" id = title_a> 려유 </a>
        </h1>
    </div>

    <div id =body>
        <div id = login_box >
           {#if page.a}
                <h1 id = logo_text> 려유</h1>
                <h3 id = login_text> 회원가입 </h3>
                <p id = welcome_text>"려유"의 세계에 오신걸 환영합니다.</p>
                <input placeholder="이메일을 입력하시오."class = "login_input" bind:value={email}/>
                <input placeholder="비밀번호"class = "login_input" bind:value={ps} type="password"/>
                
            
                {:else if page.b}
                <h1 id = logo_text> 려유</h1>
                <h3 id = login_text> 회원가입 </h3>
                <p id = welcome_text>"려유"의 세계에 오신걸 환영합니다.</p>
                <input placeholder="이름"class = "login_input" bind:value={name}/>
                <input placeholder="전화 번호"class = "login_input" bind:value={number}/>
                <input placeholder="나이"class = "login_input" bind:value={age}/>

            {/if}
            <button id = button_ep on:click={singUpBtn}>로그인</button> 
                    {#if page.a}
                        다음
                    {:else if page.b}
                        회원가입
                    {/if}
        </div>
    </div>
</div>

<style>
     #login_box {
    width: 417px;   
    height: 487px;
    align-items:center;
    justify-content:center;
    display: flex;
    border: 3px solid beige;
    flex-direction: column;
    border-radius: 40px;
    background-color: bisque;
    }

    #body{
        width:100%;
        height:100%;
        display:flex;
        justify-content: center;
    }

    #main{
        width:100%;
        height:100%;
    }

    #top_bar{
        width: 1380px;
        height: 46px;
        border-bottom: 2px solid gray;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    #iogin_text{
        width:100;
        display:flex;
        align-items:center;
        justify-content:center
    }
    #welcome_text{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .login_input{
        padding: right 16px;
        padding: left 16px;
        padding: top 12px;
        padding:bottom 12px;
        border-radius: 12px;
        width:200px;
        height:40px;
        margin-bottom: 12px;
    }
    #button_ep{
        width:10;
        height: 40px;
        border-radius: 10px;
        border: 3px solid cornsilk;
    }
    #title_a{
        text-decoration-line: none;
        color: limegreen;
    }
    #logo_text{
        margin:0px;
        position:absolute;
        top: 170px;
    }

</style>