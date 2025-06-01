<script lang="ts">
    import { goto } from "$app/navigation";
    import { supabase } from "../../../lib/supabaseClient";

    let email: string
    let pw: string

    const sign_in_btn = async () => {
        if (!email || !pw) return alert("이메일이나 비밀번호를 입력해주세요.")

        const {error,data} = await supabase.auth.signInWithPassword
    ({
        email: email,
        password: pw
    })
    if (error) return console.error(error)
    
    await goto("/")

    }
</script>

<div id="main_box">
    <div id="top_bar">
        <h1 id="title_rogo">
            <a href="/" id="title_a">AI:ON</a>
        </h1>
    </div>
    <div id="body">
        <div id="login_box">
            <h1 id="login_text">로그인</h1>
            <p id="welcome_text">개발자들을 위한 AI:ON 멤버 커뮤니티에 오신것을 <br/>환영합니다.</p>
            <input placeholder="이메일 주소" class="login_input" bind:value={email}/>
            <input placeholder="비밀번호" class="login_input" bind:value={pw} type="password"/>
            <button id="login_btn" on:click={sign_in_btn}>로그인</button>
            <div id="login_find">
                <a href="/" class="word">아이디 및 비밀번호 찾기</a>
                |
                <a href="sign_up" class="word">회원가입</a>
            </div>

        </div>
    </div>
</div>

<style>
    #main_box {
        width: 100%;
        height: 100%;
    }

    #top_bar {
        width: 100%;
        height: 100px;
    }

    #title_rogo {
        margin-left: 15px;
    }

    #title_a {
        text-decoration-line: none;
        color: black;
        font: 32pt;
    }

    #body {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    #login_box {
        width: 460px;
        height: 737px;
        border: 3px solid gray;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #login_text {
        width: 100%;
        text-align: center;
    }

    .word {
        text-decoration: none;
        color: black;
        font-size: 10pt;
    }


    #welcome_text {
        width: 100%;
        text-align: center;
    }

    .login_input {
        width: 310px;
        height: 24px;
        padding: 12px 16px;
        border: 2px solid gray;
        border-radius: 10px;
        margin: 5px 0;
    }

    #login_btn {
        width: 345px;
        height: 50px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid gray;
        border-radius: 10px;
        margin: 10px 0;
    }
</style>