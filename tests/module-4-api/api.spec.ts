import {test, expect} from '@playwright/test';

test.describe('API Testing with Playwright', ()=> {

    const baseURL = 'https://jsonplaceholder.typicode.com';

    

    test('GET - should fetch list of user', async ({ request }) =>{

        const response = await request.get(`${baseURL}/users?page=2`);

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body.length).toBe(10);

        expect(body[0]).toHaveProperty('name');
        expect(body[0]).toHaveProperty('email');

        console.log('First user:', body[0].name);

    });

    test('POST - should create a new user', async ({request}) =>{
        const response = await request.post(`${baseURL}/users`, {
            data:{
                name: 'Ankur Kumar',
                email: 'ankur@example.com',
                phone: '123-456-7890'
            }
        });

        expect(response.status()).toBe(201);

        const body = await response.json();

        expect(body.name).toBe('Ankur Kumar');
        expect(body.email).toBe('ankur@example.com');

        // for proof it will created a id

        expect(body.id).toBeDefined();
    });

    test('PUT - should update user', async ({request}) =>{
        const response = await request.put(`${baseURL}/users/1`, {
            data: {
                name: 'Ankur Raj',
                email: 'ankur.updated@example.com'
            }
        });
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.name).toBe('Ankur Raj');

    });

    test('DElETE - should delete a user', async({ request }) =>{
        const response = await request.delete(`${baseURL}/users/1`);

        expect(response.status()).toBe(200);
    });

  
})