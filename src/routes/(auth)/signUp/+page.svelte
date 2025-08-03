<script lang="ts">
    import {supabase} from "$lib/supabaseClient";
    import {goto} from "$app/navigation";

    let email: string
    let pw: string
    let name: string
    let age: number
    let number: number // 전화 번호를 담는 변수
    let userId: string // 유저에 uuid를 담는 변수

    let page = {
        a: 1,
        b: 2
    }

    const Page = {
        loading: 0,
        error: 1,
        data: 2,
    };

    const singUpBtn = async () => {
        if (page.a) {
            const { error, data } = await supabase.auth.signUp
            ({
                email: email,
                password: pw
            })

            if (error) return console.error(error)

            userId = data?.user?.id ?? ""

            Page += 1

        } else if (page.b) {
            const { error: usersError, data: usersData } = await supabase
                .from('users')
                .insert({
                    id: userId,
                    age: age,
                    number: number,
                    name: name
                })

            if (usersError) return console.error(usersError)
        }




        // await goto("/signIn")
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
            {#if page.a}
                <h1 id="login_text">회원가입</h1>
                <p id="welcome_text">"려유"의 세게에 오신것을 환영합니다.</p>
                <input placeholder="이메일 주소" class="login_input" bind:value={email}/>
                <input placeholder="비밀번호" class="login_input" bind:value={pw} type="password"/>

            {:else if page.b}
                <h1 id="login_text">회원가입</h1>
                <p id="welcome_text">"려유"의 세게에 오신것을 환영합니다.</p>
                <input placeholder="이름" class="login_input" bind:value={name}/>
                <input placeholder="전화번호" class="login_input" bind:value={number}/>
                <input placeholder="나이" class="login_input" bind:value={age}/>
            {/if}
            <button id="login_btn" on:click={singUpBtn}>
                {#if page.a}
                    다음
                {:else if page.b}
                    회원가입
                {/if}
            </button>
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
