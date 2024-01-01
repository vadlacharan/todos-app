import { redirect } from '@sveltejs/kit'
import PocketBase from 'pocketbase'
export const actions = 
{
    default: async ({ request,cookies }) =>
    {
        const formData = await request.formData()
        const username = formData.get('username')
        const password = formData.get('password')

        const pb = new PocketBase("https://your-tasks.pockethost.io/");
        const authData = await pb.admins.authWithPassword("vadlacherry2711@gmail.com", 'Charan2711');

        const existing_user = await pb.collection('user').getFullList({
            filter: `username = '${username}'`
        });

        if( existing_user.length == 0)
        {
            return {message : "user not found!"}
        }
        else
        {
            if( existing_user[0].password == password)
            {
                cookies.set('username', username, {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60 * 24 * 30,
                  })
                throw redirect(301,"/dashboard")
            }
            else
            {
                return { message: "Incorrect password"}
            }
        }
    }
}