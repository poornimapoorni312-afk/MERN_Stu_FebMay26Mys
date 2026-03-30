document.addEventListener("DOMContentLoaded",
    function(){
        //Render skills
         renderFilters(skills);
        renderSkills();
        initModal();
        initContactValidation();
        initThemeToggle();
        filterProject();
        
        createProjectCards();
        renderFilters(skills);



    }
    
)