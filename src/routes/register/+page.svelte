<script>
    export let form

</script>

<div>
    <center>
        <h2 class="h2 variant-outline-secondary mt-48 p-3 mr-16 ml-16 ">register</h2>
        <form action="?/register" method="POST" class="form mr-10 ml-10 mt-3  p-3">
            <input type="text" name="username" class="input p-3 mt-7" placeholder="username">
            <input type="text" name="password" class="input p-3 mt-7 " placeholder="password">
            <input type="text" name="confirmpassword" class="input p-3 mt-7" placeholder="confirm password">
            <button type="submit" class="btn variant-outline-surface hover:variant-outline-secondary active:variant-filled-primary mt-7">Register</button>

            <br>
                {#if form == null}
                <p class="p text-orange-400 font-thin mt-3"></p>
                {:else}
                <p class="text-red-500 p-1 font-bold mt-3">{form.message}</p>
                {/if}
            <p class="p mt-10  mr-36">Already have an account? <a href="/login" class="a text-blue-400">Log In</a></p>
        </form>
    </center>
</div>


