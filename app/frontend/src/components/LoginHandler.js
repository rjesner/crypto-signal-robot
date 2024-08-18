export async function handleLoginClick({ email, password, rememberMe }) {
    try {
        const response = await fetch('http://localhost:80/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                rememberMe,
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