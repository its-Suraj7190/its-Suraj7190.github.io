function toggleDetails(id, button)
{
    const details = document.getElementById(id);

    if(details.style.display === "block")
    {
        details.style.display="none";
        button.innerHTML="▼ View Details";
    }
    else
    {
        details.style.display="block";
        button.innerHTML="▲ Hide Details";
    }
}
