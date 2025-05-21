<div>
    <div id="top_bar">
        <h1 id="name">려유</h1>
        <div id="top_bar_right">
            <input>
            <div>
                <button>로그인</button>
            </div>
        </div>
    </div>
</div>

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style>
    #top_bar {
        width: 100%;
        background-origin: line;
        border-bottom: 3px solid green;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    
    #name {
        width: 100px;
        display: flex;
        flex-direction: column;
    }
    
    #top_bar_right {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
    }
</style>