<script lang='ts'>
    let menuToggle:boolean = false

    const MenuSwitch = () => {
        menuToggle = !menuToggle

        console.log(menuToggle)
    }
</script>

{#if menuToggle}
    <div id='menu_body'>
        <div id='menu_bg'>

        </div>
        <div id='menu_bar'>

        </div>
    </div>
{/if}

<div>
    <div id='tor_bar'>
        <h1 id='title_text'>려유</h1>
        <div id='top_bar_right'>
            <div id='search_box'>
                <button class='top_bar_btn'>
                    <img src="/icon/search.svg" alt='돋보기 사진'/>
                </button>
                <input id='search'/>
            </div>
            <button class='top_bar_btn' on:click={MenuSwitch}>
                <img src="/icon/menu-2.svg" alt='메뉴 사진' id='menu_btn'/>
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
        opacity: 0.6;
        filter: blur(5px);
        display: flex;
        justify-content: end;
    }
    #menu_bar {
        width: 30%;
        height: 100%;
        background-color: white;
        position: absolute;
        right: 0%;

    }
    #tor_bar {
        background-color: white;
        border-bottom: 2px solid skyblue;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #title_text {
        margin: 0;
    }
    #top_bar_right {
        display: flex;
    }
    .top_bar_btn {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        margin-right: 10px;
        cursor: pointer;
    }
    #search_box {
        display: flex;
        align-items: center;
        border: 2px solid skyblue;
        padding: 5px;
        height: 30px;

    }
    #search {
        border: none;
        background-color: transparent;
        width: 200px;
        height: 25px;
    }
    #search:focus {
        outline: none;
    }
    #menu_btn {
        width: 35;
        height: 35;
    }

</style>