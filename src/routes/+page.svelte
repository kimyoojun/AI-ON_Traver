<script lang="ts">
    let menuToggle: boolean = false
    let travelMenuOpen: boolean = false;

    const MenuSwitch = () => {
        menuToggle = !menuToggle
    }
        const toggleTravelMenu = () => {
        travelMenuOpen = !travelMenuOpen;
    }
</script>
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
            <button id="close_btn" on:click={MenuSwitch}>✕</button>
            <h2 class="menu_title">로그인/회원가입</h2>
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
                <input id="search"/>
            </div>
            <button class="top_bar_btn" on:click={MenuSwitch}>
                <img src="menu-2.svg" alt="메뉴 사진" id="menu_btn"/>
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

    #close_btn {
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

</style>