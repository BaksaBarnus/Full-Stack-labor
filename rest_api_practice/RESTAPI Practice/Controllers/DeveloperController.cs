using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using RESTAPI_Practice.Models;

namespace RESTAPI_Practice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeveloperApiController : ControllerBase
    {
        static List<Developer> Developers = new List<Developer>()
        {
            new Developer() {Id = 1, Name = "John Doe", Salary = 870000, isActive = true},
            new Developer() {Id = 2, Name = "Mark Zuckerberg", Salary = 1200000, isActive = false},
            new Developer() {Id = 3, Name = "Lázár János", Salary = 245000, isActive = true},
            new Developer() {Id = 4, Name = "Menczer Tamás", Salary = 677000, isActive = true},
        };

        int nextId = 5;

        //GET all
        [HttpGet]
        public ActionResult<IEnumerable<Developer>> ReadAll()
        {
            return Ok(Developers);
        }

        //GET by ID
        [HttpGet("{id:int}")]
        public ActionResult ReadByID(int id)
        {
            var dev = Developers.FirstOrDefault(x => x.Id == id);

            if (dev == null)
            {
                return NotFound(new { message = $"{id} nem található!" });
            }

            return Ok(dev);
        }

        //POST

        [HttpPost]
        public ActionResult CreateDeveloper([FromBody] CreateDeveloperDTO dto)
        {
            var dev = new Developer()
            {
                Id = nextId++,
                Name = dto.Name,
                Salary = dto.Salary,
                isActive = dto.isActive
            };

            Developers.Add(dev);

            return CreatedAtAction(nameof(ReadByID), new { id = dev.Id }, dev);
        }

        //PUT

        [HttpPut("{id:int}")]
        public IActionResult UpdateDeveloer(int id, [FromBody] CreateDeveloperDTO dto)
        {
            var dev = Developers.FirstOrDefault(x => x.Id == id);

            if ( dev == null )
            {
                return NotFound(new { message = $"Nincs megadott (${id}) ID-vel rendelkezõ ember" });
            }

            dev.Name = dto.Name;
            dev.Salary = dto.Salary;
            dev.isActive = dto.isActive;

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteDeveloper(int id)
        {
            var dev = Developers.FirstOrDefault(x => x.Id == id);

            if( dev == null )
            {
                return NotFound(new { message = $"Nincs megadott (${id}) ID-vel rendelkezõ ember" });
            }
            
            Developers.Remove(dev);

            return NoContent();
        }

    }
}
