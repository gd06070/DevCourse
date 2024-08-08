const cols = document.querySelectorAll('.col');
cols.forEach((col) => {
    new Sortable(col, {
        group : "shared",
        animation : 150,
        ghostClass : 'blue-background-class'
    });
})