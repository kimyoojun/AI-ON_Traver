<script lang="ts">
    // let: 변수(menutoggle)의 값을 바꿀수 있음음
    // boolean: 참과 거짓 타입 설정 
    // =flase: 변수를 false로 설정 
    let menutoggle: boolean = false
    let searchToggle: boolean = false

    const Menu_switch = () => {
        menutoggle = !menutoggle
    }

    const SearchSwitch = () => {
        searchToggle = !searchToggle
    }
</script>

{#if searchToggle}
    <div id="search_body">
        <div id="search_background"></div>
        <div id="search_bar">
            <div id="search_top_bar">
                <h1 id="search_title">려유</h1>
                <div id="search_bar_box">
                    <button class="top_bar_btn">
                        <img src="icon/search.svg" alt="돋보기 사진">
                        <input placeholder="떠나고 싶은 여행지를 입력하세요" id="search_bar_search">
                    </button>
                </div>
                <button class="close_btn" on:click={SearchSwitch}>
                    <img src="icon/x.svg" alt="취소 버튼" class="close_img">
                </button>
            </div>
            <div id="search_bar_body">
                <div id="popular_box">
                    <h2>인기 검색어</h2>
                    <div>
                        <button class="popular">부산</button>
                        <button class="popular">창원</button>
                        <button class="popular">경주</button>
                        <button class="popular">제주</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

{#if menutoggle}
    <div id="menu_body">
        <div id="menu_bg"></div>
        
        <div id="menu_bar">
            <div id="close_bg">
                <button class="close_btn" on:click={Menu_switch}>
                    <img src="icon/x.svg" alt="취소 버튼" class="close_img">
                </button>
            </div>

            <div class="menu_txt_background">
                <p class="sign_txt">
                    <a href="sign_in" class="sign">로그인</a>
                    |
                        <a href="sign_up" class="sign">회원가입</a>
                </p>
            </div>

            <div id="menu_txt_box_top">
                <div class="menu_txt_box">
                    <p>
                        <a href="/" class="menu_txt">교통편</a>
                    </p>
                </div>
                    <div class="menu_txt_box">
                    <p>
                        <a href="/" class="menu_txt">지역별 여행정보</a>
                    </p>
                </div>
                    <div class="menu_txt_box">
                    <p>
                        <a href="/" class="menu_txt">숙소</a>
                    </p>
                </div>
                    <div class="menu_txt_box">
                    <p>
                        <a href="/" class="menu_txt">랜터카</a>
                    </p>
                </div>
            </div>
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
                <input placeholder="떠나고 싶은 여행지를 입력하세요" id="travel_search" on:click={SearchSwitch}>
            </div>
            <button class="top_bar_btn" on:click={Menu_switch}>
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

    #search_background {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
        opacity: 0.5;
        justify-content: end;
    }

    #search_top_bar{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #search_bar {
        width: 100%;
        height: 40%;
        position: absolute;
        top: 0;
        background-color: white;
    }

    #search_title {
        margin-left: 20px;
    }

    #search_bar_search {
        width: 750px;
        height: 30px;
        border: none;
        padding: 3px 8px;
        border-radius: 30px;
        background-color: #f3f3f3;
    }

    #search_bar_search:focus {
        outline:none;
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

    #search_bar_box {
        display: flex;
        padding: 7px;
        border-radius: 30px;
        background-color: #f3f3f3;
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
        opacity: 0.5;
        justify-content: end;
    }

    #menu_bar {
        width: 30%;
        height: 100%;
        background-color: white;
        position: absolute;
        right: 0;
        top: 0;
        padding: 20px;
        box-shadow: -2px 0 10px rbga(0,0,0,0.2);
        overflow-y: outo;
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
        border-radius: 20px;
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

    #close_bg {
        width: 100%;
        padding: 10px 0;
    }

    .close_btn {
        background-color: transparent;
        border: none;
        margin-left: 10px;
        margin-right: 20px;
        cursor: pointer;
    }

    .close_img {
        width: 35px;
        height: 35px;
    }

    .menu_txt_background {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1.5px solid rgb(156, 156, 156);
    }

    #menu_txt_box_top {
        list-style: none;
        padding:0;
        margin-top: 30px;
    }

    .menu_txt_box {
        width: 100%;
        height: 50px;
        font-weight: 600;
        display: flex;
        align-items: center;
        padding: 13px 0;
        border-bottom: 1px solid #eee;
    }

    .sign_txt {
        font-size: 20pt;
        font-weight:600;
        margin-bottom: 20px;
        padding-bottom: 10px;
        color: black;
        text-decoration: none;
        margin-left: 25px;
    }

    .sign {
        color: black;
        text-decoration: none;
    }

    .menu_txt {
        font-size: 15pt;
        font-weight: 500;
        color: black;
        text-decoration: none;
        margin-left: 25px;
    }

</style>