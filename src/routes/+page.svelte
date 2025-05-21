<script lang='ts'>
    let menuToggle:boolean = false
    let searchToggle: boolean = false

    const MenuSwitch = () => {
        menuToggle = !menuToggle
    }

    const searchSwitch = () => {
        searchToggle = !searchToggle

    }
</script>

{#if searchToggle}
    <div id='search_body'>
        <div id='search_bg'>
        </div>
        <div id='search_bar'>
            <div id='search_top_bar'>
                <h1 id='search_title'>려유</h1>
                <div id='search_bar_search_box'>
                    <button class='top_bar_btn'>
                        <img src="/icon/search.svg" alt='돋보기 사진'/>
                    </button>
                    <input id='search_bar_search'/>
                </div>
                <button on:click={searchSwitch} class='close_btn'>
                    <img src='icon/x.svg' alt='X 이미지' class='close_img'>
                </button>
            </div>
            <div id='search_bar_body'>
                <div id='popular_box'>
                    <h2>인기 검색어</h2>
                    <div>
                        <button class='popular'>제주</button>
                        <button class='popular'>부산</button>
                        <button class='popular'>경주</button>
                        <button class='popular'>창원</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
{/if}

{#if menuToggle}
    <div id='menu_body'>
        <div id='menu_bg'>

        </div>
        <div id='menu_bar'>
            <div id='close_bg'>
                <button on:click={MenuSwitch} class='close_btn'>
                    <img src='icon/x.svg' alt='X 이미지' id='close_img'>
                </button>
            </div>

            <div class='menu_txt_bg'>
                <h1>
                    <a href='/signIn' class='menu_txt'> 로그인 </a>
                    /
                    <a href='/signUp' class='menu_txt'> 회원가입 </a>
                </h1>
            </div>

            <div class='menu_txt_bg'>
                <h2>
                    <a href='/' class='menu_txt'> 교통편 </a>
                </h2>
            </div>

            <div class='menu_txt_bg'>
                <h2>
                    <a href='/' class='menu_txt'> 도시별 여행 정보 </a>
                </h2>
            </div>
            
            <div class='menu_txt_bg'>
                <h2>
                    <a href='/' class='menu_txt'> 렌터카 </a>
                </h2>
            </div>

            <div class='menu_txt_bg'>
                <h2>
                    <a href='/' class='menu_txt'> 숙소 </a>
                </h2>
            </div>
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
                <input id='search' on:click={searchSwitch}/>

            </div>
            <button class='top_bar_btn' on:click={MenuSwitch}>
                <img src="/icon/menu-2.svg" alt='메뉴 사진' id='menu_btn'/>
            </button>
        </div>
    </div>
</div>

<style>
    #search_body {
        width: 100%;
        position: absolute;
        height: 100%;
    }
    #search_bg {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
        opacity: 0.6;
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
    #search_top_bar{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    #search_bar_search_box{
        display: flex;
        background-color: #f2f2f7;
        border-radius: 30px;
        padding: 10px;
        
    }
    #search_title {
        margin-left: 20px;
    }
    #search_bar_search {
        width: 800px;
        height: 20px;
        border: none;
        padding: 7px;
        background-color: #f2f2f7;
        border-radius: 20px;
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
        font-size: 20px;
        border: none;
        border-radius: 20px;
        padding: 5px 20px;
        margin-right: 20px;
        font-weight: 400;

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
        opacity: 0.6;
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
    #close_bg {
        width: 100%;
        background-color: #3e74fe;
        padding: 15px;
    }
    .close_btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .close_img {
        width: 35px;
        height: 35px;
    }
    .menu_txt_bg {
        width: 100%;
        background-color: white;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 2px solid black;
        padding: 10px 20px

    }
    .menu_txt {
        color: black;
        text-decoration-line: none;
        font-family: 'Noto Sans KR', sans-serif;

    }
    #tor_bar {
        background-color: white;
        border-bottom: 2px solid #3e74fe;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #title_text {
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
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
        border: 3px solid #3e74fe;
        padding: 5px;
        height: 30px;
        border-radius: 20px;
        margin-right: 30px;

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