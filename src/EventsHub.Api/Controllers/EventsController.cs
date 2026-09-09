using EventsHub.Domain;
using EventsHub.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Api.Controllers;

public class EventsController(AppDbContext context)
    : EventsHubBaseController
{
    [HttpGet]
    public async Task<ActionResult<List<Event>>> GetEvents()
    {
<<<<<<< HEAD
        return await context.Events.ToListAsync();
=======
        return await context.Activities.ToListAsync();
>>>>>>> fe0a5b616101767fc26154c77d0cf0b33bc1835c
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Event>> GetEventDetailAsync(string id)
    {
<<<<<<< HEAD
        var result = await context.Events.FindAsync(id);
=======
        var result = await context.Activities.FindAsync(id);
>>>>>>> fe0a5b616101767fc26154c77d0cf0b33bc1835c

        if (result is null)
        {
            return NotFound("The event was not found");
<<<<<<< HEAD
=======

>>>>>>> fe0a5b616101767fc26154c77d0cf0b33bc1835c
        }

        return result;
    }
}