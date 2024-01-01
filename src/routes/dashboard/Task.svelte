<script>
    export let prop
</script>
<div class="flex ">
    <p class="p p-4 variant-outline-surface mt-4 mb-5 ml-7 w-80 mr-7 ">{prop.task}</p>
    <form action="?/deletetask" method="POST" class="form"><input type="text" hidden value={prop.id} name="taskid" class="input"><button  type="submit" class="btn mt-5 variant-filled-primary rounded-none pt-3 pb-3">Delete</button></form>
</div>