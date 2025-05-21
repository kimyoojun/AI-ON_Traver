<script lang="ts">
    let menuToggle: boolean = false

    const MenuSwitch = () => {
        menuToggle = !menuToggle
    }
</script>
{#if menuToggle}
    <div id="menu_body">
        <div id="menu_bg">

        </div>
        <div id="menu_bar">

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
                <input id="search"/>
            </div>
            <button class="top_bar_btn" on:click={MenuSwitch}>
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
        background-color: red;
        opacity : 0.5;
        filter: blur(5px);
    }

    #menu_bar {
        width: 30%;
        height: 100%;
        background-color: black;
        position: absolute;
        right: 0;
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
</style>
