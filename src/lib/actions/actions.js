"use server"; 

export async function handleRegister(formData) {
    const { name, email, password } = Object.fromEntries(formData); 

    // Extract data from the formData object
    // const username = formData.get("username");
    // const email = formData.get("email");
    // const password = formData.get("password");

    // Log the data on the server terminal
    console.log("Registering User:", { username, email, password });

    // In a real app, you'd save this to a database here
    // Logic: Save to DB, hash password, etc.
    return { success: true };
}