using Flights.Server.Dtos;
using Flights.Server.ReadModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Flights.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        private static List<NewPassengerDto> passengers = [];

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Register(NewPassengerDto dto)
        {
            passengers.Add(dto);
            Debug.WriteLine(passengers.Count);
            return CreatedAtAction(nameof(Find), new {email = dto.Email}, dto);
        }

        [HttpGet("{email}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<PassengerRm> Find(string email)
        {
            var passenger = passengers.FirstOrDefault(p => p.Email == email);
            if (passenger == null)
            {
                return NotFound();
            }
            var rm = new PassengerRm(
                passenger.Email, 
                passenger.FirstName, 
                passenger.LastName, 
                passenger.Gender);

            return Ok(rm);

        }
    }
}
