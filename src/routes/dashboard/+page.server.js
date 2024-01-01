import PocketBase from 'pocketbase'
export const actions = 
{
    addtask: async ({ request , cookies}) =>
    {
        const formData = await request.formData()
        const task = formData.get('task')
        const username = cookies.get('username')
        const pb = new PocketBase("https://your-tasks.pockethost.io/");
        const authData = await pb.admins.authWithPassword("vadlacherry2711@gmail.com", 'Charan2711');

       const newtodo = {
            task: task,
            completed: false,
            username : username
        }
        const record = pb.collection('todos').create(newtodo);


    },

    deletetask : async ( { request }) =>
    {
        const formData = await request.formData()
        const taskid = formData.get('taskid')
        
        const pb = new PocketBase("https://your-tasks.pockethost.io/");
        const authData = await pb.admins.authWithPassword("vadlacherry2711@gmail.com", 'Charan2711');

        const records = await pb.collection('todos').delete(taskid)
    

    }

}
export const load = async ({ cookies }) =>
{

    const pb = new PocketBase("https://your-tasks.pockethost.io/");
    const authData = await pb.admins.authWithPassword("vadlacherry2711@gmail.com", 'Charan2711');

    const username = cookies.get('username')

    const todos = await pb.collection('todos').getFullList({
        filter: `username = '${username}'`
    });
    return { username : username,
            todos : todos}
}