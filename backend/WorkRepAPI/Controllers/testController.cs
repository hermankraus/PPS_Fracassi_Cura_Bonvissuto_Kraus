using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WorkRepAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    
    public class testController
    {

        [HttpGet]
        public string Get()
        {
            var response = "te hablo desde el back";
            return (response);
        }
    }
}
