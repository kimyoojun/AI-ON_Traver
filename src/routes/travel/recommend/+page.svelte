<script>
import CategoryBtn from "$lib/component/btn/CategoryBtn.svelte";


    const Page = {
        who:0,
        which:1,
    }
    let page = Page.who
    
    const btn = ()=>{

    }
</script>



<div class="w-screen h-screen flex items-center">
    <div class="w-full bg-red-100">
        <h1 class="text-center">
            {#if page === Page.who}
                누구와 떠나나요?
            {:else if page === Page.which}
                내가 선호하는 여행 스타일은?
            {/if}
        </h1>
<!--        카테고리 선택 영역-->
        <div class="w-full flex flex-col">
            {#if page === Page.who}
                <div class="w-full flex justify-center">
                    <CategoryBtn categoryName="혼자"/>
                    <CategoryBtn categoryName="친구와"/>
                    <CategoryBtn categoryName="연인과"/>
                </div>
                <div class="w-full flex justify-center">
                    <CategoryBtn categoryName="가족과"/>
                    <CategoryBtn categoryName="기타"/>
                </div>
            {:else if page === Page.which}
                <div class="w-full flex justify-center">
                    <CategoryBtn categoryName="체험액티비티"/>
                    <CategoryBtn categoryName="SNS핫플레이스"/>
                    <CategoryBtn categoryName="자연과 함께"/>
                    <CategoryBtn categoryName="유명관광지"/>
                </div>
                <div class="w-full flex justify-center">
                    <CategoryBtn categoryName="힐링"/>
                    <CategoryBtn categoryName="문화 예술 역사"/>
                    <CategoryBtn categoryName="쇼핑"/>
                </div>
            {/if}
        </div>
        <button class="btn w-full items-center flex flex-col" on:click={btn}>
            {#if page === Page.who}
                다음
            {:else if page === Page.which}
                완료
            {/if}
        </button>
    </div>
</div>