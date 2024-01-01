<script>
    import Task from "./Task.svelte";
    export let data
    const todos = data.todos
</script>
<div>
    
    
        <label for="task" class="label ml-4 font-light">Hello, {data.username}</label>
        <center>
        <form action="?/addtask" method="POST" class="form mt-20 m-5">
            <label for="task" class="label mb-4 font-thin">Enter task to add</label>
            <input type="text" name="task" class="input p-3 rounded-none" placeholder="Get Milk">
            <button class="btn variant-outline-tertiary rounded-none mt-10 pr-48 pl-48 pt-3 pb-3 active:variant-filled-tertiary">Add task</button>
        </form>
        <h2 class="h2 variant-ringed-secondary mr-7 ml-7 mt-8 pt-3 pb-3">Tasks</h2>
    </center>
    <br>
    
    {#each todos as todo}
        <Task prop={todo} />
    {/each}

</div>