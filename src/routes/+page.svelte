<script>
    import {goto} from "$app/navigation";

    const recommend = () => {
        goto("/travel/recommend")
    }
</script>

<div class="w-screen h-screen flex flex-col">
<!--    상단 바 -->
    <div class="w-full h-[124px] border-b flex items-center justify-between">
<!--        웹 로고 이름-->
        <div class="ml-4 cursor-pointer flex items-center">
            <img class="w-14" src="rogo.png" alt="로고 이미지"/>
            <h1 class="text-4xl text-center ml-3 font-[500]">려유</h1>
        </div>
<!--        검색창-->
        <div class="w-[450px] h-[50px] flex border rounded-full justify-between">
            <img class="w-8 ml-4" src="icon/search.svg" alt="검색 아이콘"/>
            <input class="w-[350px] mr-10 outline-none" placeholder="검색"/>
        </div>
<!--        메뉴바-->
        <button class="cursor-pointer mr-4">
            <img class="w-12" src="icon/menu-2.svg" alt="메뉴 아이콘"/>
        </button>
    </div>
<!--    바디-->
    <div class="w-full h-full flex justify-center items-center">
        <button class="btn" on:click={recommend}>여행지 추천받기</button>
    </div>
</div>