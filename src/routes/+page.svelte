<script lang="ts">
    let menutoggle: boolean = false

    const Menu_switch = () => {
        menutoggle = !menutoggle

        console.log(menutoggle)
    }
</script>

{#if menutoggle}
    <div id="menu_body">
        <div id="menu_bg"></div>
        <div id="menu_bar">
            <a href="login/sign_in">로그인</a>
            <a href="login/sign_up">회원가입</a>
        </div>
    </div>
{/if}

<div>
    <div id="top_bar">
        <h1 id="top_title">려유</h1>
        <div id="top_bar_right">
            <div id="search_box">
                <button class="top_bar_btn">
                    <img src="icon/search.svg" alt="돋보기 사진"/>
                </button>
                <input placeholder="떠나고 싶은 여행지를 입력하세요" id="travel_search">
            </div>
            <button class="top_bar_btn" on:click={Menu_switch}>
                <img src="icon/menu-2.svg" alt="메뉴 사진" id="menu_btn"/>
            </button>
        </div>
    </div>
</div>

<style>
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
        filter: blur(5px);
        opacity: 0.5;
        justify-content: end;
    }

    #menu_bar {
        width: 30%;
        height: 100%;
        background-color: white;
        position: absolute;
        right: 0;
    }

    #top_bar {
        border-bottom: 2px solid gray;
        padding: 20px;
        display: flex;
        align-items: center;
        /* div 태그 안에 속성 몇개가 있던지 양쪽으로 정렬 */
        justify-content: space-between; 
    }

    #top_title {
        margin: 0;
    }

    #top_bar_right {
        display: flex;
    }

    #search_box {
        height: 30px;
        display: flex;
        align-items: center;
        border: 2px solid gray;
        border-radius: 4px;
        margin-right: 10px;
        padding: 5px;
    }

        #travel_search {
        width: 200px;
        height: 25px;
        border: none;
    }

    #travel_search:focus {
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
</style>