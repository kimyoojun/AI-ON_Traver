<script lang="ts">
    import {onMount} from 'svelte';
    import {supabase} from '$lib/supabaseClient';
    import { session } from '$lib/store/session';

    let menuToggle: boolean = false
    let searchToggle: boolean = false
    let travelMenuTooggle: boolean = false

    const MenuSwitch = () => {
        menuToggle = !menuToggle
    }

    const SearchSwitch = () => {
        searchToggle = !searchToggle
    }

    const TravelMenuSwitch = () => {
        travelMenuTooggle = !travelMenuTooggle
    }

    onMount(() => {
        supabase.auth.getSession().then(({ data }) => {
            session.set(data.session)
        })


    })


</script>

{#if searchToggle}
    <div id="search_body">
        <div id="search_bg"></div>
        <div id="search_bar">
            <div id="search_top_bar">
                <h1 id="search_title">려유 {$session}</h1>
                <div id="search_bar_box">
                    <button class="top_bar_btn">
                        <img src="icon/search.svg" alt="돋보기 사진"/>
                    </button>
                    <input id="search_bar_search"/>
                </div>
                <button on:click={SearchSwitch} class="close_btn">
                    <img src="icon/x.svg" alt="X 이미지" class="close_img"/>
                </button>
            </div>
            <div id="search_bar_body">
                <div id="popular_box">
                    <h2>인기 검색어</h2>
                    <div>
                        <button class="popular">제주</button>
                        <button class="popular">부산</button>
                        <button class="popular">경주</button>
                        <button class="popular">창원</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

{#if menuToggle}
    <div id="menu_body">
        <div id="menu_bg">

        </div>
        <div id="menu_bar">
            <div id="close_bg">
                <button on:click={MenuSwitch} class="close_btn">
                    <img src="icon/x.svg" alt="X 이미지" class="close_img"/>
                </button>
            </div>

            <div class="menu_txt_backgroun">
                {#if $session === null}
                    <h1 class="sign_txt">
                        <a href="/signIn" class="sign">로그인</a>
                        /
                        <a href="/signUp" class="sign">회원가입</a>
                    </h1>
                {:else}
                    <img src='icon/user.svg' alt='유저 프로필' id="user_profil"/>
                    <div>닉네임</div>
                {/if}
                </div>


            <div class="menu_txt_bg">
                <h2 class="menu_txt_title">
                    <a href="/" class="menu_txt">교통편</a>
                </h2>
            </div>
            <div class="menu_txt_bg">
                <h2 class="menu_txt_title">
                    <a href="/" class="menu_txt">도시별 여행정보</a>
                    <span class = 'free'> 무료로 확인해 보세요! </span>
                </h2>
            </div>
            <div class="menu_txt_bg">
                <h2 class="menu_txt_title">
                    <a href="/" class="menu_txt">렌터카</a>
                </h2>
            </div>
            <div class="menu_txt_bg">
                <button on:click={TravelMenuSwitch} id="menu_menu_btn">
                    <h2 class="menu_txt_title">
                        <a href="/" class="menu_txt">여행 상품</a>
                        {travelMenuTooggle ? '▲' : '▼'}
                    </h2>
                </button>
                {#if travelMenuTooggle}
                    <ul id="menu_menu_list">
                        <li>항공</li>
                        <li>숙소</li>
                        <li>투어 & 티켓켓</li>
                    </ul>
                {/if}
            </div>
        </div>
    </div>
{/if}

<div id="main_bg">
    <div id="tor_bar">
        <h1 id="title_text">려유</h1>
        <div id="top_bor_right">
            <div id="search_box">
                <button class="top_bar_btn">
                    <img src="icon/search.svg" alt="돋보기 사진"/>
                </button>
                <input id="search" on:click={SearchSwitch}/>
            </div>
            <button class="top_bar_btn" on:click={MenuSwitch}>
                <img src="icon/menu-2.svg" alt="메뉴 사진" id="menu_btn"/>
            </button>
        </div>
    </div>
</div>

<style>
    #search_body {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    #search_bg {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
        opacity : 0.5;
        display: flex;
        justify-content: end;
    }

    #search_bar {
        width: 100%;
        height: 40%;
        position: absolute;
        top: 0;
        background-color: white;
    }

    #search_top_bar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #search_title {
        margin-left: 20px;
    }

    #search_bar_box {
        display: flex;
        background-color: #f3f3f3;
        border-radius: 30px;
        padding: 7px;
    }

    #search_bar_search {
        width: 750px;
        height: 30px;
        border: none;
        padding: 3px 8px;
        background-color: #f3f3f3;
        border-radius: 30px;
    }

    #search_bar_body {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    #popular_box {
        width: 800px;
    }

    .popular {
        font-size: 18px;
        border: none;
        border-radius: 25px;
        padding: 5px 20px;
        margin-right: 20px;
        font-weight: 400;
    }

    #search_bar_search:focus {
        outline: none;
    }

    #menu_body {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    #menu_bg {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
        opacity : 0.5;
        display: flex;
        justify-content: end;
    }

    #user_profil {
        width: 15px;
        
    }



    #menu_bar {
        width: 30%;
        height: 100%;
        background-color: white;
        position: absolute;
        right: 0;
        top: 0;
        padding: 20;
        box-shadow: -2px 0 10px rbga(0,0,0,0.2);
        overflow-y: outo;
    }

    #close_bg {
        width: 100%;
        padding: 15px;
        background-color: white;
        height: 100px;
    }

    .close_btn {
        background-color: transparent;
        border: none;
        margin-right: 20px;
        cursor: pointer;
        margin-left: 15px;
    }

    .close_img {
        width: 35px;
        height: 35px;
    }
    
    .free {
        background-color: #6090fe;
        color: white;
        padding: 3px 8px;
        border-radius: 15px;
        font-size: 12px;
        margin-left: 10px;
        align-items: center;
    }

    .menu_txt_bg {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid black;
        flex-direction: column;
        padding: 10px 30px
    }

    #menu_menu_btn {
        background-color: transparent;
        align-items: center;
        cursor: pointer;
        border: none;
        padding: 0;
        margin: 0;
    }

    #menu_menu_list {
        margin-left: 10px;
    }

    .menu_txt_title {
        margin: 0 20px 0 20px;
        margin-right: 100px;
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
    }

    .menu_txt {
        color: black;
        text-decoration-line: none;
        font-family: 'Noto Sans KR', sans-serif;
    }

    #tor_bar {
        border-bottom: 2px solid #6090fe;
        background-color: white;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #title_text {
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }

    #top_bor_right {
        display: flex;
    }

    #search_box {
        display: flex;
        align-items: center;
        border: 3.5px solid #85a7ff;
        padding: 5px;
        height: 30px;
        border-radius: 25px;
        margin-right: 10px;
    }

    #search {
        width: 200px;
        height: 25px;
        border: none;
    }

    #search:focus {
        outline: none;
    }

    .top_bar_btn {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    #menu_btn {
        width: 35px;
        height: 35px;
    }
    .sign {
        color: black;
        text-decoration: none;
    }
   .sign_txt {
        margin-bottom: 20px;
        padding-bottom: 10px;
        color: black;
        text-decoration: none;
        margin-left: 40px;
    }
</style>
