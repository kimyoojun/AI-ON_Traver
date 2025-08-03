<script lang="ts">
    import CategoryBtn from "$lib/component/btn/CategoryBtn.svelte";
    import {goto} from "$app/navigation";
    import axios from "axios";

    let alone: boolean
    let friend: boolean
    let lover: boolean
    let family: boolean
    let ands: boolean

    let experience: boolean
    let sns: boolean
    let nature: boolean
    let famous: boolean
    let healing: boolean
    let culture: boolean
    let shopping: boolean


    const Page = {
        who: 0,
        which: 1,
    }

    let page = Page.who

    const btn = async () => {
        if (page === Page.who)
            page += 1
        else if (page === Page.which)
        {
            const categoryAPI = await axios.post("http://127.0.0.1:8000/travel/category/", {
                "alone": alone,
                "friend": friend,
                "lover": lover,
                "family": family,
                "ands": ands,
                "experience": experience,
                "sns": sns,
                "nature": nature,
                "famous": famous,
                "healing": healing,
                "culture": culture,
                "shopping": shopping,
            }).then((res) => {
                console.log(res.data)})
                // await goto("/travel")
        }
    }
</script>

<div class="w-screen h-screen flex items-center">
    <div class="w-full flex flex-col">
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
                    <CategoryBtn categoryName="혼자" bind:categoryBtn={alone}/>
                    <CategoryBtn categoryName="친구와" bind:categoryBtn={friend}/>
                    <CategoryBtn categoryName="연인과" bind:categoryBtn={lover}/>
                </div>
                <div class="w-full flex justify-center">
                    <CategoryBtn categoryName="가족과" bind:categoryBtn={family}/>
                    <CategoryBtn categoryName="기타" bind:categoryBtn={ands}/>
                </div>
            {:else if page === Page.which}
                <div class="w-full flex justify-center">
                    <CategoryBtn categoryName="체험액티비티" bind:categoryBtn={experience}/>
                    <CategoryBtn categoryName="SNS 핫플레이스" bind:categoryBtn={sns}/>
                    <CategoryBtn categoryName="자연과 함께" bind:categoryBtn={nature}/>
                    <CategoryBtn categoryName="유명 관광지" bind:categoryBtn={famous}/>
                </div>
                <div class="w-full flex justify-center">
                    <CategoryBtn categoryName="힐링" bind:categoryBtn={healing}/>
                    <CategoryBtn categoryName="문화 예술 역사" bind:categoryBtn={culture}/>
                    <CategoryBtn categoryName="쇼핑" bind:categoryBtn={shopping}/>
                </div>
            {/if}
        </div>
        <button class="btn" on:click={btn}>
            {#if page === Page.who}
                다음
            {:else if page === Page.which}
                추천 받기
            {/if}
        </button>
    </div>
</div>
