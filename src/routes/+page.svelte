<script lang="ts">
    let menuToggle: boolean = false
    let travelMenuOpen: boolean = false
    let searchToggle: boolean = false

    const MenuSwitch = () => {
        menuToggle = !menuToggle
    }
        const toggleTravelMenu = () => {
        travelMenuOpen = !travelMenuOpen;
    }
        const SearchSwitch = () => {
        searchToggle = !searchToggle
    }

</script>
{#if searchToggle}
    <div id="search_body">
        <div id="search_bg">

        </div>
        <div id="search_bar">
            <div id="search_top_bar">
                <h1 id="search_title">려유</h1>
                <div id="search_bar_search_box">
                    <button class="top_bar_btn">
                        <img src="search.svg" alt="돋보기 사진"/>
                    </button>
                    <input id="search_bar_search"/>
                </div>
                <button on:click={SearchSwitch} class="close_btn">
                    ✕
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
        <div
            id="menu_bg"
            on:click={MenuSwitch}
            on:keydown={(e) => e.key === 'Enter' && MenuSwitch()}
            role="button"
            tabindex="0">
        </div>

        <div id="menu_bar">
            <button class ="close_btn" on:click={MenuSwitch}>✕</button>
            <h2 class="menu_title">
                <a href="/sign_in" class = login_inout> 로그인 </a>
                /
                <a href="/sign_up"class = login_inout> 회원가입 </a>
            </h2>
            <ul class="menu_list">
                <li>내 예약</li>
                <li>
                    도시별 여행정보
                    <span class="badge">무료로 확인해 보세요!</span>
                </li>
                <li>교통편</li>
                <li on:click={toggleTravelMenu} 
                    on:keydown={(e) => e.key === 'Enter' && toggleTravelMenu()}
                    role="button"
                    tabindex="0"
                    style="display: flex; justify-content: space-between; align-items: center;">
                    여행상품
                    <span>{travelMenuOpen ? '▲' : '▼'}</span>
                </li>   

                {#if travelMenuOpen}
                <ul class="submenu">
                    <li>항공</li>
                    <li>숙소</li>
                    <li>투어·티켓</li>
                </ul>
                {/if}
            </ul>
        </div>
    </div>
{/if}

<div id="main_bg">
    <div id="tor_bar">
        <h1 id="title_text">려유</h1>
        <div id="top_bor_right">
            <div id="search_box">
                <button class="top_bar_btn">
                    <img src="search.svg" alt="돋보기 사진"/>
                </button>
                <input id="search"on:click ={SearchSwitch}/>
            </div>
            <button class="top_bar_btn" on:click={MenuSwitch}>
                <img src="menu-2.svg" alt="메뉴 사진" id="menu_btn"/>
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

    #search_bar_search_box {
        display: flex;
        background-color: #f3f3f3;
        border-radius: 30px;
        padding: 10px;
    }

    #search_bar_search {
        width: 750px;
        height: 20px;
        border: none;
        padding: 7px;
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
        border-radius: 20px;
        padding: 5px 20px;
        margin-right: 15px;
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
        background-color: gray;
        opacity : 0.5;
        filter: blur(5px);
    }


    #tor_bar {
        border-bottom: 2px solid gray;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #title_text {
        margin: 0;
    }

    #top_bor_right {
        display: flex;
    }

    #search_box {
        height: 30px;
        display: flex;
        align-items: center;
        border: 2px solid gray;
        margin-right: 10px;
        padding: 5px;
        border-radius:40px;
    }

    #search {
        width: 200px;
        height: 25px;
        border: none;
        background-color: transparent;
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

    #menu_bar {
        width: 300px;
        height: 100%;
        background-color: white;
        position: absolute;
        right: 0;
        top: 0;
        padding: 20px;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
        overflow-y: auto;
    }

    .close_btn {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-bottom: 20px;
    }

    .menu_title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
    }

    .menu_list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .menu_list > li {
        font-weight: 600;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
        cursor: pointer;
    }

    .badge {
        background-color: #4f8cf3;
        color: white;
        padding: 3px 8px;
        border-radius: 15px;
        font-size: 12px;
        margin-left: 10px;
    }

    .submenu {
        list-style: none;
        padding-left: 15px;
        margin-top: 10px;
    }

    .submenu li {
        font-weight: 400;
        padding: 5px 0;
    }
    .login_inout{
        text-decoration-line: none;
    }
</style>