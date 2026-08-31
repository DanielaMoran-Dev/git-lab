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
        return await context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Event>> GetEventDetailAsync(string id)
    {
        var result = await context.Activities.FindAsync(id);

        if (result is null)
        {
            return NotFound("The event was not found");

        }

        return result;
    }
}