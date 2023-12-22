// Change the page's theme and save the user's preferences about this topic
const themeSwitching = (theme) => {

    theme.addEventListener("click", (e) => {    // Listen the click on the theme's button

        e.preventDefault();     // Prevents the button's automatic behaviour

        document.documentElement.classList.toggle("dark");      // Change the theme

        document.documentElement.classList.contains("dark") ? theme.src = "./assets/dark.png" : theme.src = "./assets/light.png";     // Change the theme button's img

        document.documentElement.classList.contains("dark") ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");       // Save the user's theme preferences

    });

    window.addEventListener("load", () => {     // Listen the page's load

        const userPreferences = localStorage.getItem("theme");   // Get the user's theme preferences saved previously

        if (userPreferences == "dark") {    // Change the theme based on the user's theme preferences

            document.documentElement.classList.add("dark");
            theme.src = "./assets/dark.png";
        
        }

    });

};

export default themeSwitching;      // Export the theme switching function