$(document).ready(function() {
            let darkMode = localStorage.getItem("darkMode");

            if (darkMode === "on") {
                $("body").addClass("dark-mode");
                $("#theme-switch").prop("checked", true);
            }

            $("#theme-switch").click(function() {
                $("body").toggleClass("dark-mode");
                darkMode = localStorage.getItem("darkMode");
                
                if (darkMode !== "on") {
                    localStorage.setItem("darkMode", "on");
                } else {
                    localStorage.setItem("darkMode", null);
                }
            });
        });
        