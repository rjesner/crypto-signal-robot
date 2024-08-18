export async function handleSignUpClick({ firstName, lastName, email, password }) {
    try {
        const response = await fetch('http://localhost:80/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Response from server:', data);
        } else {
            console.error('Server error:', data.message || response.statusText);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
}