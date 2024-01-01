import { redirect } from '@sveltejs/kit'
import PocketBase from 'pocketbase'
export const actions = 
{
    register: async ({ request }) =>
    {
        const formData = await request.formData()
        const username =  formData.get('username')
        const password =  formData.get('password')
        const confirmpassword = formData.get('confirmpassword')

        const pb = new PocketBase("https://your-tasks.pockethost.io/");
        const authData = await pb.admins.authWithPassword("vadlacherry2711@gmail.com", 'Charan2711');

        if( username.length > 8 && password.length > 7)
        {

            if( password == confirmpassword )
            {

              const existing_users = await pb.collection('user').getFullList({
                    filter: `username = '${username}'`
                });
                
                if( existing_users.length == 0)
                {
                    const newRecord = {
                        username,
                        password
                    }
                    const record = pb.collection('user').create(newRecord);
                    throw redirect(301,"/login")
        
                    
                }
                else
                {
                    return { message: "Username already Taken! try another"}
                }
                
            }
            else
            {
                return { message: "Passwords are not Matched"}
            }
            
        }
        else
        {
            return { message : "username and password should contain minimum 8 characters"}
        }
    
        
       
       
    }
}